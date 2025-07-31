import Card from '../card';

const IrasCard = () => {
    const url = 'https://www.iras.gov.sg/';
    const techStack = ['Python', 'FastAPI', 'Vuejs', 'MongoDB', 'TailwindCSS', 'Redis'];
    const desc = [
        'Built FastAPI backend for in-house greenfield contact analyser, integrating with MongoDB in Azure CosmosDB',
        'Integrated OpenAI GPT-4o model into backend and refined outputs through strategic prompt engineering',
        'Optimised backend performance by implementing Redis caching and rate limiting using SlowAPI',
        'Created MongoDB aggregation pipelines for real-time analytics',
        'Built frontend in Vue.js and Tailwind CSS, creating analytic dashboard on contact volume and interaction history for taxpayers',
    ];
    return (
        <Card
            company={'Inland Revenue Authority of Singapore (IRAS)'}
            role="Software Engineer Intern"
            startDate="6 January 2025"
            endDate="20 June 2025"
            techUsed={techStack}
            description={desc}
            siteLink={url}
            image=""
            cardWidth={425}
        />
    );
};

export default IrasCard;
