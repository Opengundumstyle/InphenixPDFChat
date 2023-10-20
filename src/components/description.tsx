'use client'

import React, { useState,useEffect } from 'react';

const PDFChatDescription = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isTranslated, setIsTranslated] = useState(false);

    const originalText = "Designed to empower engineers and staff, this tool offers real-time chat interactions with user manuals in PDF format. By transforming static manuals into interactive, responsive resources, InpChat ensures swift problem resolution, fosters deeper equipment understanding, and optimizes facility operations.";
    
    const translatedText = "旨在赋予工程师和员工权力，此工具提供与PDF格式的用户手册的实时聊天互动。通过将静态手册转化为交互式、响应式的资源，InpChat确保了快速的问题解决，深化了设备的理解，并优化了设施操作。"; // This is a machine translation, you might want to get a professional translation for accuracy.

    useEffect(() => {
        if (isHovered) return; // Stop the switch if the text is hovered
        
        const timer = setTimeout(() => {
            setIsTranslated(!isTranslated);
        }, 3000);

        // Cleanup to prevent memory leaks
        return () => clearTimeout(timer);
    }, [isTranslated, isHovered]);

    return (
        <div 
            className="relative max-w-xl mt-2 text-lg cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex flex-row">
                <p 
                    className={`transition-opacity duration-300 ease-in-out ${isTranslated ? 'opacity-0' : 'opacity-100'}`}
                >
                    {originalText}
                </p>
            </div>
            <div className="absolute top-0 flex flex-row">
                <p 
                    className={`transition-opacity duration-300 ease-in-out ${isTranslated ? 'opacity-100' : 'opacity-0'}`}
                >
                    {translatedText}
                </p>
            </div>
        </div>
    );
}

export default PDFChatDescription;
