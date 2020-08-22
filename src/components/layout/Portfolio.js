import React from 'react';

import data from '../../site_data.json';

export default function Portfolio() {


    const items = data.map(item => {
        return (<div className="portfolio-item" key={item.id}>
            <div className="card">
                <img className="card-img-top" src={require(`../../assets/img/${item.img}.png`)} alt="Portfolio project"></img>
                <div className="card-bottom-content">
                    <div className="card-title">{item.title}</div>
                    <div className="card-text">{item.description}</div>

                    <div className="card-btn-tag-group">
                        <div className="btn-group">
                            <a className="btn btn-primary" href={item.github_link} target="_blank" rel="noopener noreferrer">GitHub <i className="lab la-github"></i></a>
                            <a className="btn btn-secondary" href={item.url} target="_blank" rel="noopener noreferrer">View live <i className="las la-external-link-alt"></i></a>
                        </div>
                        <div className="card-tags">{item.tech.map(tech => {
                            return (<p><i className={`icon-${tech[1]}`} alt=""></i>{tech[0]}</p>)
                        })}</div>

                    </div>
                </div>
            </div>
        </div>)
    })
    return (
        <section className="portfolio">
            {items}
        </section>
    )
}
