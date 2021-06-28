import React from 'react';
import PText from '../PText/PText';
import FooterCol from '../FooterCol/FooterCol';
import styled from 'styled-components';

const FooterStyles = styled.div`
    padding-top: 10rem;
    background-color: var(--deep-dark);
    .container {
        display: flex;
        gap: 3rem;
    }
    .footer__col1 {
        flex: 2;
    }
    .footer__col2,
    .footer__col3,
    .footer__col4 {
        flex: 1;
    }
    .footer__col1__title {
        font-size: 3.5rem;
        margin-bottom: 1rem;
    }
    @media only screen and (max-width: 768px) {
        .container {
            flex-direction: column;
            gap: 0rem;
            & > div {
                margin-top: 5rem;
            }
        }
        .footer__col1 .para {
            max-width: 100%;
        }
    }
`;

function Footer() {
    return (
        <FooterStyles>
            <div className="container">
                <div className="footer__col1">
                    <h1 className="footer__col1__title">Takuya Matsumoto</h1>
                    <PText>
                        A full stack web developer from Fort Lee, New Jersey.
                        Previously a digital technician with experience in the photography industry, with skills in photoshoots, management, and adobe photoshop.
                    </PText>
                </div>
                <div className="footer__col2">
                    <FooterCol 
                        heading="important Links"
                        Links={[
                            {
                                title: "Home",
                                path: '/',
                                type: "Link"
                            },
                            {
                                title: "About",
                                path: '/about',
                                type: "Link"
                            },
                            {
                                title: "Projects",
                                path: '/projects',
                                type: "Link"
                            },
                            {
                                title: "Contact",
                                path: '/contact',
                                type: "Link"
                            },
                        ]}
                    />
                </div>
                <div className="footer__col3">
                    <FooterCol 
                        heading="Contact Info"
                        Links={[
                            {
                                title: "(201)310-3869",
                                path: 'tel:2013103869'
                            },
                            {
                                title: "tmatsnj@gmail.com",
                                path: 'mailto:tmatsnj@gmail.com'
                            },
                            {
                                title: 'Fort Lee, New Jersey, United States',
                                path: 'http://google.com/maps'
                            }
                        ]}
                    />
                </div>
                <div className="footer__col4">
                    <FooterCol 
                        heading="Social Links"
                        Links={[
                            {
                                title: "Instagram",
                                path: 'https://www.instagram.com/takuyamats/'
                            },
                            {
                                title: "GitHub",
                                path: 'https://github.com/TakuyaMats'
                            },
                            {
                                title: 'Linkedin',
                                path: 'https://www.linkedin.com/in/takuyamatsumoto90/'
                            },
                        ]}
                    />
                </div>
            </div>
        </FooterStyles>
    )
}

export default Footer;