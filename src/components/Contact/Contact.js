import React from "react";

import "./Contact.scss"

export class Contact extends React.Component {
    render() {
        return (
            <section className="contact">
                <div className="contact__container">
                    <h3 className="contact__description">
                        Contact
                    </h3>
                    <h2 className="contact__heading">
                        Get in touch
                    </h2>
                    <div className="contact__box">
                        <form
                            className="contact__form"
                        >
                            <div className="contact__line">
                                <input 
                                    className="contact__input contact__input--half"
                                    type="text"
                                    id="name"
                                    placeholder="Your Name"
                                    minLength="3"
                                    required
                                />
                                <input 
                                    className="contact__input contact__input--half"
                                    type="email"
                                    id="email"
                                    placeholder="Your Email"
                                    minLength="3"
                                    required
                                />
                            </div>
                            <textarea
                                className="contact__input contact__input--textarea"
                                id="message"
                                placeholder="Your Message"
                                rows="10"
                            ></textarea>
                            <button
                                className="contact__button"
                                type="submit"
                            >
                                Send message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}