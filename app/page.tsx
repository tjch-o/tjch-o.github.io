'use client';

import NavBar from '@/components/nav/NavBar';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import DotCarousel from '@/components/home/carousel';

function Home() {
    const sentences = ['I aspire to be a', 'I aspire to be a', 'I am a'];

    const wordsWithStyle = ['software engineer.', 'full stack web developer.', 'problem solver.'];

    const element = useRef(null);

    useEffect(() => {
        const options = {
            strings: sentences.map(
                (sentence, index) =>
                    `${sentence} <span class="text-tokyo-night-light font-bold"> ${wordsWithStyle[index]}</span>`
            ),
            typeSpeed: 40,
            fadeOut: true,
            fadeDelay: 200,
            loop: true,
        };

        const typed = new Typed(element.current, options);

        return () => {
            // prevent memory leak on unmount
            typed.destroy();
        };
    }, []);

    return (
        <div className="h-screen overflow-auto bg-tokyo-night pt-16">
            <NavBar />
            <div className="flex justify-center p-8 bg-tokyo-night">
                <div className="flex items-center space-x-16 max-w-7xl">
                    <div className="text-left flex-1 min-w-0">
                        <h1 className="text-4xl text-tokyo-night font-bold">
                            Hey, I&apos;m{' '}
                            <span className="text-tokyo-night-light font-bold">Tze Jie.</span>
                        </h1>
                        <h1 className="text-4xl text-tokyo-night">
                            {' '}
                            <span ref={element} />{' '}
                        </h1>

                        <p
                            className="text-lg md:text-2xl mt-4 text-tokyo-night"
                            style={{
                                whiteSpace: 'normal',
                                wordBreak: 'normal',
                                overflowWrap: 'break-word',
                            }}
                        >
                            I am currently a Year 4 Computer Science student at NUS. I am passionate
                            about software engineering, specifically backend development and
                            distributed systems.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <Image
                            src="/tjch-o.jpg"
                            alt="Me"
                            width={500}
                            height={500}
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </div>
            <DotCarousel />
        </div>
    );
}

export default Home;
