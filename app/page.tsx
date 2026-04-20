'use client';

import NavBar from '@/components/nav/NavBar';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import DotCarousel from '@/components/home/carousel';

function Home() {
    const sentences = ['I aspire to be a', 'I aspire to be a', 'I am a'];
    const wordsWithStyle = ['software engineer.', 'backend engineer.', 'problem solver.'];
    const element = useRef(null);

    useEffect(() => {
        const options = {
            strings: sentences.map(
                (sentence, index) =>
                    `${sentence} <span class="text-tokyo-night-light font-bold"> ${wordsWithStyle[index]}</span>`
            ),
            typeSpeed: 40,
            backSpeed: 30,
            backDelay: 2000,
            fadeOut: true,
            fadeDelay: 200,
            loop: true,
        };

        const typed = new Typed(element.current, options);

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="min-h-screen overflow-auto bg-tokyo-night pt-16">
            <NavBar />

            {/* Hero Section */}
            <div className="flex justify-center px-4 sm:px-8 py-12 lg:py-20 bg-tokyo-night">
                <div className="flex flex-col lg:flex-row items-center lg:space-x-16 max-w-7xl w-full gap-8">
                    {/* Text Content */}
                    <div className="text-left flex-1 min-w-0 space-y-6 animate-fade-in">
                        <div className="space-y-2">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight">
                                Hey, I&apos;m{' '}
                                <span className="text-tokyo-night-light font-bold bg-gradient-to-r from-tokyo-night-light to-blue-400 bg-clip-text text-transparent">
                                    Tze Jie.
                                </span>
                            </h1>
                            <div className="text-3xl md:text-4xl lg:text-5xl text-white min-h-[3rem] md:min-h-[4rem]">
                                <span ref={element} />
                            </div>
                        </div>

                        <div className="h-1 w-20 bg-tokyo-night-light rounded-full"></div>

                        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                            I am currently a Year 4 Computer Science student at NUS. I am passionate
                            about software engineering, specifically{' '}
                            <span className="text-tokyo-night-light font-semibold">
                                backend development
                            </span>{' '}
                            and{' '}
                            <span className="text-tokyo-night-light font-semibold">
                                distributed systems
                            </span>
                            .
                        </p>
                    </div>

                    <div className="flex-shrink-0 animate-fade-in-up">
                        <div className="relative group">
                            {/* layered shadow effect to create the stack */}
                            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-lg bg-tokyo-night-light/20" />
                            <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-lg bg-tokyo-night-light/40" />

                            <div className="relative">
                                <Image
                                    src="/tjch-o.jpg"
                                    alt="Tze Jie"
                                    width={400}
                                    height={400}
                                    className="rounded-lg shadow-2xl object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-12 bg-gradient-to-b from-tokyo-night to-gray-900">
                <div className="text-center mb-8 px-4">
                    <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-3">
                        Technical Proficiencies
                    </h2>
                </div>
                <DotCarousel />
            </div>

            <style jsx global>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.8s ease-out;
                }

                .animate-fade-in-up {
                    animation: fade-in-up 1s ease-out 0.2s both;
                }
            `}</style>
        </div>
    );
}

export default Home;
