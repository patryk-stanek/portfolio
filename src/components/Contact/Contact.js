import React from "react";
import * as emailjs from "emailjs-com";
import Fade from "react-reveal";
import ModalBox from "../ModalBox/ModalBox";
import "./Contact.scss";


export class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            message: "",
            modal: false,
            confirmationSpan: "contact__info"
        }
    }

    componentDidMount() {
        this.setState({
            modal: false,
            confirmationSpan: "contact__info"
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
                confirmationSpan: "contact__info contact__info--on"
            })
    }

    handleClosingModal() {
        this.setState({
            modal: false,
            confirmationSpan: "contact__info"
        })
    };

    render() {
        const modalBoxConfirmation = this.state.modal === true ? <ModalBox close={this.handleClosingModal.bind(this)}/> : "";

        return (
            <section className="section contact">
                { modalBoxConfirmation }
                <Fade>
                    <div className="contact__container container">
                        <div className="icon-head-container">
                            <i className="icon-head lnr lnr-envelope"></i>
                        </div>
                        <div className="contact__box content">
                            <form
                                className="contact__form"
                                onSubmit={this.handleSendMessage.bind(this)}
                            >
                                <div className="contact__line">
                                    <div className="contact__half">
                                        <h2 className="box-title-basic">Imię</h2>
                                        <input 
                                            className="contact__input contact__input--half"
                                            type="text"
                                            id="name"
                                            placeholder="Wpisz swoje imię"
                                            minLength="3"
                                            required
                                            onChange={this.handleInputChange.bind(this)}
                                            value={this.state.name}
                                        />
                                    </div>
                                    <div className="contact__half">
                                        <h2 className="box-title-basic">Email</h2>
                                        <input 
                                            className="contact__input contact__input--half"
                                            type="email"
                                            id="email"
                                            placeholder="Wpisz swój adres email"
                                            minLength="3"
                                            required
                                            onChange={this.handleInputChange.bind(this)}
                                            value={this.state.email}
                                        />
                                    </div>
                                </div>
                                <div className="contact__half">
                                    <h2 className="box-title-basic">
                                        Wiadomość
                                    </h2>
                                    <textarea
                                        className="contact__input contact__input--textarea"
                                        id="message"
                                        placeholder="Wpisz swoją wiadomość"
                                        rows="10"
                                        required
                                        onChange={this.handleInputChange.bind(this)}
                                        value={this.state.message}
                                        autoComplete="none"
                                    ></textarea>
                                </div>
                                <div className="contact__btn-box">
                                    <button
                                        className="button-basic"
                                        type="submit"
                                    >
                                        Wyślij wiadomość
                                    </button>
                                    <span className={this.state.confirmationSpan}>
                                        Wiadomość wysłana! Wkrótcę się z Tobą skontaktuję.
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </Fade>
            </section>
        )
    }
}