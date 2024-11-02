import React, { useState } from 'react'
import LogoImg from '../../assets/logo-img.png'
import LogoText from '../../assets/logo-text.png'
import MyComponent from '../../components/Mobile Screens/Certifications/MyComponent'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Certifications = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        certifications: '',
        courses: '',
        internshipCompleted: '',
    });
    const [certificateFile, setCertificateFile] = useState(null);
    const [internshipCertificate, setInternshipCertificate] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e) => {
        if (e.target.name === 'certificateFile') {
            setCertificateFile(e.target.files[0]);
        } else if (e.target.name === 'internshipCertificate') {
            setInternshipCertificate(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('certifications', formData.certifications);
        data.append('courses', formData.courses);
        data.append('internshipCompleted', formData.internshipCompleted);
        if (certificateFile) data.append('certificateFile', certificateFile);
        if (internshipCertificate) data.append('internshipCertificate', internshipCertificate);

        try {
            const response = await axios.post('http://localhost:5000/submit-certifications', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            navigate('/socialconnect')
        } catch (error) {
            alert(error)
        }
    };
    return (
        <div>
            <div className="w-[1440px] h-[100%] relative bg-[#f6f4eb] hidden md:block">
                <div className="w-[521px] h-[740px] left-0 top-0 absolute bg-[#91c8e4]/60 blur-sm" />
                <div className="w-[666px] h-[350px] left-[-55px] top-[-24px] absolute">
                    <img className="w-[270px] h-[80%] left-0 top-0 absolute" src={LogoImg} />
                    <img className="w-[50%] h-[100%] left-[15%] top-[-12%] absolute" src={LogoText} />
                </div>
                <i class="fa-solid fa-address-card left-[933px] top-[30px] absolute text-black text-[60px]"></i>
                <form action="" onSubmit={handleSubmit}>
                    <div className="left-[860px] top-[115px] absolute text-black text-[32px] font-medium font-['Lexend Deca']">Certification</div>
                    <div className="w-[100px] h-[100px] left-[917px] top-[10px] absolute bg-[#d9d9d9]/0 rounded-[10px] border-2 border-black" />
                    <div className="left-[785px] top-[180px] absolute text-black text-2xl font-normal font-['Lexend Deca']">Certifications</div>
                    <div className="w-[347px] h-10 left-[784px] top-[220px] absolute">
                        <input type="text" name='certifications' onChange={handleChange} placeholder='eg: Python, Java' className='px-2 outline-none w-full border-2 border-black py-1 w-full rounded-xl' />
                    </div>
                    <div className="w-[347px] h-10 left-[784px] top-[305px] absolute">
                        <input type="text" name='courses' onChange={handleChange} placeholder='eg: Java Course' className='px-2 outline-none border-2 border-black py-1 w-full rounded-xl' />
                    </div>
                    <div className="w-[347px] h-10 left-[784px] top-[480px] absolute">
                        <input type="text" name='internshipCompleted' onChange={handleChange} placeholder='eg: Java Internship' className='px-2 outline-none border-2 border-black py-1 w-full rounded-xl' />
                    </div>
                    <div className="left-[786px] top-[265px] absolute text-black text-2xl font-normal font-['Lexend Deca']">Course Completed</div>
                    <div className="left-[786px] top-[350px] absolute text-black text-2xl font-normal font-['Lexend Deca']">Upload Certificates</div>
                    <div className="left-[786px] top-[435px] absolute text-black text-2xl font-normal font-['Lexend Deca']">Internship Completed</div>
                    <div className="left-[786px] top-[530px] absolute text-black text-2xl font-normal font-['Lexend Deca']">Upload Internship Certificate</div>
                    <input type="file" name='certificateFile' onChange={handleFileChange} placeholder='Choose file' className='absolute left-[786px] top-[390px]' />
                    <input type="file" name='internshipCertificate' onChange={handleFileChange} placeholder='Choose file' className='absolute left-[786px] top-[580px]' />
                    <div className="w-[347px] h-10 left-[790px] top-[650px] absolute cursor-pointer">
                        <div className="w-[347px] h-10 left-0 top-0 absolute bg-[#004eec] rounded-[10px]" />
                        <button type='submit' className="left-[128px] top-[5px] absolute text-[#fbf7f7] text-lg font-medium font-['Lexend Deca']">Continue</button>
                    </div>
                </form>
                <div className="w-[81px] h-20 left-[923px] top-[210px] absolute" />
                <div className="w-[444px] h-[205px] left-[45px] top-[300px] absolute">
                    <div className="w-[402px] h-[50px] left-0 top-0 absolute">
                        <i class="fa-regular fa-circle-check text-3xl mt-2 text-[#797171]"></i>
                        <div className="w-[35px] h-[35px] p-[2.92px] left-0 top-[3px] absolute justify-center items-center inline-flex" />
                        <div className="left-[45px] top-0 absolute text-[#797171] text-lg font-bold font-['Lexend Deca']">Your Details</div>
                        <div className="left-[45px] top-[27px] absolute text-[#808080] text-lg font-medium font-['Lexend Deca']">Please provide degree and specification</div>
                    </div>
                    <div className="w-[444px] h-[50px] left-0 top-[77px] absolute">
                        <i class="fa-regular fa-circle-check text-3xl mt-2 text-[#032976]"></i>
                        <div className="w-[35px] h-[35px] p-[2.92px] left-0 top-[3px] absolute justify-center items-center inline-flex" />
                        <div className="left-[45px] top-0 absolute text-[#032976] text-lg font-bold font-['Lexend Deca']">Certifications</div>
                        <div className="left-[45px] top-[27px] absolute text-[#4C4848] text-lg font-medium font-['Lexend Deca']">Please provide certifications and Internships</div>
                    </div>
                    <div className="w-[368px] h-[50px] left-0 top-[155px] absolute">
                        <i class="fa-regular fa-circle-check text-3xl mt-2 text-[#797171]"></i>
                        <div className="w-[35px] h-[35px] p-[2.92px] left-0 top-[3px] absolute justify-center items-center inline-flex" />
                        <div className="left-[45px] top-0 absolute text-[#797171] text-lg font-bold font-['Lexend Deca']">Social Connect</div>
                        <div className="left-[45px] top-[27px] absolute text-[#808080] text-lg font-medium font-['Lexend Deca']">Please provide LinkedIn and GitHub</div>
                    </div>
                </div>
                <div className="w-full h-[50px] left-[45px] top-[225px] absolute">
                    <i class="fa-regular fa-circle-check text-3xl mt-2 text-[#797171]"></i>
                    <div className="left-[46px] top-0 absolute text-[#797171] text-lg font-bold font-['Lexend Deca']">Log In</div>
                    <div className="left-[46px] top-[27px] absolute w-full text-[#808080] text-lg font-medium font-['Lexend Deca']">Please provide name and password</div>
                    <div className="w-[35px] h-[35px] p-[2.92px] left-0 top-[3px] absolute justify-center items-center inline-flex" />
                </div>
                <div className="w-[337px] h-[50px] left-[45px] top-[530px] absolute">
                    <div className="w-[35px] h-[35px] p-[2.92px] left-0 top-[3px] absolute justify-center items-center inline-flex" />
                    <i class="fa-regular fa-circle-check text-3xl mt-2 text-[#797171]"></i>
                    <div className="left-[45px] top-0 absolute text-[#797171] text-lg font-bold font-['Lexend Deca']">Programming Language</div>
                    <div className="left-[45px] top-[27px] absolute text-[#808080] text-lg font-medium font-['Lexend Deca']">Please provide Language Known</div>
                </div>
            </div>
            <div className='md:hidden'>
                <MyComponent />
            </div>
        </div>
    )
}

export default Certifications
