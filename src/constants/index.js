import { aitudier, onewheel } from '../assets/images';
import {
    github,
    linkedin,
    css,
    git,
    html,
    javascript,
    mui,
    react,
    sass,
    tailwindcss,
    flask,
    mysql,
    python,
    threejs,
    pokemonball,
    wheel
} from '../assets/icons';

export const skills = [
    {
        imageUrl: css,
        name: 'CSS',
        type: 'Frontend',
    },
    {
        imageUrl: html,
        name: 'HTML',
        type: 'Frontend',
    },
    {
        imageUrl: javascript,
        name: 'JavaScript',
        type: 'Frontend',
    },
    {
        imageUrl: mui,
        name: 'Material-UI',
        type: 'Frontend',
    },
    {
        imageUrl: react,
        name: 'React',
        type: 'Frontend',
    },
    {
        imageUrl: sass,
        name: 'Sass',
        type: 'Frontend',
    },
    {
        imageUrl: tailwindcss,
        name: 'Tailwind CSS',
        type: 'Frontend',
    },
    {
        imageUrl: threejs,
        name: 'ThreeJS',
        type: 'Frontend',
    },
    {
        imageUrl: flask,
        name: 'Flask',
        type: 'Backend',
    },
    {
        imageUrl: mysql,
        name: 'MySQL',
        type: 'Backend',
    },
    {
        imageUrl: python,
        name: 'Python',
        type: 'Backend',
    },
    {
        imageUrl: git,
        name: 'Git',
        type: 'Version Control',
    },
    {
        imageUrl: github,
        name: 'GitHub',
        type: 'Version Control',
    }
];

export const experiences = [
    {
        title: 'Software Engineer',
        company_name: 'AiTudier',
        icon: aitudier,
        iconBg: '#accbe1',
        date: 'June 2022 - August 2022',
        points: [
            'Developed a collaborative React application through agile methodologies, providing customers with a satisfying experience to easily purchase our educational packages with k-12 curriculum.',
            'Utilized a versatile multi-page React application capable of accommodating both heightened interaction complexity and increased user volume.',
            'Engineered a seamless purchase experience by integrating payment gateway, resulting in a 60% increase in monthly purchases.',
            'Conducted comprehensive code reviews via GitHub, resulting in a remarkable 25% reduction in deployment time.'
        ],
    },
    {
        title: 'Full Stack Software Engineer',
        company_name: 'Onewheel // Future Motion',
        icon: onewheel,
        iconBg: '#fbc3bc',
        date: 'Nov 2023 - Present',
        points: [
            'Developing and maintaining full stack web applications using primarily React, Flask, Sass styling and other related technologies.',
            'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
            'Implementing responsive design and ensuring cross-browser compatibility.',
            'Participating in code reviews and providing constructive feedback to other developers.',
            'Reduced customer support ticket times by 47% by building out internal system tools to help customer service better handle board issues.',
            'Drove Onewheel GT-S sales up by 33%, building out the Onewheel Trade-in Portal.'
        ],
    }
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/anishsownderraj',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/anish-sownderraj',
    }
];

export const projects = [
    {
        iconUrl: pokemonball,
        theme: 'btn-back-red',
        name: 'Pokédex',
        description: 'Developed a responsive web application that elegantly showcases pokemon information in a centralized location.',
        link: 'https://pokedex-as.netlify.app/',
    },
    {
        iconUrl: wheel,
        theme: 'btn-back-green',
        name: 'Onewheel Ownership Portal',
        description: 'Built out a responsive customer facing web application with a team of developlers where onewheel owners could view, customize, and register their boards in a single hub. Implemented photo handling to register boards, added flask security to all routes, and built out the user and board profiles.',
        link: 'https://my.onewheel.com/login'
    },
    {
        iconUrl: threejs,
        theme: 'btn-back-blue',
        name: 'This Portfolio!',
        description: 'Designed and built a responsive ThreeJS web application showcasing my background and experience.',
        link: '',
    }
];