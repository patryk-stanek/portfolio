import React from "react";
import * as emailjs from "emailjs-com";
import Zoom from "react-reveal";
import ContactComponent from "./Contact.component";
import ModalBox from "../ModalBox/ModalBox";
import "./Contact.scss";


export class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            message: "",
            modal: false
        }
    }

    componentDidMount() {
        this.setState({
            modal: false
        })
    }

    handleInputChange(event) {
        event.preventDefault();

        const target = event.target;
        const name = target.id;
        const value = target.value;
        this.setState({
            [name]: value
        })
    }

    handleSendMessage(event) {
        event.preventDefault();

        const templateParams = {
            from: this.state.name,
            email: this.state.email,
            message: this.state.message,
        }

        emailjs.send("gmail", "portfolio", templateParams, "user_CoeXiqn6N18KnUJWx2Lyh")
            .then(function(response) {
                console.log("Success!", response.status, response.text)
            }, function(error) {
                console.log("Failed!", error)
            });

            this.setState({
                name: "",
                email: "",
                message: "",
                modal: true
            })
    }

    handleClosingModal() {
        this.setState({
            modal: false
        })
    };

    render() {
        //condition for showing ModalBox with custom text
        const modalBoxConfirmation = this.state.modal === true ? <ModalBox close={this.handleClosingModal.bind(this)}/> : "";

        return (
            <section className="contact" id="section-contact">
                { modalBoxConfirmation }
                <Zoom>
                    <ContactComponent 
                        input={this.handleInputChange.bind(this)}
                        send={this.handleSendMessage.bind(this)}
                        name={this.state.name}
                        email={this.state.email}
                        message={this.state.message}
                    />
                </Zoom>
            </section>
        )
    }
}