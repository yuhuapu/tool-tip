import React from 'react';
import '../styles/styles.scss'

import ImageContent from '../components/ImageContent';

import milkyWay from '../assets/img/milky_way.jpg';
import space from '../assets/img/space.jpg';
import whiteLambo from '../assets/img/white_lambo.jpg';
import blueLambo from '../assets/img/blue_lambo.jpg';

import {
    milkyWayText,
    spaceText,
    whiteLamboText,
    blueLamboText
} from '../assets/Description';

const Homepage = () => {
    return (
        <div className='container'>
            <h2>Hover or click to the images to see description</h2>
            <div className='row'>
                <ImageContent
                    image={milkyWay}
                    description={milkyWayText}
                />
                <ImageContent
                    image={space}
                    description={spaceText}
                />
                <ImageContent
                    image={whiteLambo}
                    description={whiteLamboText}
                />
                <ImageContent
                    image={blueLambo}
                    description={blueLamboText}
                />
            </div>
        </div>
    );
}

export default Homepage;