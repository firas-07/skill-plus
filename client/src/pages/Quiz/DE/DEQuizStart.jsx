import React, { useEffect, useState, useRef } from 'react';
import Countdown from 'react-countdown';
import Webcam from 'react-webcam';
import * as faceapi from 'face-api.js';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './App.css';
import Code from '../../../assets/icons/coding.png'
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf'; // Import jsPDF library
import 'jspdf-autotable';  // For creating tables in PDF

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const DEQuizStart = () => {
    const [fullscreen, setFullscreen] = useState(false);
    const [isFaceDetected, setIsFaceDetected] = useState(true);
    const [permissionError, setPermissionError] = useState(null);
    const webcamRef = useRef(null);
    const [modelsLoaded, setModelsLoaded] = useState(false);
    const [userAnswers, setUserAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [chartData, setChartData] = useState(null);
    const [reportData, setReportData] = useState(null);
    const [examEndTime, setExamEndTime] = useState(null);
    const [timeUp, setTimeUp] = useState(false);

    useEffect(() => {
        const loadModels = async () => {
            try {
                await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
                setModelsLoaded(true);
            } catch (error) {
                console.error("Error loading face-api.js models: ", error);
                setModelsLoaded(false);
            }
        };
        loadModels();
    }, []);

    const handleFullscreen = () => {
        if (!fullscreen) {
            document.documentElement.requestFullscreen();
            setFullscreen(true);
        } else {
            document.exitFullscreen();
            setFullscreen(false);
        }
    };

    const checkFaceDetection = async () => {
        if (webcamRef.current && webcamRef.current.video.readyState === 4 && modelsLoaded) {
            const video = webcamRef.current.video;
            const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions());

            if (detections.length === 0) {
                setIsFaceDetected(false);
                alert('No face detected! Please ensure your face is visible to the camera.');
            } else {
                setIsFaceDetected(true);
            }
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (modelsLoaded) {
                checkFaceDetection();
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [modelsLoaded]);

    const handleExitFullscreen = () => {
        if (!document.fullscreenElement) {
            alert("You have exited full-screen mode! Please return to full-screen mode.");
        }
    };

    const handleUserMediaError = (error) => {
        console.error("Webcam error: ", error);
        setPermissionError("Webcam permission denied or unavailable.");
    };

    useEffect(() => {
        const savedEndTime = localStorage.getItem('examEndTime');
        if (savedEndTime) {
            setExamEndTime(parseInt(savedEndTime));
        } else {
            const newEndTime = Date.now() + 1200000; // 20 minutes in ms
            setExamEndTime(newEndTime);
            localStorage.setItem('examEndTime', newEndTime);
        }
    }, []);

    useEffect(() => {
        handleFullscreen();
        document.addEventListener('fullscreenchange', handleExitFullscreen);
        return () => {
            document.removeEventListener('fullscreenchange', handleExitFullscreen);
        };
    }, []);

    useEffect(() => {
        if (submitted) {
            localStorage.removeItem('examEndTime');
        }
    }, [submitted]);

    const handleAnswerChange = (questionIndex, selectedOption) => {
        setUserAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionIndex]: selectedOption,
        }));
    };

    const evaluateTest = () => {
        let totalScore = 0;
        let correctAnswers = 0;
        let incorrectAnswers = 0;
        let report = [];

        questions.forEach((q, index) => {
            const isCorrect = userAnswers[index] === q.correctAnswer;
            if (isCorrect) correctAnswers++;
            else incorrectAnswers++;

            report.push({
                question: q.question,
                selectedAnswer: userAnswers[index] || "No answer",
                correctAnswer: q.correctAnswer,
                result: isCorrect ? "Correct" : "Incorrect",
            });

            if (isCorrect) {
                totalScore++;
            }
        });

        setScore(totalScore);
        setSubmitted(true);

        setChartData({
            labels: ['Correct', 'Incorrect'],
            datasets: [
                {
                    label: 'Test Result',
                    data: [correctAnswers, incorrectAnswers],
                    backgroundColor: ['#4caf50', '#f44336'],
                },
            ],
        });

        setReportData({
            totalQuestions: questions.length,
            correctAnswers,
            incorrectAnswers,
            detailedReport: report,
        });
    };

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed || timeUp) {
            setTimeUp(true);
            return <span>Time's up!</span>;
        } else {
            return (
                <span className='text-3xl'>
                    {hours}h {minutes}m {seconds}s
                </span>
            );
        }
    };

    const downloadPDFReport = () => {
        const doc = new jsPDF();
        doc.setFontSize(18);
        doc.text("Test Report", 10, 10);
        doc.setFontSize(12);
        doc.text(`Total Questions: ${reportData.totalQuestions}`, 10, 20);
        doc.text(`Correct Answers: ${reportData.correctAnswers}`, 10, 30);
        doc.text(`Incorrect Answers: ${reportData.incorrectAnswers}`, 10, 40);

        const tableData = reportData.detailedReport.map((item, index) => [
            index + 1,
            item.question,
            item.selectedAnswer,
            item.correctAnswer,
            item.result
        ]);

        doc.autoTable({
            head: [['#', 'Question', 'Your Answer', 'Correct Answer', 'Result']],
            body: tableData,
            startY: 50,
            styles: { fontSize: 8 }
        });

        doc.save('test_report.pdf');
    };

    const questions = [
        {
            question: "What is the primary purpose of ETL in data engineering?",
            options: [
                "Extract, Transfer, Load",
                "Extract, Transform, Load",
                "Edit, Test, Load",
                "Enhance, Transfer, Load"
            ],
            correctAnswer: "Extract, Transform, Load",
        },
        {
            question: "Which tool is commonly used for big data processing in distributed systems?",
            options: [
                "Hadoop",
                "Mongo DB",
                "Postgre SQL",
                "Excel"
            ],
            correctAnswer: "Hadoop",
        },
        {
            question: "Which of the following is a cloud-based data warehousing solution?",
            options: [
                "Google BigQuery",
                "MongoDB",
                "Redis",
                "MySQL"
            ],
            correctAnswer: "Google BigQuery",
        },
        {
            question: "In data engineering, what does data pipeline refer to?",
            options: [
                "A process of data analysis",
                " A sequence of steps to process and transfer data between systems",
                "A storage mechanism for large datasets",
                "A tool for data visualization"
            ],
            correctAnswer: "A sequence of steps to process and transfer data between systems",
        },
        {
            question: "What does Apache Kafka primarily provide?",
            options: [
                "Data storage",
                "Real-time data streaming and message queuing",
                "Data visualization",
                "SQL query optimization"
            ],
            correctAnswer: "Real-time data streaming and message queuing",
        },
        {
            question: "Which of the following is a popular relational database management system (RDBMS)?",
            options: [
                "Apache Cassandra",
                "Amazon Redshift",
                "MySQL",
                "Neo4j"
            ],
            correctAnswer: "MySQL",
        },
        {
            question: "What is the primary use of Apache Spark in data engineering?",
            options: [
                "Machine learning model deployment",
                "Distributed data processing",
                "Database management",
                "Data visualization"
            ],
            correctAnswer: "Distributed data processing",
        },
        {
            question: "In which scenario would you use a NoSQL database?",
            options: [
                "When handling structured data only",
                "When the schema needs to be flexible and the data is unstructured",
                "When transactions need to be strictly ACID compliant",
                "When running complex SQL queries"
            ],
            correctAnswer: "When the schema needs to be flexible and the data is unstructured",
        },
        {
            question: "What is the purpose of a data lake in a data architecture?",
            options: [
                "To store raw and processed data for structured data only",
                "To store large volumes of unstructured and structured data in its raw form",
                "To manage real-time streaming data",
                "To visualize data insights in dashboards"
            ],
            correctAnswer: "To store large volumes of unstructured and structured data in its raw form",
        },
        {
            question: "What is Apache Airflow used for in data engineering?",
            options: [
                "Data visualization",
                "Building and managing data workflows and pipelines",
                "Real-time data streaming",
                "Managing relational databases"
            ],
            correctAnswer: "Building and managing data workflows and pipelines",
        }
    ];

    return (
        <div className="app-container">
            {
                !submitted ? (
                    <>
                        <div className="question-section">
                            <div className='flex items-center gap-3 mb-3 bg-[#F6F4EB] w-full'>
                                <img src={Code} className='w-7 ml-3' alt="" />
                                <h2 className='p-3 text-xl font-semibold'>Java Full Stack Test</h2>
                            </div>
                            {questions.map((q, index) => (
                                <div key={index} className="question-block flex flex-col items-start justify-center">
                                    <p className='font-bold'><span className='bg-[#F6F4EB] px-5 p-1'>{index + 1}.</span> {q.question}</p>
                                    {q.options.map((option, idx) => (
                                        <div key={idx} className='ml-14 mt-5 flex items-center gap-2'>
                                            <input type="radio" id={`q${index}_opt${idx}`} name={`q${index}`} value={option} />
                                            <label htmlFor={`q${index}_opt${idx}`}>{option}</label>
                                        </div>
                                    ))}
                                </div>
                            ))}
                            <button onClick={evaluateTest} className='m-4 px-4 p-1 bg-blue-500 text-white'>Submit</button>
                        </div>
                        <h1 className='absolute right-28 text-xl top-8 font-bold'>Java Full Stack Final Assessment</h1>
                        <div className="start-page w-[30%] h-[50%] mt-20 flex flex-col justify-start gap-2 items-center p-5">
                            <div className='flex justify-between items-start'>
                                <div className="timer text-white">
                                    <div className='flex gap-2'>
                                        <i class="fa-regular fa-clock mt-1"></i>
                                        <h3>Timer</h3>
                                    </div>
                                    <Countdown date={Date.now() + 1200000} renderer={renderer} /> {/* 20 minutes */}
                                </div>
                                <div className="webcam w-[35%] h-[25%]">
                                    <Webcam audio={false} ref={webcamRef} onUserMediaError={handleUserMediaError} />
                                </div>
                            </div>
                            <div className='flex justify-between w-[60%] mt-32 p-1 px-3 border border-white text-white items-center'>
                                <i class="fa-solid fa-arrow-left"></i>
                                <h1>Q(10)</h1>
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                            <div className='flex justify-center w-[60%] p-1 px-3 border border-white text-white items-center'>
                                <h1>Multiple Choice Questions</h1>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="results-page m-5">
                        <h2 className='font-bold text-3xl'>Test Result</h2>
                        {chartData && <Bar data={chartData} />}
                        {reportData && (
                            <div className="detailed-report mt-5">
                                <p className='text-red-500 font-bold text-2xl'>Total Score: {score} / {questions.length}</p>
                            </div>
                        )}
                        <div className='flex gap-3'>
                            <button className="bg-green-500 p-2 px-5 text-white mt-5" onClick={downloadPDFReport}>
                                Report
                            </button>
                            <Link to="/feedback">
                                <button className="bg-blue-500 p-2 text-white mt-5">Feedback</button>
                            </Link>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default DEQuizStart;
