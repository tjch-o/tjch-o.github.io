'use client';
import Timeline from '@/components/education/Timeline';
import NavBar from '@/components/nav/NavBar';
import React from 'react';

function Education() {
    return (
        <div className="bg-tokyo-night min-h-screen flex flex-col">
            <NavBar />
            <main className="flex-grow overflow-y-auto">
                <Timeline />
            </main>
        </div>
    );
}

export default Education;
