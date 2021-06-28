import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Swiper } from 'swiper/react';
import projects from '../../assets/data/projects';
import ProjectItem from '../ProjectItem/ProjectItem'
import styled from 'styled-components';

const projectSectionStyle = styled.div`
    padding: 10rem 0;
    .project__allItems {
        display: flex;
        gap: 3rem;
    }
`;

function ProjectSection() {
    return (
        <projectSectionStyle>
            <div className="container">
                <SectionTitle heading="Projects" subheading="some of my recent works" />
                <div className="projects__allItems">
                    <Swiper>
                        {projects.map((project, index) => {
                            if(index >= 5) return;
                            return (
                                <ProjectItem />
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </projectSectionStyle>
    )
}

export default ProjectSection;