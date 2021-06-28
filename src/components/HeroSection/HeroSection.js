import React from 'react';
import styled from 'styled-components';
import HeroImg from '../../assets/img/Hero.jpeg';
import PText from '../PText/PText';
import Button from '../Button/Button';
import SocialMediaArrow from '../../assets/img/social-media-arrow.svg';
import ScrollDown from '../../assets/img/scroll-down-arrow.svg';

const HeroStyle = styled.div`
    background-color: var(--dark-bg);
    .hero {
        height: 100vh;
        min-height: 1000px;
        width: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    .hero__heading {
        font-size: 2rem;
        margin-bottom: -4rem;
        position: relative;
        span {
            display: inline-block;
            width: 100%;
        }
        .hero__name {
            font-size: 7rem;
            font-family: "Montserrat SemiBold";
            color: var(--white);
        }
    }
    .hero__img {
        max-width: 900px;
        width: 100%;
        height: 800px;
        margin: 0 auto;
        border: 2px solid var(--gray-1);
    }
    .hero__info {
        margin-top: -28rem;
    }
    .hero__social,
    .hero__scrollDown {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        position: absolute;
        bottom: 20px;
        width: 50px;
    }
    .hero__social {
        left: 50px;
    }
    .hero__scrollDown {
        right: 50px;
    }
    .hero__social__indicator,
    .hero__scrollDown {
        width: 50px;
        p {
            font-size: 1.6rem
            transform: translateY(-70px) rotate(90deg);
            transform: rotate(-90deg);
            letter-spacing: 0.7rem;
            text-transform: uppercase;
        }
        img {
            max-height: 45px;
            width: 16px;
            margin: 0 auto;
            object-fit: contain;
        }
    }
    .hero__scrollDown {
        img {
            max-height: 70px;
        }
    }
    .hero__social__text {
        ul {
            li {
                margin-bottom: 1rem;
            }
            a {
                display: inline-block;
                font-size: 1.6rem;
                transform: rotate(-90deg);
                letter-spacing: 5px;
                margin-bottom: 2rem;
            }
        }
    }
    @media only screen and (max-width: 768px) {
        .hero {
            min-height: 750px;
        }
        .hero__heading {
            font-size: 1.4rem;
            margin-bottom: -3rem;
            .hero__name {
                font-size: 4.5rem;
            }
        }
        .hero__img {
            height: 300px;
        }
        .hero__info {
            margin-top: 3rem;
        }
        .hero__social {
            left: 0px;
            bottom: -15%;
            width: 20px;
            .hero__social__indicator {
                width: 20px;
                p {
                    font-size: 1.2rem;
                }
                img {
                    max-height: 22px;
                }
            }
            .hero__social__text {
                ul {
                    li {
                        a {
                            font-size: 1.2rem;
                            margin-bottom: 1rem;
                        }
                    }
                }
            }
        }
        .hero__scrollDown {
            right: 0;
            width: 20px;
            gap: 1rem;
            p {
                font-size: 1.3rem;
            }
        }
    }
`;

function HeroSection() {
    return (
        <HeroStyle>
            <div className="hero">
                <div className="container">
                    <h1 className="hero__heading">
                        <span>Hello, This is</span>
                        <span className="hero__name">Takuya Matsumoto</span>
                    </h1>
                    <div className="hero__img">
                        <img src={HeroImg} alt="" />
                    </div>
                    <div className="hero__info">
                        <PText>
                        Innovative problem-solver who is passionate about developing apps with a focus on mobile-first design and web development. 
                        Strong arts and professional design background with a Certificate in Computer Software Engineering from Rutgers University–New Brunswick. 
                        Strengths in creativity, teamwork, and building projects from ideation to execution.
                        </PText>
                        <Button btnLink="/projects" btnText="see my works" />
                    </div>
                    <div className="hero__social">
                        <div className="hero__social__indicator">
                            <p>Follow</p>
                            <img src={SocialMediaArrow} alt="" />
                        </div>
                        <div className="hero__social__text">
                            <ul>
                                <li>
                                    <a href="https://www.instagram.com/takuyamats/" target="_blank" rel="noreferrer">IG</a>
                                    <a href="https://github.com/TakuyaMats" target="_blank" rel="noreferrer">GH</a>
                                    <a href="https://www.linkedin.com/in/takuyamatsumoto90/" target="_blank" rel="noreferrer">LI</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="hero__scrollDown">
                        <p>Scroll down</p>
                        <img src={ScrollDown} alt="" />
                    </div>
                </div>
            </div> 
        </HeroStyle>
    )
}

export default HeroSection;