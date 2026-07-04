import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex flex-col items-center gap-3">
            <div className="flex gap-6">
                <a href="https://github.com/Harish-20CS022" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">GitHub</a>
                <a href="https://linkedin.com/in/hariharan-20cs022" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">LinkedIn</a>
                <a href="mailto:hariharan20cs022@gmail.com" className="hover:text-orange-400">Email</a>
            </div>
            <p className="text-center text-sm">© 2026 Hariharan A. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer