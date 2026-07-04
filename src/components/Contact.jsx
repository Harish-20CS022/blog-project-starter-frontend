import React, { useEffect } from 'react'
import Footer from './common/Footer'

function Contact() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className='py-14'>
            <h2 className='text-center text-5xl font-bold mb-14'>Get In <span className='text-orange-400'>Touch</span></h2>

            <div className='container mx-auto px-4 max-w-2xl'>
                <p className='text-lg text-gray-600 mb-10 text-center'>
                    Feel free to reach out for collaborations, opportunities, or just to say hi!
                </p>

                <div className='space-y-4 mb-10'>
                    <div className='p-4 bg-white shadow-md rounded-lg flex items-center justify-between'>
                        <span className='font-medium text-gray-800'>Email</span>
                        <a href="mailto:hariharan20cs022@gmail.com" className='text-orange-500 font-medium'>hariharan20cs022@gmail.com</a>
                    </div>

                    <div className='p-4 bg-white shadow-md rounded-lg flex items-center justify-between'>
                        <span className='font-medium text-gray-800'>Phone</span>
                        <a href="tel:+916381619911" className='text-orange-500 font-medium'>+91 6381619911</a>
                    </div>

                    <div className='p-4 bg-white shadow-md rounded-lg flex items-center justify-between'>
                        <span className='font-medium text-gray-800'>GitHub</span>
                        <a href="https://github.com/Harish-20CS022" target="_blank" rel="noopener noreferrer" className='text-orange-500 font-medium'>github.com/Harish-20CS022</a>
                    </div>

                    <div className='p-4 bg-white shadow-md rounded-lg flex items-center justify-between'>
                        <span className='font-medium text-gray-800'>LinkedIn</span>
                        <a href="https://linkedin.com/in/hariharan-20cs022" target="_blank" rel="noopener noreferrer" className='text-orange-500 font-medium'>linkedin.com/in/hariharan-20cs022</a>
                    </div>
                </div>

                <div className='text-center mb-4'>
                    <a href="/Hariharan_FSD_Resume.pdf" target="_blank" rel="noopener noreferrer" className='button-style inline-block'>
                        Download Resume
                    </a>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Contact  