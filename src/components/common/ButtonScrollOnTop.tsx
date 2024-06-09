"use client";

import { useRef, useState } from "react";

export function ButtonScrollOnTop() {
    const [showScroll, setShowScroll] = useState(false);

    if (typeof window === "undefined") {
        return null;
    }

    const checkScrollTop = () => {
        if (!showScroll && window.scrollY > 0) {
            setShowScroll(true);
        } else if (window.scrollY == 0) {
            setShowScroll(false);
        }
    };

    window.addEventListener("scroll", checkScrollTop);

    return (
        <div
            className='fixed bottom-4 right-4 duration-300 transition-opacity z-50'
            style={{
                opacity: showScroll ? 1 : 0,
            }}
        >
            <button
                className='p-2 bg-slate-950 rounded-full shadow-md bg-blend-exclusion'
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 text-white'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 10l7-7m0 0l7 7m-7-7v18'
                    />
                </svg>
            </button>
        </div>
    );
}
