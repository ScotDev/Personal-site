import React from 'react';


import data from '../../timeline_data.json';

export default function Timeline() {

    const items = data.map(item => {
        return (<div className="timeline-item" key={item.id}>
            <div className="timeline-content">
                <h2 className="timeline-title">{item.title}</h2>
                <p className="timeline-text">{item.text}</p>
                <p className="timeline-date">{item.date}</p>
            </div>
        </div>)
    })

    return (
        <div className="timeline">
            {items}
            <a className="btn btn-secondary">Download full CV <i class="las la-download"></i></a>
        </div>
    )
}
