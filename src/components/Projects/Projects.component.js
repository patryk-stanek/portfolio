import React from "react";
import { useTranslation } from 'react-i18next';

import Project from "./Project";

import SortingProjects from "../SortingProjects/SortingProjects";

const ProjectsComponent = props => {
    const { t } = useTranslation();

    return (
        <div className="projects__container">
            <h3 className="projects__description">
                {t('projects__description.label')}
            </h3>
            <h2 className="projects__heading">
                {t('projects__heading.label')}
            </h2>
            <div className="projects__box">
                <SortingProjects 
                    onChange={props.update}
                    textOptionAll={t('projects__option--all.label')}
                    textOptionWebD={t('projects__option--webd.label')}
                    textOptionApp={t('projects__option--app.label')}
                    />
                <div className="projects__portfolio">
                    {props.projects.map(project => {
                            return (
                                <Project 
                                    project={project}
                                    key={project.id}
                                />
                            )
                        })}
                </div>
            </div>
        </div>
    )
}

export default ProjectsComponent