import React, { Component } from 'react'

// Required to allow form submissions to Netlify with a stateful React component
const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}


export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = { name: "", email: "", message: "", alert: "", alertClass: "" };
    }

    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => this.setState({ alert: "Thank you! I'll be in touch soon", alertClass: "success" }))
            .catch(error => this.setState({ alert: "There was an error during submission, please try again", alertClass: "warning" }));

        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });





    render() {
        const { name, email, message, alert, alertClass } = this.state;
        return (
            <div className="contact">
                <div className="contact-inner-grid">
                    <div className="contact-inner-grid-item">
                        <div className="static-contact-info">
                            <ul>
                                <li>
                                    <h3>Get in touch!</h3>
                                </li>
                                <li>
                                    <a href="tel:07850478668" target="_blank" rel="noopener noreferrer"><i class="las la-phone"></i> 07850478668</a>
                                </li>

                                <li><a href="mailto:callum.195@outlook.com" target="_blank" rel="noopener noreferrer"><i className="las la-envelope"></i> callum.195@outlook.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="contact-inner-grid-item">
                        <form className="contact-form" onSubmit={this.handleSubmit}>
                            <input type="text" name="name" value={name} placeholder="Name" required aria-required onChange={this.handleChange}></input>

                            <input type="email" name="email" value={email} placeholder="Email" required aria-required onChange={this.handleChange}></input>

                            <textarea name="message" value={message} placeholder="Message..." required aria-required onChange={this.handleChange}></textarea>

                            <p className={`form-alert ${alertClass}`}>{alert}</p>

                            <button className="btn btn-primary" type="submit">Send <i class="las la-paper-plane"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


// export default function Contact() {
//     return (

//     )
// }
