import React from 'react';
import PText from '../components/PText/PText';
import styled from 'styled-components';
import ContactBanner from '../components/ContactBanner/ContactBanner';
import AboutInfoItem from '../components/AboutInfoItem/AboutInfoItem';
import AboutImg from '../assets/img/about-page-img.jpeg';
import Resume from '../assets/resume/resume.pdf';

const AboutStyle = styled.div`
    background-color: var(--dark-bg);
    padding: 20rem 0 10rem 0;
    .top-section {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }
    .left {
        flex: 3;
    }
    .right {
        flex: 2;
    }
    .about__subheading {
        font-size: 2.2rem;
        margin-bottom: 2rem;
        span {
            background-color: var(--deep-dark);
            padding: 0.5rem;
            border-radius: 8px;
        }
    }
    .about__heading {
        font-size: 3.6rem;
        margin-bottom: 3rem;
    }
    .about__info {
        margin-bottom: 4rem;
        .para {
            max-width: 100%;
        }
    }
    .about__info__items {
        margin-top: 15rem;
    }
    .about__info__item {
        margin-bottom: 10rem;
    }
    .about__info__heading {
        font-size: 3.6rem;
        text-transform: uppercase;
    }
    .resume {
        margin-top: 2rem;
        font-size: 2.2rem;
        background-color: ${(props) => 
            props.outline ? 'transparent' : 'var(--gray-1)'};
        padding: 0.7rem 2em;
        border-radius: 8px;
        display: inline-block;
        border: 2px solid var(--gray-1);
        color: ${props => (
            props.outline ? 'var(--gray-1)' : 'black')}
    }
    .resume a {
        color: var(--black);
    }
    @media only screen and (max-width: 768px) {
        padding: 10rem 0;
        .resume {
            font-size: 1.8rem;
        }
        .top-section {
            flex-direction: column;
            gap: 5rem;
        }
        .about__subheading {
            font-size: 1.8rem;
        }
        .about__heading {
            font-size: 2.8rem;
        }
        .about__info__heading {
            font-size: 3rem;
        }
    }
`;

function About() {
    return (
        <>
        <AboutStyle>
            <div className="container">
                <div className="top-section">
                    <div className="left">
                        <p className="about__subheading">
                            Hi, I am <span>Takuya Matsumoto</span>
                        </p>
                        <h2 className="about__heading">
                            A fullstack web developer
                        </h2>
                        <div className="about__info">
                            <PText>
                            Innovative problem-solver who is passionate about developing apps with a focus on mobile-first design and web development. 
                            Strong arts and professional design background with a Certificate in Computer Software Engineering from Rutgers University–New Brunswick. 
                            Strengths in creativity, teamwork, and building projects from ideation to execution. 
                            Previously a digital technician with experience in the photography industry, with skills in photoshoots, management, and adobe photoshop.
                            </PText>
                        </div>
                        <div className="resume">
                            <a href={Resume} target="_blank" rel="noreferrer">Download Resume</a>
                        </div>
                        </div>
                        <div className="right">
                    <img src={AboutImg} alt="me" />
                </div>
            </div>
            <div className="about__info__items">
                <div className="about__info__item">
                    <h1 className="about__info__heading">Education</h1>
                            <AboutInfoItem
                            title="School"
                            items={['Fort Lee High School, New Jersey']}
                            />
                            <AboutInfoItem
                            title="Collage"
                            items={['School of Visual Arts, New York']}
                            />
                            <AboutInfoItem
                            title="Certificate"
                            items={['Rutgers University, New Jersey']}
                            />
                        </div>
                        <div className="about__info__item">
                            <h1 className="about__info__heading">My Skills</h1>
                            <AboutInfoItem
                            title="FrontEnd"
                            items={['HTML5', 'CSS3', 'JavaScript ES6+', 'REACT', 'Handlebars', 'Materialize', 'Bootstrap']}
                            />
                            <AboutInfoItem
                            title="BackEnd"
                            items={['Node', 'Express', 'PHP', 'npm', 'Mongodb', 'MySQL', 'NoSQL']}
                            />
                            <AboutInfoItem
                            title="Design"
                            items={['Photoshop', 'Figma', 'Lightroom']}
                            />
                        </div>
                        <div className="about__info__item">
                            <h1 className="about__info__heading">Experiences</h1>
                            <AboutInfoItem
                            title="2018-2019"
                            items={['Studio & Equipment Coordinator at CreativeDrive, New York, NY']}
                            />
                            <AboutInfoItem
                            title="2019-2021"
                            items={['Digital Technician / Assistant Retoucher at forceMAJEURE design, New York, NY']}
                            />
                            <AboutInfoItem
                            title="2021"
                            items={['6 Months Full Stack Web Development at Rutgers University, New Brunswick, NJ']}
                            />
                        </div>
                    </div>
                </div>
                <ContactBanner />
            </AboutStyle>
        </>
    )
}

export default About;
