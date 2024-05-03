"use client";

import { useEffect, useRef } from 'react'

const ScrollableContainer = ({ children }) => {
    const containerRef = useRef(null);

    // Scroll to the bottom when component mounts
    useEffect(() => {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }, [])

    // scroll to the bottom when new message is received 
    useEffect(() => {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }, [children])
    return (
        <div
            ref={containerRef}
            className='overflow-y-auto h-full p-4'
        >
            {children}
        </div>
    )
}

export default ScrollableContainer
