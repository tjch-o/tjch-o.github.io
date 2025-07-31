import React, { useState } from 'react';

interface TimelineItemProps {
    date: string;
    title: string;
    children: React.ReactNode;
    isExpanded: boolean;
    onToggle: () => void;
    colorClass: string;
    imageSrc: string;
    isLast: boolean;
}

interface TimelineDataItem {
    id: string;
    date: string;
    title: string;
    colorClass: string;
    imageSrc: string;
    content?: React.ReactNode;
}

const TimelineItem = ({
    date,
    title,
    children,
    isExpanded,
    onToggle,
    colorClass,
    imageSrc,
    isLast,
}: TimelineItemProps) => {
    return (
        <div className="relative pb-16 last:pb-0">
            {!isLast && <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-300"></div>}

            <div
                className={`absolute left-0 top-0 w-16 h-16 rounded-full flex items-center justify-center z-10 bg-white border-4 ${colorClass} overflow-hidden shadow-lg`}
            >
                <img src={imageSrc} alt={title} className="w-12 h-12 object-contain" />
            </div>

            <div className="ml-24">
                <div
                    className={`p-6 rounded-lg shadow-lg mb-2 bg-blue-50 border border-blue-100 transition-all duration-300 hover:shadow-xl`}
                >
                    <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                        <button
                            onClick={onToggle}
                            className="text-blue-500 hover:text-blue-700 transition-all"
                            aria-label={isExpanded ? 'Collapse' : 'Expand'}
                        >
                            {isExpanded ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 15l7-7 7 7"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>

                    <div
                        className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-[1.5rem] line-clamp-1'}`}
                    >
                        <div className="text-gray-600 font-inter">{children}</div>
                    </div>
                </div>
                <div className="text-sm font-medium text-gray-500">{date}</div>
            </div>
        </div>
    );
};

const Timeline = () => {
    const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

    const toggleItem = (id: string) => {
        setExpandedItems((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const timelineData: TimelineDataItem[] = [
        {
            id: 'nus',
            date: 'August 2022 - Present',
            title: 'National University of Singapore (NUS)',
            colorClass: 'border-purple-500',
            imageSrc:
                'https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/NUS_coat_of_arms.svg/1200px-NUS_coat_of_arms.svg.png',
            content: (
                <p>
                    Currently a Year 4 Computer Science undergraduate specialising in Software
                    Engineering.
                </p>
            ),
        },
        {
            id: 'nyjc',
            date: 'January 2018 - December 2019',
            title: 'Nanyang Junior College (NYJC)',
            colorClass: 'border-indigo-500',
            imageSrc: '/education/nyjc.svg',
            content: (
                <>
                    <p className="mb-3">Achieved 88.875 RP for A Levels with 6 distinctions.</p>
                    <p>
                        Served as a photographer for different school events under NYJC Photographic
                        Society (NYPS) and also as an OGL for J1 Orientation 2019.
                    </p>
                </>
            ),
        },
        {
            id: 'zhss',
            date: 'January 2014 - December 2017',
            title: 'Zhonghua Secondary School (ZHSS)',
            colorClass: 'border-blue-500',
            imageSrc: '/education/zhss.jpg',
            content: (
                <>
                    <p className="mb-3">
                        Achieved raw L1R5 of 7 points, net L1R5 of 3 points for O Levels with 9
                        distinctions.
                    </p>
                    <p>Served as a team leader in Infocomm Club.</p>
                </>
            ),
        },
        {
            id: 'rosyth',
            date: 'January 2008 - December 2013',
            title: 'Rosyth School',
            colorClass: 'border-cyan-500',
            imageSrc: '/education/rosyth.png',
        },
    ];

    return (
        <div className="w-full max-w-3xl mx-auto py-16 px-4">
            <div className="relative mt-12">
                {timelineData.map((item, index) => (
                    <TimelineItem
                        key={item.id}
                        date={item.date}
                        title={item.title}
                        colorClass={item.colorClass}
                        imageSrc={item.imageSrc}
                        isExpanded={expandedItems[item.id] || false}
                        onToggle={() => toggleItem(item.id)}
                        isLast={index === timelineData.length - 1}
                    >
                        {item.content}
                    </TimelineItem>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
