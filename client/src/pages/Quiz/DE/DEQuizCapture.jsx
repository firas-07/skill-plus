import React, { useRef, useState } from 'react';
import capture from '../../../assets/captureEg.png'
import { Link } from 'react-router-dom';
const DEQuizCapture = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [photo, setPhoto] = useState(null);

    // Start the webcam
    const startWebcam = () => {
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then((stream) => {
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            })
            .catch((err) => {
                console.error("Error accessing the camera: ", err);
            });
    };

    // Capture photo from the webcam feed
    const capturePhoto = () => {
        const canvas = canvasRef.current;
        const video = videoRef.current;
        const context = canvas.getContext("2d");

        // Draw the current video frame onto the canvas
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Convert the canvas to an image URL
        const image = canvas.toDataURL("image/png");
        setPhoto(image);
    };

    return (
        <section className='flex justify-center mt-[2%]'>
            <div className='w-[1000px] h-[500px] bg-white p-5 flex flex-col justify-start items-start gap-2 relative'>
                <div className='flex items-center gap-2'>
                    <i class="fa-solid fa-bars"></i>
                    <h1 className='font-medium'>Take a Selfie Picture</h1>
                </div>
                <p>This photo will be verified by the proctor.</p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '20px 0' }}>
                    {/* Webcam video feed */}
                    <div>
                        <video
                            ref={videoRef}
                            width="320"
                            height="240"
                            autoPlay
                            style={{ border: '1px solid black', borderRadius: '4px' }}
                        ></video>
                        <div style={{ marginTop: '10px' }}>
                            <button onClick={startWebcam} style={buttonStyle}>Start Webcam</button>
                            <button onClick={capturePhoto} style={{ ...buttonStyle, backgroundColor: 'green', marginLeft: '10px' }}>
                                Capture
                            </button>
                        </div>
                    </div>

                    {/* Display captured photo */}
                    <div style={{ marginLeft: '20px' }}>
                        {photo ? (
                            <img src={photo} alt="Captured" width="320" height="240" style={{ border: '1px solid black', borderRadius: '4px' }} />
                        ) : (
                            <div style={{ width: '320px', height: '240px', border: '1px solid black', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ccc' }}>
                                No photo taken
                            </div>
                        )}
                    </div>
                </div>

                {/* Navigation buttons */}
                <div>
                    <Link to={'/dataEngineering/test/steps'}>
                        <button className='px-5 p-2 border border-black'>Prev</button>
                    </Link>
                    <Link to={'/dataEngineering/test/start'}>
                        <button style={navButtonStyle}>Next</button>
                    </Link>
                </div>

                {/* Hidden canvas for photo capture */}
                <canvas ref={canvasRef} width="320" height="240" style={{ display: 'none' }}></canvas>
                <img src={capture} className='w-[25%] absolute right-5 top-20' alt="" />
            </div>
        </section>
    );
};

// Button styling
const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};

const navButtonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    margin: '10px',
};

export default DEQuizCapture;
