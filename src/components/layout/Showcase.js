import React from 'react'

import profileImg from '../../assets/img/profile.jpg'

export default function Showcase() {
    return (
        <section className="showcase">
            <div className="showcase-item">
                <aside className="profile">
                    <img src={profileImg} alt="Profile photo"></img>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
                </aside>
            </div>
            <div className="showcase-item">
                <div className="showcase-main">
                    <h1>Hi, I'm Callum Giles</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    <div className="btn-group">
                        <a className="btn btn-primary" href="#portfolio">Portfolio</a>
                        <a className="btn btn-secondary" href="#contact">Contact me</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
