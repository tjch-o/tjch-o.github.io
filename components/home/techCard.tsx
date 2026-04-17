import Image from 'next/image';
import { useState } from 'react';

interface TechCardProps {
    name: string;
}

const TechCard = ({ name }: TechCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [imageError, setImageError] = useState(false);

    return (
        <div
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-100">
                <div className="relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center">
                    {!imageError ? (
                        <Image
                            src={`/home/${name.toLowerCase()}.svg`}
                            alt={name}
                            width={100}
                            height={100}
                            className="object-contain transition-all duration-300 group-hover:scale-110"
                            onError={() => setImageError(true)}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-lg">
                            <span className="text-2xl font-bold text-gray-400">
                                {name.charAt(0).toUpperCase()}
                            </span>
                        </div>
                    )}
                </div>

                <div className="mt-3 text-center">
                    <p className="text-sm font-poppins font-medium text-gray-700 truncate">
                        {name}
                    </p>
                </div>
            </div>

            <div className="absolute inset-0 rounded-xl bg-blue-50 opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10" />
        </div>
    );
};

export default TechCard;
