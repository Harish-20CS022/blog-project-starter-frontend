import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import auth from '../../config/firebase'
import { signOut } from "firebase/auth";

function Navbar() {
    const navigate = useNavigate()
    const [log, setLog] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        auth.onAuthStateChanged(function (user) {
            if (user) {
                console.log("User Logged in")
                setLog(true)
            } else {
                console.log("User Logged out")
                setLog(false)
            }
        })
    }, [])

    function logout() {
        signOut(auth)
        setMenuOpen(false)
    }

    function handleNavClick() {
        setMenuOpen(false)
    }

    return (
        <div className='py-5 relative'>
            <div className='flex justify-between items-center'>
                <h2 className='text-2xl font-bold'>Personal</h2>

                <div className='hidden md:flex items-center'>
                    <Link className='list-none px-5' to={"/home"}>Home</Link>
                    <Link className='list-none px-5' to={"/blogs"}>Blogs</Link>
                    <Link className='list-none px-5' to={"/about"}>About</Link>
                    <Link className='list-none px-5' to={"/contact"}>Contact</Link>

                    {
                        log
                            ? <button className='button-style' onClick={logout}>Logout</button>
                            : <button className='button-style' onClick={() => navigate("/login")}>Login</button>
                    }
                </div>
                <button className='md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1' onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                    <span className={`block w-6 h-0.5 bg-black transition-transform ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-black transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-black transition-transform ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>
            </div>

            {menuOpen && (
                <div className='md:hidden flex flex-col items-start gap-3 mt-4 pb-4 border-t pt-4'>
                    <Link className='list-none px-2' to={"/home"} onClick={handleNavClick}>Home</Link>
                    <Link className='list-none px-2' to={"/blogs"} onClick={handleNavClick}>Blogs</Link>
                    <Link className='list-none px-2' to={"/about"} onClick={handleNavClick}>About</Link>
                    <Link className='list-none px-2' to={"/contact"} onClick={handleNavClick}>Contact</Link>

                    {
                        log ? <button className='button-style' onClick={logout}>Logout</button> : <button className='button-style' onClick={() => { navigate("/login"); handleNavClick(); }}>Login</button>
                    }
                </div>
            )}
        </div>
    )
}

export default Navbar