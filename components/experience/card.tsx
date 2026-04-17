import React from 'react';
import VisitSiteButton from '../projects/visitSite';
import TechUsedCard from '../projects/techUsed';
import DateDisplay from './dateDisplay';
import Description from './description';

interface ExperienceCardProps {
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    description: string[];
    techUsed: string[];
    cardWidth?: number;
    image: string;
    siteLink: string;
}

const ExperienceCard = ({
    company,
    role,
    startDate,
    endDate,
    description,
    techUsed,
    cardWidth,
    image,
    siteLink,
}: ExperienceCardProps) => {
    return (
        <div className="flex justify-center">
            <div className="bg-white shadow-[0px_4px_20px_4px_rgba(50,100,150,0.5)] rounded-lg p-6 max-w-[840px] relative">
                <div className="absolute top-4 right-4">
                    <VisitSiteButton href={siteLink} padding={4} />
                </div>
                <h1 className="text-xl font-bold m-0">{company}</h1>
                <div className="flex flex-row justify-start items-center space-x-6">
                    <h3 className="text-lg m-0 font-poppins">{role}</h3>
                    <div className="flex flex-row items-center space-x-4 ml-4">
                        <DateDisplay start={startDate} end={endDate} />
                    </div>
                </div>

                <Description points={description} />
                <TechUsedCard techUsed={techUsed} cardWidth={cardWidth ?? 250} />
            </div>
        </div>
    );
};

export default ExperienceCard;
