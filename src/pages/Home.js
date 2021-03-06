import React from 'react';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection/HeroSection'
import AboutSection from '../components/AboutSection/AboutSection'
import ProjectSection from '../components/ProjectSection/ProjectSection';
import ContactBanner from '../components/ContactBanner/ContactBanner';


const HomeStyle = styled.div`
    background-color: var(--dark-bg);
`;

function Home() {
    return(
        <HomeStyle>
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <ContactBanner />
        </HomeStyle>
    )
}

export default Home;