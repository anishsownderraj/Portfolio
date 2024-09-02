// import dependencies
import React from 'react';
import { Link } from 'react-router-dom';
// constants
import { socialLinks } from '../constants';

const CTA = () => {
    return (
        <section className='cta'>
            <p className='cta-text'>
                Looking to connect!
            </p>
            <Link to='/contact' className='btn'>
                Contact
            </Link>
            {socialLinks.map((social) => (
                <a
                    target='_blank'
                    href={social.link}
                    key={social.name}
                >
                    <img
                        className='w-10'
                        src={social.iconUrl}
                    >
                    </img>
                </a>
            ))}

        </section>
    );
};

export default CTA;