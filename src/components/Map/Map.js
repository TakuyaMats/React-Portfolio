import React from 'react';
import PText from '../PText/PText';
import styled from 'styled-components';
import MapImg from '../../assets/img/map.jpg';

const MapStyle = styled.div`
    background: url(${MapImg}) no-repeat center / cover;
    min-height: 400px;
    .container {
        position: relative;
        min-height: 400px;
    }
    .map__card {
        position: absolute;
        right: 10%;
        bottom: 10%;
        padding: 2rem;
        background-color: var(--deep-dark);
        max-width: 300px;
        width: 100%;
        border-radius: 12px;
    }
    .map__card__heading {
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    .map__card__link {
        color: var(--gray-1);
        display: inline-block;
        font-size: 1.6rem;
        margin-top: 2rem;
        text-decoration: underline;
    }
    @media only screen and (max-width: 768px) {
        background-position: 80% center;
    }
    @media only screen and (max-width: 400px) {
        .map__card {
            max-width: none;
            right: auto;
        }
    }
`;

function Map() {
    return (
        <MapStyle>
            <div className="container">
                <div className="map__card">
                    <h3 className="map__card__heading">Here is me</h3>
                    <PText>Fort Lee, New Jersey</PText>
                    <a href="https://www.google.com/maps/place/Fort+Lee,+NJ+07024/@40.8482501,-73.9873645,14z/data=!3m1!4b1!4m5!3m4!1s0x89c2f6e7d866e951:0x8575495bfd782544!8m2!3d40.8509333!4d-73.9701381" 
                    target="_blank" rel="noreferrer" className="map__card__link">Open in Google Maps</a>
                </div>
            </div>
        </MapStyle>
    )
}

export default Map;
