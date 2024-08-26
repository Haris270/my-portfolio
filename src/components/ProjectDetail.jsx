import React, {useState, useEffect, useRef} from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../projects.json';
import * as tf from '@tensorflow/tfjs';

// ------- Project Images Import ----------- //
import beige from "./images/beige-noise-bg.png";
import calm from "./images/calm-bg.jpg";
import golden from "./images/golden-noise-bg.png";

const img = [beige, calm, golden]


const ProjectDetails = () => {
    const { id } = useParams();
    const project = projectsData.projects.find((project) => project.id === id);
    const index = parseInt(id) - 1;

    // --------------------------------------------- //
    const canvasRef = useRef(null);
    const [model, setModel] = useState(null);
    const [prediction, setPrediction] = useState(null);


    useEffect(() =>{
        // load the model when the component mounts
        const loadModel = async () => {
            const loadedModel = await tf.loadLayersModel('../model/model.json');
            setModel(loadedModel);
        };
        
        loadModel();
    },[]

    );

    const handleMouseDown = (e) => {
        setIsDrawing(true);
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    };

    const handleMouseMove = (e) => {
        if (!isDrawing) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        ctx.stroke();
    };

    const handleMouseUp = () => {
        setIsDrawing(false);
    };




    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0,0, canvas.width, canvas.height);

    };

    const handlePredict = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const imageData = ctx.getImageData(0,0, canvas.width, canvas.height);

        // Preprocess the Image

        const tensor = tf.browser.fromPixels(imageData, 1)
            .resizeNearestNeighbor([28,28])
            .mean(2)
            .expandDims(0)
            .expandDims(-1)
            .toFloat()
            .div(tf.scalar(255));

        const prediction = model.predict(tensor);
        const predictedDigit = prediction.argMax(-1).dataSync()[0];
        setPrediction(predictedDigit);

    };

    // --------------------------------------------- //

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="each-post container">
            <h1>{project.title}</h1>
            {/* <img src={img[index]} alt={project.title} />  */}
            {/* <p>{project.content}</p> */}
            <canvas 
                ref = {canvasRef}
                width={270}
                height={270}
                style={{border: '1px black solid'}}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
            />
            <button onClick={clearCanvas} className='clear-canvas-btn'>Clear Canvas</button>
            <button onClick={handlePredict} className='predict-btn'>Predict Digit</button>

            {prediction !== null && <p>Predicted Digit: {prediction}</p>}
        </div>
    );
};

export default ProjectDetails;