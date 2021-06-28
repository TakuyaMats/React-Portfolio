import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection'
import AboutSection from '../components/AboutSection/AboutSection'
import styled from 'styled-components';

const HomeStyle = styled.div`
    background-color: var(--dark-bg);
`;

function Home() {
    return(
        <HomeStyle>
            <HeroSection />
            <AboutSection />
        </HomeStyle>
    )
}

export default Home;