import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-title">ScotDev</div>
            <ul className="nav-links">
                <li>Projects</li>
                <li>About me</li>
                <li>GitHub <i class="ri-github-line"></i></li>
                <li><a href="mailto:callum.git@outlook.com"><i class="ri-mail-line"></i></a></li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}
