import React from 'react'

import data from '../../site_data.json';

export default function Portfolio() {

    const items = data.map(item => {
        return (<div className="portfolio-item">
            <div className="card">
                <img className="card-img-top" src={require(`../../assets/img/${item.img}.png`)} alt="Portfolio project"></img>
                <div className="card-title">{item.title}</div>
                <div className="card-text">{item.description}</div>
                <div className="btn-group">
                    <a className="btn btn-primary" href={item.url}>View live <i class="las la-external-link-alt"></i></a>
                    <a className="btn btn-secondary" href={item.github_link}>GitHub <i class="lab la-github"></i></a>
                </div>
                <div className="card-text-stack">{item.tech.map(tech => {
                    return (<i>{tech}</i>)
                })}</div>
            </div>
        </div>)
    })
    return (
        <section id="portfolio" className="portfolio">
            {items}
        </section>
    )
}
