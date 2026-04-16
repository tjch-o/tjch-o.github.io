import Card from '../card';

const IdemiaCard = () => {
    const url = 'https://www.idemia.com/';
    const techStack = ['Spring Boot', 'RabbitMQ', 'Kafka'];
    const desc = [
        'Developed event-driven microservices for travel data aggregation system in Spring Boot, Kafka and RabbitMQ',
        'Refactored JPQL queries to improve compatibility and maintainability during microservice migration to Spring Boot 3',
        'Improved test coverage and reliability by creating JUnit test cases and JMeter scripts',
    ];
    return (
        <Card
            company={'IDEMIA'}
            role="Backend Engineer Intern"
            startDate="23 June 2025"
            endDate="12 Sept 2025"
            techUsed={techStack}
            description={desc}
            siteLink={url}
            image=""
            cardWidth={425}
        />
    );
};

export default IdemiaCard;
