import React from 'react';
import TechUsedCard from './techUsed';
import VisitGithubButton from './visitGithub';
import VisitSiteButton from './visitSite';

interface PreviewProps {
    title: string;
    description: string;
    techUsed: string[];
    cardWidth?: number;
    image: string;
    githubLink: string;
    siteLink?: string;
}

const Preview = ({
    title,
    description,
    techUsed,
    cardWidth,
    image,
    githubLink,
    siteLink,
}: PreviewProps) => {
    return (
        <div className="flex justify-center">
            <div className="bg-white shadow-[0px_4px_20px_4px_rgba(50,100,150,0.5)] rounded-lg p-6 max-w-3xl">
                <div className="flex flex-row items-center justify-between">
                    <h1 className="text-2xl font-bold m-0">{title}</h1>
                    <div className="flex flex-row space-x-4">
                        {siteLink && <VisitSiteButton href={siteLink} padding={4} />}
                        <VisitGithubButton href={githubLink} padding={4} />
                    </div>
                </div>
                <div className="space-y-4">
                    <p className="text-tokyo-night font-poppins">{description}</p>
                    <TechUsedCard techUsed={techUsed} cardWidth={cardWidth ?? 250} />
                </div>
            </div>
        </div>
    );
};

export default Preview;
