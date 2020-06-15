import React from 'react'

import bucImg from '../../assets/img/best-used-cars.png'

export default function Portfolio() {
    return (
        <section id="portfolio" className="portfolio">
            <div className="portfolio-item">
                <div className="card">
                    <img className="card-img-top" src={bucImg} alt=""></img>
                    <div className="card-title">Title</div>
                    <div className="card-Text">Text</div>
                </div>
            </div>
            <div className="portfolio-item">
                <div className="card">
                    <img className="card-img-top" src={bucImg} alt=""></img>
                    <div className="card-title">Title</div>
                    <div className="card-Text">Text</div>
                </div>
            </div>
            <div className="portfolio-item">
                <div className="card">
                    <img className="card-img-top" src={bucImg} alt=""></img>
                    <div className="card-title">Title</div>
                    <div className="card-Text">Text</div>
                </div>
            </div>
        </section>
    )
}
