import React, { useState } from 'react'
import LogoImg from '../../assets/logo-img.png'
import LogoText from '../../assets/logo-text.png'
import { Link, useNavigate } from 'react-router-dom'
import SignUpPage from '../../components/Mobile Screens/SignUp/SignUpPage'
import { database } from '../../FirebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import '../../index.css'
import axios from 'axios'
const SignUp = () => {
    const navigate = useNavigate()
    var [success, setSucess] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    //function to submit email and password to firebase
    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        try {
            const response = await axios.post('http://localhost:5000/submit-information', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
        } catch (error) {
            alert(error);
        }
        createUserWithEmailAndPassword(database, email, password)
            .then(() => {
                e.target.password.value = "";
                e.target.email.value = "";
                setSucess(true)
            }).catch(err => {
                alert(err.code)
            })
    }

    return (
        <div>
            <div className="relative bg-[#f6f4eb] hidden md:block">
                <div className="w-[370px] left-[787px] top-[72px] absolute">
                    <div className="w-[100px] h-[100px] left-[131px] top-0 absolute">
                        <div className="w-[81px] h-[81px] pl-[16.88px] pr-[13.50px] pt-[13.50px] pb-[10.12px] left-[8px] top-[9px] absolute justify-center items-center inline-flex" />
                        <div className="w-[90px] h-[80px] left-0 top-0 absolute bg-[#d9d9d9]/0 rounded-[10px] border-2 border-black" />
                    </div>
                    <i class="fa-solid fa-flag text-5xl absolute top-[13px] left-[42%] text-[#193d4f]"></i>
                    <div className="left-[117px] top-[100px] absolute text-black text-[32px] font-medium font-['Lexend Deca']">Sign Up</div>
                    <div className="w-[350px] h-[70px] left-0 top-[165px] absolute">
                        <div className="w-12 h-12 left-[21px] top-[22px] absolute" />
                        <Link to={'/signupmobile'} className='cursor-pointer'>
                            <i class="fa-solid fa-phone text-3xl left-4 top-2 absolute"></i>
                            <div className="left-[65px] top-[5px] absolute text-black text-[26px] font-normal font-['Lexend Deca']">Sign up with Mobile</div>
                            <div className="w-[350px] h-[50px] left-0 top-0 absolute bg-[#d9d9d9]/0 rounded-[10px] border-2 border-black" />
                        </Link>
                    </div>
                    <div className="w-[359px] h-5 left-[3px] top-[238px] absolute">
                        <div className="left-[168px] top-0 absolute text-black text-base font-normal font-['Lexend Deca']">OR</div>
                        <div className="w-[150px] h-[0px] left-0 top-[10px] absolute border border-black"></div>
                        <div className="w-[150px] h-[0px] left-[209px] top-[10px] absolute border border-black"></div>
                    </div>
                    <form action="" onSubmit={(e) => handleSubmit(e)}>
                        <div className="w-[367px] h-[73.31px] left-[3px] top-[272px] absolute">
                            <div className="left-[1px] top-0 absolute text-black text-xl font-medium font-['Lexend Deca']">Full Name</div>
                            <div className="w-[367px] h-[42.31px] left-0 top-[31px] absolute">
                                <input type="text" name='name' onChange={handleChange} placeholder='Enter Your name' className='px-2 outline-none border-2 border-black py-1 w-full rounded-xl' required />
                            </div>
                        </div>
                        <div className="left-[3px] top-[430px] absolute">
                            <div className="left-[1px] top-0 absolute text-black text-xl font-medium font-['Lexend Deca']">Password</div>
                            <div className="w-[367px] h-[42.31px] left-0 top-[31px] absolute">
                                <input name='password' type="password" placeholder='Enter Your password' className='px-2 outline-none border-2 border-black py-1 w-full rounded-xl' required />
                            </div>
                        </div>
                        <div className=" left-[3px] top-[352px] absolute">
                            <div className="left-[1px] top-0 absolute text-black text-xl font-medium font-['Lexend Deca']">Email</div>
                            <div className="w-[367px] h-[42.31px] left-0 top-[31px] absolute">
                                <input name='email' onChange={handleChange} type="email" placeholder='Enter Your email' className='px-2 outline-none border-2 border-black py-1 w-full rounded-xl' required />
                            </div>
                        </div>
                        <button className='bg-[#004eec] text-white text-2xl p-1 px-[36%] text-center rounded-full absolute top-[530px] left-4'>Submit</button>
                    </form>
                </div>
                <div className="w-[521px] h-[755px] left-0 top-[1px] absolute bg-[#91c8e4]/60 blur-sm" />
                <div className="w-[354px] h-[76px] left-[67px] top-[634px] absolute">
                    <div className="w-[354px] h-4 left-5 top-0 absolute text-black text-[24px] font-medium font-['Lexend Deca']">Already have an account?</div>
                    <Link to={'/login'}><div className="left-[133px] top-[41px] absolute text-[#004eec] text-[24px] font-medium font-['Lexend Deca'] underline">Login</div></Link>
                </div>
                <div className="w-[666px] h-[350px] left-[-55px] top-[-24px] absolute">
                    <img className="w-[270px] h-[80%] left-0 top-0 absolute" src={LogoImg} />
                    <img className="w-[50%] h-[100%] left-[15%] top-[-12%] absolute" src={LogoText} />
                </div>
                <div className="w-[444px] h-[205px] left-[45px] top-[300px] absolute">
                    <div className="w-[402px] h-[50px] left-0 top-0 absolute">
                        <i class="fa-regular fa-circle-check text-3xl mt-2 text-[#797171]"></i>
                        <div className="w-[35px] h-[35px] p-[2.92px] left-0 top-[3px] absolute justify-center items-center inline-flex" />
                        <div className="left-[45px] top-0 absolute text-[#797171] text-lg font-bold font-['Lexend Deca']">Your Details</div>
                        <div className="left-[45px] top-[27px] absolute text-[#808080] text-lg font-medium font-['Lexend Deca']">Please provide degree and specification</div>
                    </div>
                    <div className="w-[444px] h-[50px] left-0 top-[77px] absolute">
                        <i class="fa-regular fa-circle-check text-3xl mt-2 text-[#797171]"></i>
                        <div className="w-[35px] h-[35px] p-[2.92px] left-0 top-[3px] absolute justify-center items-center inline-flex" />
                        <div className="left-[45px] top-0 absolute text-[#797171] text-lg font-bold font-['Lexend Deca']">Certifications</div>
                        <div className="left-[45px] top-[27px] absolute text-[#808080] text-lg font-medium font-['Lexend Deca']">Please provide certifications and Internships</div>
                    </div>
                    <div className="w-[368px] h-[50px] left-0 top-[155px] absolute">
                        <i class="fa-regular fa-circle-check text-3xl mt-2 text-[#797171]"></i>
                        <div className="w-[35px] h-[35px] p-[2.92px] left-0 top-[3px] absolute justify-center items-center inline-flex" />
                        <div className="left-[45px] top-0 absolute text-[#797171] text-lg font-bold font-['Lexend Deca']">Social Connect</div>
                        <div className="left-[45px] top-[27px] absolute text-[#808080] text-lg font-medium font-['Lexend Deca']">Please provide LinkedIn and GitHub</div>
                    </div>
                </div>
                <div className="w-full h-[50px] left-[45px] top-[225px] absolute">
                    <i class="fa-regular fa-circle-check text-3xl mt-2 text-[#032976]"></i>
                    <div className="left-[46px] top-0 absolute text-[#032976] text-lg font-bold font-['Lexend Deca']">Sign Up</div>
                    <div className="left-[46px] top-[27px] absolute w-full text-[#4C4848] text-lg font-medium font-['Lexend Deca']">Please provide name and password</div>
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
                <SignUpPage />
            </div>
            {/* Success Section to delete */}
            <div style={success ? { display: "block" } : { display: "none" }} className='absolute bg-white shadow-xl text-center flex flex-col gap-5 text-gray-800 p-5 text-sm shadow-gray-400 top-[20%] md:top-[40%] left-[33%] md:left-[37%] w-fit md:w-[30%] md:h-[25%]'>
                <i class="fa-solid fa-circle-check text-4xl md:text-5xl md:mb-5"></i>
                <p className='font-bold md:text-2xl'>Registered Successfully!</p>
                <button onClick={() => { setSucess(false); navigate('/yourdetails') }} className='mt-5 bg-green-600 p-1 px-2 text-white'>Continue</button>
            </div>
        </div>
    )
}

export default SignUp
