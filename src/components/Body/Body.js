//Importing modules
import React from "react";

//Importing components
import { Menubar } from "../Menubar/Menubar";
import { Footer } from "../Footer/Footer";

//Importing styles
import "./Body.scss"

//Body component
export class Body extends React.Component {
    render() {
        return (
            <div className="body">
                <Menubar />
                    {this.props.children}
                <Footer />
            </div>
        )
    }
}