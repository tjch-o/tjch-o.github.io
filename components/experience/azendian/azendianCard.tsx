import Card from '../card';

const AzendianCard = () => {
    const url = 'https://azendian.com/';
    const techStack = ['Reactjs', 'Nextjs', 'Nodejs', 'Expressjs', 'PostgreSQL', 'Puppeteer'];
    const desc = [
        'Created numerous interactive live dashboard webpages for unified dashboard system in React.js, Material UI and CSS',
        'Maintained and developed backends for unified dashboard system in Node.js and Express',
        'Developed a webscraping script using Puppeteer for automation, significantly reducing bottlenecks in the frontend of the unified dashboard system',
        'Successfully migrated outdated web pages to make them more responsive and user friendly',
        'Maintained and developed computerised maintenance management system written in Next.js and PostgreSQL',
    ];
    return (
        <Card
            company={'Azendian Solutions'}
            role="Full Stack Developer Intern"
            startDate="13 May 2024"
            endDate="2 August 2024"
            techUsed={techStack}
            description={desc}
            siteLink={url}
            image=""
            cardWidth={425}
        />
    );
};

export default AzendianCard;
