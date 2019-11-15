import React from "react";
import { useTranslation } from 'react-i18next';
import Zoom from "react-reveal";
import SortingProjects from "../SortingProjects/SortingProjects";
import Project from "./Project";


const ProjectsComponent = props => {
    const { t } = useTranslation();

    return (
        <div className="projects__container container">
            <Zoom>
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
                        {
                            props.projects.slice(0, props.amount).map(project => {
                                return (
                                    <Zoom>
                                        <Project 
                                            project={project}
                                            key={project.id}
                                        />
                                    </Zoom>
                                )
                            })
                        }
                    </div>
                        {
                            props.projects.length >= 3 ? (
                                <button 
                                    onClick={props.show}
                                    className="projects__button"
                                >
                                {
                                    props.amount === 3 ? (
                                        <span>
                                            {t('projects__button--more.label')}
                                        </span>
                                    ) : (
                                        <span>
                                            {t('projects__button--less.label')}
                                        </span>
                                    )
                                }
                                </button>
                            ) : (
                                <span></span>
                            )
                        }
                </div>
            </Zoom>
        </div>
    )
}

export default ProjectsComponent