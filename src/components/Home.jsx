import React from 'react'
import BlogProfileImage from "../assets/Blog Website Design.jpg"
import CSS from "../assets/css-3.png"
import HTML from "../assets/html.png"
import DB from "../assets/data-server.png"
import JS from "../assets/js.png"
import REACTICON from "../assets/physics.png"
import NODE from "../assets/node-js.png"
import P1 from "../assets/p1.jpg"
import P2 from "../assets/p2.png"
import BlogImage from "../assets/blogImage.png"
import { useNavigate } from 'react-router-dom';
import Footer from './common/Footer'

function Home() {
    const navigate = useNavigate()
    return (
        <div>

            <div className='flex items-center justify-center'>
                <div className="w-full sm:w-1/2 flex-col justify-center">
                    <h2 className='text-3xl md:text-6xl font-bold pb-2'>Hy! I Am</h2>
                    <h2 className='text-4xl md:text-7xl font-bold text-orange-400 py-2'>Hariharan A</h2>
                    <img src={BlogProfileImage} className='w-60 block sm:hidden' alt="Hariharan A" />
                    <p className='py-2'>I can create stunning websites for your company, Do check my works. I won't disappoint you. Try me for 7 Days before you decide anything.</p>
                    <a href="/Hariharan_FSD_Resume.pdf" target="_blank" rel="noopener noreferrer" className='button-style mt-2 inline-block'>Hire Me</a>
                </div>
                <div className='justify-center hidden sm:block'>
                    <img src={BlogProfileImage} className='w-60 md:w-96 ' alt="Hariharan A" />

                </div>

            </div>


            <div className='flex justify-evenly py-6'>
                <img src={HTML} style={{ width: "50px" }} alt="HTML" />
                <img src={CSS} style={{ width: "50px" }} alt="CSS" />
                <img src={JS} style={{ width: "50px" }} alt="JavaScript" />
                <img src={REACTICON} style={{ width: "50px" }} alt="React" />
                <img src={DB} style={{ width: "50px" }} alt="Database" />
                <img src={NODE} style={{ width: "50px" }} alt="Node.js" />
            </div>

            <div className='flex flex-col mt-10 items-center justify-around sm:flex-row'>
                <div className='flex-col'>
                    <div className='mt-4 border-[6px] rounded-lg border-purple-500 p-5 border-t-0 w-60 flex-col items-center'>
                        <div className='rounded-full border-2 p-5 font-bold text-white text-center bg-gradient-to-br from-purple-200 to-purple-600'>2</div>
                        <p className='text-center font-medium'>Projects Completed</p>
                    </div>
                    <div className='mt-4 border-[6px] rounded-lg border-green-500 p-5 border-t-0 w-60 flex-col items-center'>
                        <div className='rounded-full border-2 p-5 font-bold text-white text-center bg-gradient-to-br from-green-200 to-green-600'>3</div>

                        <p className='text-center font-medium'>Months of Experience</p>
                    </div>
                </div>

                <div className='ml-4 mt-4 sm:mt-0'>
                    <h2 className='text-3xl sm:text-7xl font-bold'>My Awesome</h2>
                    <h2 className='text-3xl sm:text-7xl font-bold text-orange-400'>Services</h2>
                    <p className='my-2'>I have attached my Resume here for your Reference</p>
                    <a href="/Hariharan_FSD_Resume.pdf" target="_blank" rel="noopener noreferrer" className='button-style mt-2 inline-block'>Download CV</a>

                </div>

            </div>

            <div>
                <h2 className='text-center text-5xl my-14 font-bold'>Checkout My Live <span className='text-orange-400'>Projects</span> Here</h2>
                <div className='flex justify-around my-5 flex-col sm:flex-row'>

                    <a href="https://bulkmail-frontend-gray.vercel.app" target="_blank" rel="noopener noreferrer">
                        <img src={P1} className='w-64 border rounded-md cursor-pointer' alt="BulkMail" />
                    </a>

                    <a href="https://weather-app-kohl-tau.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img src={P2} className='w-64 border rounded-md cursor-pointer' alt="Weather App" />
                    </a>

                </div>
            </div>


            <div className='flex items-center justify-center my-14'>
                <div className='justify-center hidden sm:block'>
                    <img src={BlogImage} className='w-60 md:w-96 ' alt="Hariharan A" />

                </div>
                <div className="w-full sm:w-1/2 flex-col justify-center ml-6">
                    <h2 className='text-3xl md:text-6xl font-bold pb-2'>I like to Write</h2>
                    <h2 className='text-4xl md:text-7xl font-bold text-orange-400 py-2'>Blogs about tech</h2>

                    <p className='py-2'>You can know better about me by reading my blogs here. I share my expertise here.</p>
                    <button className='button-style mt-2' onClick={() => navigate("/blogs")}>Read My Blogs</button>
                    <button className='button-style mt-2' onClick={() => navigate("/about")}>About Me</button>
                    <button className='button-style mt-2 ml-2' onClick={() => navigate("/contact")}>Contact Me</button>
                </div>


            </div>


            <Footer/>


        </div>
    )
}

export default Home