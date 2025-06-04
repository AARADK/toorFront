'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { aboutImages } from '../../../../data/data';

export function AboutImage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === aboutImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-muted w-full aspect-[4/3] relative rounded-xl overflow-hidden">
            {aboutImages.map((image: string, index: number) => (
                <div
                    key={image}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <Image
                        src={image}
                        alt={`About image ${index + 1}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                </div>
            ))}
        </div>
    );
}
  