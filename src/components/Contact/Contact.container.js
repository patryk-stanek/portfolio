import React from "react";

import "./Contact.scss";

import ContactComponent from "./Contact.component";

export class Contact extends React.Component {
    render() {
        return (
            <section className="contact" id="section-contact">
                <ContactComponent />
            </section>
        )
    }
}