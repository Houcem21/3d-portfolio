import { aleia, transcom, escola, circlone } from "../assets/images";
import {
    contact,
    css,
    php,
    git,
    github,
    html,
    javascript,
    linkedin,
    nodejs,
    react,
    sass,
    tailwindcss,
    shooter,
    calculator,
    screen,
    laptop,
    game,
    youtube,
    company
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: php,
        name: "PHP",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Developer Intern",
        company_name: "Aleia",
        icon: aleia,
        iconBg: "#D3D3D3",
        date: "Jun 2021 - Feb 2022",
        points: [
            "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implemented responsive design and ensured cross-browser compatibility.",
            "Participated in code reviews and provided constructive feedback to other developers.",
        ],
    },
    {
        title: "Customer Service Assistant",
        company_name: "Transcom",
        icon: transcom,
        iconBg: "#000000",
        date: "Jun 2022 - Nov 2022",
        points: [
            "Improved the satisfaction rate for users",
            "Maintained a loyal set of customers.",
            "Resolved a number of conflicts between transaction parties."
        ],
    },
    {
        title: "English Teacher",
        company_name: "Escola Americana",
        icon: escola,
        iconBg: "#D3D3D3",
        date: "Jun 2023 - Sept 2023",
        points: [
            "Aided to the creation of a new school in Santa Catarina.",
            "Created a curriculum to follow through for teachers.",
            "Educated kids from different ages."
        ],
    },
    {
        title: "React Developer",
        company_name: "Circlone",
        icon: circlone,
        iconBg: "#7511A4",
        date: "Jul 2023 - Oct 2023",
        points: [
            "Contributed to the developing of the main platform.",
            "Assited teammates to a large degree.",
            "Kept the project in order and fixed major bugs."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/houcem21',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/houcem-dammak21',
    }
];

export const projects = [
    {
        iconUrl: shooter,
        theme: 'btn-back-yellow',
        name: 'JS Shooter Game',
        description: 'Developed a mini javascript game to shoot and destroy bubbles, while keeping score.',
        link: 'https://js-mini-shooter.netlify.app',
    },
    {
        iconUrl: company,
        theme: 'btn-back-purple',
        name: 'Company Website',
        description: 'Built a company website from scratch with a multitude of high end features.',
        link: 'https://company-portfolio-production.up.railway.app/',
    },
    {
        iconUrl: screen,
        theme: 'btn-back-blue',
        name: 'My Portfolio V1.0',
        description: 'Built a complete portfolio which I used for the better time of last year. This here is my step-up',
        link: 'https://houcem-dmk.netlify.app',
    },
    {
        iconUrl: laptop,
        theme: 'btn-back-pink',
        name: 'Portfolio Template',
        description: 'Gained practice in portfolio creation and React folder organization.',
        link: 'https://template-portfolio-johndoe.netlify.app',
    },
    {
        iconUrl: game,
        theme: 'btn-back-black',
        name: '2D JS Game',
        description: 'Developing a simple JS 2D game. Interesting dynamics and cool animations await!',
        link: 'https://github.com/Houcem21/js-game',
    },
    {
        iconUrl: youtube,
        theme: 'btn-back-red',
        name: 'Youtube Clone',
        description: 'Built a complete clone of Youtube, allowing users to view videos, all called from a RAPID API.',
        link: 'https://youtube-clone-hd.netlify.app/',
    },
    {
        iconUrl: calculator,
        theme: 'btn-back-green',
        name: 'Simple Calculator',
        description: 'Created a basic calculator to start learning the basics of React JS.',
        link: 'https://github.com/Houcem21/react-calculator',
    }
];