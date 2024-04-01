import React from 'react'
import { Link } from 'react-router-dom'

import {arrow} from '../assets/icons';

const InfoBox = ({text, link, btnText }) => (
    <div className="info-box">
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} alt="Arrow" className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <div className="p-6 max-w-sm mx-auto bg-black-500 rounded-xl shadow-lg flex items-center space-x-4 hover:underline-">
        <h1 className='text-xl font-medium blue-gradient_text'>
            Hey, I'm <span className='font-semibold'>Houcem</span>. <br />A Developer from Tunisia. 
        </h1></div>
    ),
    2: (
        <InfoBox text="Experienced in Frontend Development, I'm passionate about Game Making and Web Design." btnText='Learn more' link="/about" /> 
    ),
    3: (
        <InfoBox text="Along the learning roadmap, I've sorted a list of some of my best projects. Check them out!" btnText='View Projects' link="/projects" />
    ),
    4: (
        <InfoBox text="For this summer I'm looking for an internship in Web Development. If my profile interests you, send me a message!" btnText="Let's talk" link="/contact" />
    )
}



const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo