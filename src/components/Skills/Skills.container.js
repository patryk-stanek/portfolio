import React from "react";
import SkillsComponent from "./Skills.component";
import "./Skills.scss";

export class Skills extends React.Component {
    render() {
        return (
            <section className="skills" id="section-services">
                <div className="skills__wrap">
                    <SkillsComponent />
                </div>
            </section>
        )
    }
}