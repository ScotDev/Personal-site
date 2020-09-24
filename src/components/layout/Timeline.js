import React from 'react';


import data from '../../timeline_data.json';

export default function Timeline() {


    const items = data.map(item => {
        return (

            <li key={item.id}>

                <h2 className="timeline-title">{item.title}</h2>
                <p className="timeline-text">{item.text}</p>
                <p className="timeline-date">{item.date}</p>
                {item.url && <a href={item.url} className="timeline-link btn btn-secondary" target="_blank" rel="noopener noreferrer">View live</a>}
                {item.github_url && <a href={item.github_url} className="timeline-link btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub</a>}
            </li>
        )
    })

    return (
        <div className="timeline">
            <ul className="timeline-list">
                {items}
            </ul>
            <a className="btn btn-secondary" id="download" href="../assets/CV_CALLUM_GILES.pdf" download alt="Download CV" target="_blank" rel="noopener noreferrer">Download full CV</a>
        </div>

    )
}
