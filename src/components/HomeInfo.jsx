// dependencies
import React from 'react';
import { Link } from 'react-router-dom';
// assets
import arrow from '../assets/icons/arrow.svg';

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
);

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center
        neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I'm&nbsp;
            <span className='font-semibold'>
                Anish👋
            </span>
            <br />
            A Software Engineer based in the Bay Area!
        </h1>
    ),
    2: (
        <InfoBox
            text='Picked up skills at these companies'
            link='/about'
            btnText='Learn More'
        />
    ),
    3: (
        <InfoBox
            text="Some projects I've developed :)"
            link='/projects'
            btnText='Check em out'
        />
    ),
    4: (
        <InfoBox
            text='Looking for a Full Stack Developer/Software Engineer'
            link='/contact'
            btnText="Let's talk"
        />
    )
};

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
};

export default HomeInfo;