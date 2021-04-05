import React from 'react'


export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-title"><a href="#showcase" alt="Home">ScotDev</a></div>
            <ul className="nav-links">
                <li><a href="#portfolio">Projects</a></li>
                <li><a href="#timeline">About me</a></li>
                <li><a href="https://github.com/ScotDev" target="_blank" rel="noopener noreferrer">GitHub <i className="lab la-github"></i></a></li>
                <li><a href="mailto:hello@scotdev.uk" rel="noopener noreferrer">Email</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className='hamburger'>
                <input type='checkbox'></input>
                <div></div>
                <div></div>
                <div></div>

                <ul>
                    <li><a href="#portfolio">Projects</a></li>
                    <li><a href="#timeline">About me</a></li>
                    <li><a href="https://github.com/ScotDev" target="_blank" rel="noopener noreferrer">GitHub <i className="lab la-github"></i></a></li>
                    <li><a href="mailto:hello@scotdev.uk" rel="noopener noreferrer">Email me</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>

        </nav>
    )
}
