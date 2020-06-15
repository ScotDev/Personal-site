import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-title">ScotDev</div>
            <ul className="nav-links">
                <li><a href="#portfolio">Projects</a></li>
                <li><a href="#about">About me</a></li>
                <li><a href="https://github.com/ScotDev" target="_blank">GitHub <i class="lab la-github"></i></a></li>
                <li><a href="mailto:callum.git@outlook.com" target="_blank"><i className="las la-envelope"></i></a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}
