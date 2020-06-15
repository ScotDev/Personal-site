import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-title">ScotDev</div>
            <ul className="nav-links">
                <li>Projects</li>
                <li>About me</li>
                <li>GitHub <i class="lab la-github"></i></li>
                <li><a href="mailto:callum.git@outlook.com"><i className="las la-envelope"></i></a></li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}
