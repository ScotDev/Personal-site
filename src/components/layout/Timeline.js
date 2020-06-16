import React from 'react';


import data from '../../timeline_data.json';

export default function Timeline() {


    const items = data.map(item => {
        return (

            <li key={item.id}>

                <h2 className="timeline-title">{item.title}</h2>
                <p className="timeline-text">{item.text}</p>
                <p className="timeline-date">{item.date}</p>

            </li>

        )
    })

    return (
        <div className="timeline">
            <ul className="timeline-list">
                {items}
            </ul>
            {/* <a href="#portfolio" className="btn btn-secondary">Download full CV <i class="las la-download"></i></a> */}
        </div>
    )
}
