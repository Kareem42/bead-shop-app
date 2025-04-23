import React, { useEffect, useState, useRef } from 'react';

const RevealOnScroll = ({ children, threshold = 0.1, className = '' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing once visible
                }
            },
            { threshold }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [threshold]);

    return (
        <div
            ref={elementRef}
            className={`${className} ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
        >
            {children}
        </div>
    );
};

export default RevealOnScroll;