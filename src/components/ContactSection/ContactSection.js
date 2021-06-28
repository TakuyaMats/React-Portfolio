import React from 'react';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from '../SectionTitle/SectionTitle';
import ContactInfoItem from '../ContactInfoItem/ContactInfoItem';
import ContactForm from '../ContactForm/ContactForm';

const ContactSectionStyle = styled.div`
    padding: 10rem 0;
    .contactSection__wrapper {
        display: flex;
        gap: 5rem;
        margin-top: 7rem;
        justify-content: space-between;
        position: relative;
    }
    .contactSection__wrapper::after {
        position: absolute;
        content '';
        width: 2px;
        height: 50%;
        background-color: var(--gray-1);
        left: 50%;
        top: 30%;
        transform: translate(-50%, -50%);
    }
    .left {
        width: 100%;
        max-width: 500px;
    }
    .right {
        max-width: 500px;
        width: 100%;
    }
    @media only screen and (max-width: 768px) {
        .contactSection__wrapper {
            flex-direction: column;
        }
        .contactSection__wrapper::after {
            display: none;
        }
        .left, right {
            max-width: 100%;
        }
        .right {
            padding: 4rem 2rem 2rem 2rem;
        }
    }
`;

function ContactSection() {
    return (
        <ContactSectionStyle>
            <div className="container">
                <SectionTitle heading="Contact" subheading="Get in touch"/>
                <div className="contactSection__wrapper">
                    <div className="left">
                        <ContactInfoItem 
                        icon={ <MdLocalPhone /> }
                        text="(201)310-3869" />
                        <ContactInfoItem 
                        icon={<MdEmail />}
                        text="tmatsnj@gmail.com" />
                        <ContactInfoItem 
                        text="Fort Lee, New Jersey" />
                    </div>
                    <div className="right">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </ContactSectionStyle>
    )
}

export default ContactSection;
