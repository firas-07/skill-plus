import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Profile from '../../assets/icons/account.png';
import LogoImg from '../../assets/logo-img.png';
import LogoText from '../../assets/logo-text.png';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import axios from 'axios';

const DEReport = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [candidates, setCandidates] = useState([]);  // Consolidated data
    const mcqScore = Math.floor(Math.random() * 101)

    function generateAIRecommendations(mcqScore) {
        if (mcqScore < 50) {
            return "Focus on Java basics, such as data types, loops, and control statements.";
        } else if (mcqScore < 75) {
            return "Work on intermediate Java concepts like collections, multithreading, and OOP principles.";
        } else {
            return "You're doing well! Consider advancing your knowledge on Java frameworks like Spring.";
        }
    }

    // Fetch all the data in a single useEffect
    useEffect(() => {
        // Fetch all relevant data
        const fetchData = async () => {
            try {
                const infoRes = await axios.get('http://localhost:5000/get-information');
                const certRes = await axios.get('http://localhost:5000/get-certification');
                const detailRes = await axios.get('http://localhost:5000/get-yourdetail');

                // Assuming each response has matching candidate records by some ID
                const mergedCandidates = infoRes.data.map((info, index) => {
                    return {
                        ...info,
                        ...detailRes.data[index],
                        ...certRes.data[index]
                    };
                });

                setCandidates(mergedCandidates);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    function IndividualCandidateReport() {
        const doc = new jsPDF();
        doc.setFontSize(18);
        doc.text("Individual Candidate Report", 10, 10);

        const tableData = candidates.map((item) => [
            item.name || 'N/A',
            item.email || 'N/A',
            item.degree || 'N/A',
            item.specification || 'N/A',
            '100%',
            mcqScore,
            item.certifications || 'N/A',
            item.internshipCompleted || 'N/A',
            generateAIRecommendations || 'N/A'
        ]);

        doc.autoTable({
            head: [['Name', 'Email ID', 'Degree', 'Specialization', 'Completion', 'Score', 'Certification', 'Internship', 'Recommended Area']],
            body: tableData,
            startY: 30,
            styles: { fontSize: 7 }
        });

        doc.save('individual_report.pdf');
    }

    function TrainerFeedbackReport(e) {
        const doc = new jsPDF();
        doc.setFontSize(18);
        doc.text("Trainers' Feedback Analysis Report", 10, 10);

        const tableData = [[
            "Overall Score: 4.3/5",
            "The Q&A time could be longer.",
            "Practical demonstrations improve feedback scores significantly, especially for technical topics. Jane Smith already scores high in this area but could enhance further by adding more practical examples."
        ]]

        doc.autoTable({
            head: [['Feedback score of trainer', 'Suggestion from candidate', 'Insights']],
            body: tableData,
            startY: 30,
            styles: { fontSize: 8 }
        });

        doc.save('Feedback_Report.pdf');

    }

    function BatchwiseScoreCard() {
        const doc = new jsPDF();
        doc.setFontSize(18);
        doc.text("Batch-wise Score Card", 10, 10);

        // Array of objects representing different trainers
        const BatchScoreCard = [
            {
                name: 'Firas',
                percentage: '90%',
                average: Math.floor(Math.random() * 101), // Random project score out of 100
                performance: 'good',

            },
            {
                name: 'Sameena',
                percentage: '95%',
                average: Math.floor(Math.random() * 101),
                performance: 'excellent',

            },
            // Add more trainer feedback as needed
        ];

        // Prepare table data (an array of arrays)
        const tableData = BatchScoreCard.map(item => [
            item.name,
            item.average,
            item.percentage,
            item.performance
        ]);

        // Create the table in PDF
        doc.autoTable({
            head: [['Name of the candidate', 'Average of their score', 'Percenatage', 'Comparison on performance']],
            body: tableData,
            startY: 30,
            styles: { fontSize: 8 }
        });

        // Save the PDF file
        doc.save('Batch-wise Score Card.pdf');
    }

    function College_wiseScoreCard() {
        const doc = new jsPDF();
        doc.setFontSize(18);
        doc.text("College-wise Score Card", 10, 10);

        // Array of objects representing different trainers
        const CollegeScoreCard = [
            {
                name: 'Firas',
                college: 'dhaanish ahmed',
                percentage: '90%',
                average: Math.floor(Math.random() * 101), // Random project score out of 100
                performance: 'good',

            },
            {
                name: 'Sameena',
                college: 'crescent',
                percentage: '95%',
                average: Math.floor(Math.random() * 101),
                performance: 'excellent',

            },
            // Add more trainer feedback as needed
        ];

        // Prepare table data (an array of arrays)
        const tableData = CollegeScoreCard.map(item => [
            item.name,
            item.college,
            item.percentage,
            item.performance,
            item.average]);

        // Create the table in PDF
        doc.autoTable({
            head: [['Name of the candidate', 'college name', 'Average of their score', 'Percenatage', 'Comparison on performance']],
            body: tableData,
            startY: 30,
            styles: { fontSize: 8 }
        });

        // Save the PDF file
        doc.save('college-wise Score Card.pdf');
    }

    function TopperList() {
        const doc = new jsPDF();
        doc.setFontSize(18);
        doc.text("Topper List", 10, 10);

        // Array of objects representing different trainers
        const TopperList = [
            {
                name: 'Firas',
                certification: 'java',
                percentage: '90%',
                attempts: '1'
            },
            {
                name: 'Sameena',
                certification: 'python',
                percentage: '95%',
                attempts: '1'


            },
            // Add more trainer feedback as needed
        ];

        // Prepare table data (an array of arrays)
        const tableData = TopperList.map(item => [
            item.name,
            item.certification,
            item.percentage,
            item.attempts
        ]);

        // Create the table in PDF
        doc.autoTable({
            head: [['Name of the candidate', 'certification', 'Percenatage', 'No of attempts']],
            body: tableData,
            startY: 30,
            styles: { fontSize: 8 }
        });

        // Save the PDF file
        doc.save('Topper List.pdf');
    }

    return (
        <div>
            {/* Navbar */}
            <nav className='flex justify-between h-[80px] md:gap-5 w-[100%] items-center sticky top-0 z-30 bg-[#F6F4EB] md:h-24 pt-8 md:pt-12'>
                <div className='flex items-start justify-start md:ml-0 ml-[-5%] w-[40%] md:w-[20%]'>
                    <img src={LogoImg} className='md:w-[40%] w-[70%]' />
                    <img src={LogoText} className='md:w-[70%] md:ml-[-28%] ml-[-45%] mt-[-16%]' />
                </div>
                <ul className='hidden md:flex md:gap-14 font-bold md:justify-center mt-[-4%] w-[25%]'>
                    <Link to={'/dataengineering/home'}><a>Home</a></Link>
                    <Link to={'/dataengineering/courses'}><a>Courses</a></Link>
                    <Link to={'/dataengineering/resources'}><a>Resources</a></Link>
                </ul>
                <div className='text-[#808080] hidden md:gap-2 md:flex items-center justify-start w-[20%] bg-white rounded-xl p-1 pl-2 mt-[-4%]'>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input placeholder='search here' className='bg-transparent mt-[-1%] outline-none' />
                </div>
                <div className='w-[35%] hidden font-bold lg:flex lg:items-center lg:justify-end mt-[-4%] lg:gap-5'>
                    <div className='w-[35%] font-bold flex items-center justify-end mr-10 gap-5 cursor-pointer' >
                        <img src={Profile} onClick={() => { setShowProfile(true) }} className='w-8' />
                    </div>
                </div>

                <div className='md:hidden ml-[-15%] mr-5 cursor-pointer' onClick={() => { setShowNavbar(true) }}>
                    <i class="fa-solid fa-bars text-2xl mb-9"></i>
                </div>
            </nav>
            {/* Side Navbar */}
            {
                showNavbar ?
                    <nav className='start-page w-[50%] absolute right-0 z-30 top-0 h-[780px]'>
                        <div className='flex justify-end m-3'>
                            <i class="fa-solid fa-xmark text-2xl cursor-pointer text-white" onClick={() => { setShowNavbar(false) }}></i>
                        </div>
                        <Link to={'/dataengineering/home'}>
                            <div className='flex ml-[25%] items-center gap-4 mt-56'>
                                <h1 className='text-white text-xl'>Home</h1>
                            </div>
                        </Link>
                        <Link to={'/dataengineering/courses'}>
                            <div className='flex ml-[25%] items-center gap-4 mt-8'>
                                <h1 className='text-white text-xl'>Courses</h1>
                            </div>
                        </Link>
                        <Link to={'/dataengineering/resources'}>
                            <div className='flex ml-[25%] items-center gap-4 mt-8'>
                                <h1 className='text-white text-xl'>Resources</h1>
                            </div>
                        </Link>
                        <div className='w-[45%] font-bold flex items-center justify-end ml-[43%] mt-[110%] lg:gap-5'>
                            <div className='w-[35%] font-bold flex items-center justify-end mr-10 gap-2 cursor-pointer' >
                                <img src={Profile} onClick={() => { setShowProfile(true) }} className='w-8' />
                                <h1 className='text-[#E6B9A6]'>Profile</h1>
                            </div>
                        </div>
                    </nav> : ""
            }

            {/* Profile Sidebar */}
            {
                showProfile ?
                    <nav className='start-page md:w-[20%] w-[50%] absolute right-0 z-40 top-0 h-[780px]'>
                        <div className='flex justify-end m-3'>
                            <i class="fa-solid fa-xmark text-2xl cursor-pointer text-white" onClick={() => { setShowProfile(false) }}></i>
                        </div>
                        <Link to={'/dataengineering'}>
                            <div className='flex md:ml-[25%] ml-[10%] items-center gap-4 mt-56 '>
                                <i class="fa-solid fa-chalkboard text-white text-2xl"></i>
                                <h1 className='text-white text-xl'>Learning</h1>
                            </div>
                        </Link>
                        <div className='flex md:ml-[25%] ml-[10%] items-center gap-4 mt-8'>
                            <i class="fa-solid fa-chart-line text-white text-2xl"></i>
                            <h1 className='text-white text-xl' style={{ borderBottom: "3px solid white" }}>Report</h1>
                        </div>
                        <Link to={'/dataengineering/analysis'}>
                            <div className='flex md:ml-[25%] ml-[10%] items-center gap-4 mt-8'>
                                <i class="fa-solid fa-magnifying-glass-chart text-white text-2xl"></i>
                                <h1 className='text-white text-xl'>Analysis</h1>
                            </div>
                        </Link>
                    </nav> : ""
            }

            <main className='start-page flex justify-center mx-10 rounded-xl'>
                <div className='p-10 h-[650px] flex flex-col items-start gap-5'>
                    <div className='ml-28'>
                        <h1 className='text-3xl text-white font-bold'>Reports</h1>
                    </div>
                    <button onClick={IndividualCandidateReport} className='mt-5 font-semibold text-xl text-white bg-black hover:text-black hover:bg-[#F6F4EB] p-2 px-10 rounded-xl'>Individual Candidate Report</button>
                    <button onClick={TrainerFeedbackReport} className='mt-5 font-semibold text-xl text-white bg-black hover:text-black hover:bg-[#F6F4EB] p-2 rounded-xl'>Trainer's Feedback Analysis Report</button>
                    <button onClick={BatchwiseScoreCard} className='mt-5 font-semibold text-xl text-white bg-black hover:text-black hover:bg-[#F6F4EB] p-2 rounded-xl px-[70px]'> Batch-wise Score Card</button>
                    <button onClick={College_wiseScoreCard} className='mt-5 font-semibold text-xl text-white bg-black hover:text-black hover:bg-[#F6F4EB] p-2 rounded-xl px-16'>College-wise Score Card</button>
                    <button onClick={TopperList} className='mt-5 font-semibold text-xl text-white bg-black hover:text-black hover:bg-[#F6F4EB] p-2 rounded-xl px-32'>Topper List</button>
                    <button className='mt-5 font-semibold text-xl text-white bg-black hover:text-black hover:bg-[#F6F4EB] p-2 rounded-xl px-14'>Batch Comparison Report</button>
                </div>
            </main>
        </div>
    );
}

export default DEReport;
