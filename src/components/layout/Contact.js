import React from 'react'

export default function Contact() {
    return (
        <div className="contact">
            <div className="contact-inner-grid">
                <div className="contact-inner-grid-item">
                    <div className="static-contact-info">
                        <ul>
                            <li>
                                <a href="tel:5151353" target="_blank" rel="noopener noreferrer">Call me <i class="las la-phone"></i></a>
                            </li>

                            <li><a href="mailto:callum.git@outlook.com" target="_blank" rel="noopener noreferrer">Email <i className="las la-envelope"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="contact-inner-grid-item">
                    <form className="contact-form">
                        <label htmlFor="name"></label>
                        <input type="text" name="name" placeholder="Name"></input>
                        <label htmlFor="email"></label>
                        <input type="email" name="email" placeholder="Email"></input>
                        <label htmlFor="subject"></label>
                        <input type="text" name="subject" placeholder="Subject"></input>
                        <label htmlFor="message"></label>
                        <textarea name="message" placeholder="Message..."></textarea>
                        <button className="btn btn-primary" type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
