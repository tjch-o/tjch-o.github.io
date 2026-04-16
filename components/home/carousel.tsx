import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TechCard from './techCard';

interface TechStack {
    label: string;
    stacks: string[];
}

const techStacks: TechStack[] = [
    {
        label: 'Programming Languages',
        stacks: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C'],
    },
    {
        label: 'Backend',
        stacks: [
            'Nodejs',
            'Expressjs',
            'Spring Boot',
            'FastAPI',
            'PostgreSQL',
            'MongoDB',
            'Firebase',
            'Docker',
            'RabbitMQ',
            'Redis',
            'Kafka',
        ],
    },
    {
        label: 'Frontend',
        stacks: ['HTML', 'CSS', 'Reactjs', 'TailwindCSS', 'Nextjs', 'Vuejs'],
    },
    {
        label: 'Machine Learning',
        stacks: ['Pandas', 'Numpy', 'Pytorch'],
    },
];

const DotCarousel = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const activeTechs = techStacks[activeIndex].stacks;

    const handleTabClick = (index: number) => {
        setActiveIndex(index);
        setScrollPosition(0);
    };

    const scroll = (direction: 'left' | 'right') => {
        const container = carouselRef.current;
        if (!container) return;

        const scrollAmount = 200;
        const newPosition =
            direction === 'left'
                ? Math.max(0, scrollPosition - scrollAmount)
                : Math.min(
                      container.scrollWidth - container.clientWidth,
                      scrollPosition + scrollAmount
                  );

        container.scrollTo({
            left: newPosition,
            behavior: 'smooth',
        });

        setScrollPosition(newPosition);
    };

    const [showScrollButtons, setShowScrollButtons] = useState<boolean>(false);

    useEffect(() => {
        const checkOverflow = () => {
            if (carouselRef.current) {
                const isOverflowing =
                    carouselRef.current.scrollWidth > carouselRef.current.clientWidth;
                setShowScrollButtons(isOverflowing);
            }
        };

        checkOverflow();
        window.addEventListener('resize', checkOverflow);
        return () => window.removeEventListener('resize', checkOverflow);
    }, [activeIndex, activeTechs]);

    return (
        <div className="flex justify-center">
            <div className="my-4 w-full max-w-3xl">
                <div className="border rounded-lg shadow-lg bg-white">
                    <div className="p-4 text-center relative">
                        {showScrollButtons && (
                            <button
                                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-70 rounded-full p-1 shadow"
                                onClick={() => scroll('left')}
                                disabled={scrollPosition <= 0}
                            >
                                <ChevronLeft size={24} />
                            </button>
                        )}

                        <div
                            ref={carouselRef}
                            className="flex overflow-x-auto py-2"
                            style={{
                                scrollBehavior: 'smooth',
                                scrollbarWidth: 'none',
                            }}
                        >
                            <div className="flex space-x-4 px-8">
                                {activeTechs.map((tech, index) => (
                                    <div key={index} className="flex-shrink-0">
                                        <TechCard name={tech} key={index} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {showScrollButtons && (
                            <button
                                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-70 rounded-full p-1 shadow"
                                onClick={() => scroll('right')}
                                disabled={
                                    !carouselRef.current ||
                                    scrollPosition >=
                                        carouselRef.current.scrollWidth -
                                            carouselRef.current.clientWidth
                                }
                            >
                                <ChevronRight size={24} />
                            </button>
                        )}
                    </div>
                </div>

                {/* Segmented tab nav */}
                <div className="flex gap-1 bg-white bg-opacity-20 backdrop-blur-sm p-1 rounded-xl mt-4">
                    {techStacks.map((stack, index) => (
                        <button
                            key={index}
                            onClick={() => handleTabClick(index)}
                            className={`flex-1 text-xs font-medium py-2 px-1 rounded-lg transition-all duration-200 ${
                                activeIndex === index
                                    ? 'bg-white text-gray-800 shadow'
                                    : 'text-white hover:bg-white hover:bg-opacity-10'
                            }`}
                        >
                            {stack.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DotCarousel;
