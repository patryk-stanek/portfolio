import React from "react";
import Fade from "react-reveal";
import SkillsComponent from "./Skills.component";
import "./Skills.scss";

export class Skills extends React.Component {
    render() {
        return (
            <section className="skills" id="section-services">
                <div className="skills__wrap">
                    <Fade>
                        <SkillsComponent />
                    </Fade>
                </div>
            </section>
        )
    }
}