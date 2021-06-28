import React from 'react'
import styled from 'styled-components';
import ContactSection from '../components/ContactSection/ContactSection';
import Map from '../components/Map/Map';

const ContactStyle = styled.div`
    background-color: var(--dark-bg);
`;

function Contact() {
    return (
        <ContactStyle>
            <ContactSection />
            <Map />
        </ContactStyle>
    )
}

export default Contact;