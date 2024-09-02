// dependencies
import React from 'react';
import { Link } from 'react-router-dom';
// constants
import { projects } from '../constants';
// components
import CTA from '../components/CTA';

const Projects = () => {
    return (
        <section className='max-container'>
            <h1 className='head-text'>
                My <span className='blue-gradient_text font-semibold drop-shadow'> Projects </span>
            </h1>
            <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                <p>Some of my projects I'm most proud of</p>
            </div>

            <div className='flex flex-wrap my-20 gap-16'>
                {projects.map((project) => (
                    <div className='lg:w-[400px] w-full' key={project.name}>
                        <div className='block-container w-12 h-12'>
                            <div className={`btn-back rounded-xl ${project.theme}`} />
                            <div className='btn-front rounded-xl flex justify-center items-center'>
                                <img
                                    src={project.iconUrl}
                                    alt='Project Icon'
                                    className='object-contain'
                                />
                            </div>
                        </div>
                        <div className='mt-5 flex flex-col'>
                            <h4 className='text-2xl font-poppins font-semibold'>
                                {project.name}
                            </h4>
                            <p className='mt-2 text-slate-500'>
                                {project.description}
                            </p>
                            <div className='mt-5 flex items-center gap-2 font-poppins'>
                                <Link
                                    to={project.link}
                                    target='_blank'
                                    rel='noopenere noreferrer'
                                    className='font-semibold text-blue-600'
                                >
                                    Live Link
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <hr className='border-slate-200'></hr>
            <CTA />
        </section >
    );
};

export default Projects;