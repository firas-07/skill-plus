import React, { useState, useRef, useEffect } from "react";
import Code from '../../../assets/icons/coding.png'
import { Link } from "react-router-dom";
const NETQuizPreview = () => {
    const [recording, setRecording] = useState(false);
    const [videoURL, setVideoURL] = useState(null);
    const videoRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const recordedChunks = useRef([]);

    // Access camera when the component is mounted
    useEffect(() => {
        async function getCameraAccess() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: true,
                });
                videoRef.current.srcObject = stream;
            } catch (err) {
                console.error("Error accessing camera: ", err);
            }
        }

        getCameraAccess();
    }, []);

    const startRecording = () => {
        setRecording(true);
        recordedChunks.current = [];

        const stream = videoRef.current.srcObject;
        mediaRecorderRef.current = new MediaRecorder(stream, {
            mimeType: "video/webm",
        });

        mediaRecorderRef.current.ondataavailable = (event) => {
            if (event.data.size > 0) {
                recordedChunks.current.push(event.data);
            }
        };

        mediaRecorderRef.current.onstop = () => {
            const blob = new Blob(recordedChunks.current, {
                type: "video/webm",
            });
            const videoUrl = URL.createObjectURL(blob);
            setVideoURL(videoUrl);
        };

        mediaRecorderRef.current.start();
    };

    const stopRecording = () => {
        setRecording(false);
        mediaRecorderRef.current.stop();
    };
    return (
        <section className='flex justify-center mt-[2%]'>
            <div className='w-[1000px] h-[650px] bg-white p-5 flex justify-start items-start gap-10'>
                <img src={Code} alt="" className='w-20' />
                <div className='w-[80%] flex flex-col justify-start items-start gap-5 relative'>
                    <h1 className='font-semibold text-2xl'>.NET Developer Final Assessment</h1>
                    <p>This is the Final Assessment to complete this course which includes all the fundamentals concepts covered in the video lectures and the core concepts of the java programming</p>
                    <h1><b>Note:</b> The Assessment will be AI proctured mode in which and you need to allow the web camera access to monitor your activities</h1>
                    <div className='w-[90%] h-[280px] flex z-10 relative'>
                        <video ref={videoRef} className="" autoPlay playsInline style={{ width: "100%" }} />
                        <br />
                        {!recording ? (
                            <button onClick={() => startRecording()}></button>
                        ) : (
                            <button onClick={stopRecording}>Stop Recording</button>
                        )}
                        <br />
                        {videoURL && (
                            <div>
                                <h3>Recorded Video:</h3>
                                <video src={videoURL} controls style={{ width: "100%" }} />
                                <a href={videoURL} download="recording.webm">
                                    Download Video
                                </a>
                            </div>
                        )}
                    </div>
                    <div className="flex items-center gap-3">
                        <i class="fa-solid fa-thumbs-up text-green-600"></i>
                        <h1 className='text-sm'>Camera test is successfull. Proceed to test</h1>
                    </div>
                    <Link to={'/net/test/instruction'}>
                        <button className='m-2 bg-green-600 text-white px-2 p-1 rounded-xl'>Attempt Test</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default NETQuizPreview
