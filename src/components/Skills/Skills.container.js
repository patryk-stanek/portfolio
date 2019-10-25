import React from "react";

import "./Skills.scss";

import SkillsComponent from "./Skills.component";

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