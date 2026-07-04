import React, { useEffect } from 'react'
import Footer from './common/Footer'

function About() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className='py-14'>
            <h2 className='text-center text-5xl font-bold mb-14'>About <span className='text-orange-400'>Me</span></h2>

            <div className='container mx-auto px-4'>
                <p className='text-lg text-gray-600 mb-10 max-w-3xl mx-auto text-center'>
                    I'm Hariharan A, a Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). I'm passionate about problem-solving, front-end optimization, and building scalable web applications and APIs. I'm eager to learn and grow in a dynamic tech environment.
                </p>

                <div className='flex flex-col sm:flex-row justify-around gap-6 mb-14'>
                    <div className='border-[6px] rounded-lg border-purple-500 p-5 w-full sm:w-60 text-center'>
                        <div className='rounded-full border-2 p-5 font-bold text-white text-center bg-gradient-to-br from-purple-200 to-purple-600 mx-auto w-fit'>2</div>
                        <p className='font-medium mt-2'>Projects Completed</p>
                    </div>
                    <div className='border-[6px] rounded-lg border-green-500 p-5 w-full sm:w-60 text-center'>
                        <div className='rounded-full border-2 p-5 font-bold text-white text-center bg-gradient-to-br from-green-200 to-green-600 mx-auto w-fit'>3</div>
                        <p className='font-medium mt-2'>Months of Experience</p>
                    </div>
                </div>

                <h2 className='text-3xl sm:text-5xl font-bold text-center mb-8'>Skills</h2>
                <div className='flex flex-wrap justify-center gap-3 mb-14'>
                    {["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "Tailwind CSS", "SheetJS", "REST APIs"].map((skill, i) => (
                        <span key={i} className='bg-orange-100 text-orange-600 font-medium px-4 py-2 rounded-full'>
                            {skill}
                        </span>
                    ))}
                </div>

                <h2 className='text-3xl sm:text-5xl font-bold text-center mb-8'>Experience</h2>
                <div className='max-w-2xl mx-auto mb-14 p-6 bg-white shadow-lg rounded-lg'>
                    <h3 className='text-xl font-semibold text-gray-800'>Front-End Developer Intern</h3>
                    <p className='text-gray-400 text-sm mb-3'>Unified Mentor | 3 Months</p>
                    <ul className='list-disc pl-5 text-gray-600 space-y-1'>
                        <li>Developed 3 front-end web projects using HTML, CSS, JavaScript, and React.js</li>
                        <li>Built responsive and user-friendly interfaces with modern UI/UX principles</li>
                        <li>Worked on front-end optimization and reusable UI components</li>
                        <li>Implemented responsive layouts for desktop and mobile devices</li>
                    </ul>
                </div>

                <h2 className='text-3xl sm:text-5xl font-bold text-center mb-8'>Education</h2>
                <div className='max-w-2xl mx-auto mb-14 space-y-4'>
                    <div className='p-4 bg-white shadow-md rounded-lg flex justify-between items-center'>
                        <div>
                            <h3 className='font-semibold text-gray-800'>KCG College of Technology, Chennai</h3>
                            <p className='text-gray-500 text-sm'>B.E. Computer Science & Engineering | CGPA: 7.5</p>
                        </div>
                        <p className='text-gray-400 text-sm'>2020 – 2024</p>
                    </div>
                </div>

                <h2 className='text-3xl sm:text-5xl font-bold text-center mb-8'>Certificates</h2>
                <div className='max-w-2xl mx-auto mb-10 space-y-2 text-center'>
                    <p className='text-gray-600'>Full Stack Web Development – Error Makes Clever (2026)</p>
                    <p className='text-gray-600'>Prompt Engineering – Error Makes Clever (2026)</p>
                </div>

                <div className='text-center mb-4'>
                    <a href="/Hariharan_FSD_Resume.pdf" target="_blank" rel="noopener noreferrer" className='button-style inline-block'>
                        Download Full Resume
                    </a>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default About