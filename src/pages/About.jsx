import React from 'react'
import { skills, experiences } from '../constants'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';


const About = () => {
  return (
    <section className="max-container text-white">
      <h1 className='head-text'>Hello, I'm 
      <span className='blue-gradient_text font-semibold drop-shadow'> Houcem</span> <br /></h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-50">
        <p>Frontend Developer based in Tunisia, specialized in React JS and Web development. Currently on the look for an internship.</p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, id) => {
            return(
              <div className='block-container w-20 h-20'>
                <div className='btn-back rounded-xl' />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="py-16">
        <h3 className='subhead-text'>Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-50">
          <p>I've had the honor to work with all sorts of companies and interesting individuals.</p>
        </div>

        <div className="mt-12 flex text-black-500">
          <VerticalTimeline>
            {experiences.map((experience) => {
              return (
                <VerticalTimelineElement key={experience.company_name} date={experience.date} 
                  icon={
                    <div className='flex justify-center items-center w-full h-full'>
                      <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%]' />
                    </div>}
                  contentStyle={{
                    borderBottom: '8px',
                    borderStyle: 'solid',
                    borderBottomColor: experience.iconBg,
                    boxShadow: 'none',
                  }}
                  iconStyle={{background: experience.iconBg}}
                  dateClassName='text-white mr-2 ml-2'
                >
                  <div className="">
                    <h3 className='text-xl font-poppins font-semibold'>{experience.title}</h3>
                    <p className='font-medium font-base' style={{margin:0}}>{experience.company_name}</p>
                  </div>
                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, id) => (
                      <li key={`experience-point-${id}`} className='text-black-500/50 font-normal pl-1 text-sm'>
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              )
            })}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />
      <CTA />
    </section>
  )
}

export default About