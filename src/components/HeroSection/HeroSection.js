import React from 'react';
import styled from 'styled-components';
import HeroImg from '../../assets/img/Hero.jpeg';
import PText from '../PText/PText';
import Button from '../Button/Button';
import SocialMediaArrow from '../../assets/img/social-media-arrow.svg';
import ScrollDown from '../../assets/img/scroll-down-arrow.svg';

const HeroStyle = styled.div`
    background-color: var(--dark-bg);
`;

function HeroSection() {
    return (
        <HeroStyle>
            <div className="container">
                <h1 className="hero__heading">
                    <span>Hello This is</span>
                    <span>Takuya Matsumoto</span>
                </h1>
                <div className="hero__img">
                    <img src={HeroImg} alt="" />
                </div>
                <div className="hero__info">
                    <PText>
                    Innovative problem-solver who is passionate about developing apps with a focus on mobile-first design and web development. 
                    Strong arts and professional design background with a Certificate in Computer Software Engineering from Rutgers University–New Brunswick. 
                    Strengths in creativity, teamwork, and building projects from ideation to execution. 
                    Previously a digital technician with experience in the photography industry, with skills in photoshoots, management, and adobe photoshop.
                    </PText>
                    <Button btnLink="/projects" btnText="see my works" />
                </div>
                <div className="hero__socials">
                    <div className="hero__social__indicator">
                        <p>Follow</p>
                        <img src={SocialMediaArrow} alt="" />
                    </div>
                    <div className="hero_social_text">
                        <ul>
                            <li>
                                <a href="#" target="_blank" rel="noreferrer">IG</a>
                                <a href="#" target="_blank" rel="noreferrer">GH</a>
                                <a href="#" target="_blank" rel="noreferrer">LI</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="hero__scrollDown">
                    <p>Scroll down</p>
                    <img src={ScrollDown} alt="" />
                </div>
            </div> 
        </HeroStyle>
    )
}

export default HeroSection;