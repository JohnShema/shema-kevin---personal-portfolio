
import React, { useState, useEffect, useCallback } from 'react';

interface TypingEffectProps {
    titles: string[];
}

const TypingEffect: React.FC<TypingEffectProps> = ({ titles }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');

    const type = useCallback(() => {
        const currentTitle = titles[index];

        if (isDeleting) {
            if (subIndex > 0) {
                setText(currentTitle.substring(0, subIndex - 1));
                setSubIndex(subIndex - 1);
            } else {
                setIsDeleting(false);
                setIndex((prevIndex) => (prevIndex + 1) % titles.length);
            }
        } else {
            if (subIndex < currentTitle.length) {
                setText(currentTitle.substring(0, subIndex + 1));
                setSubIndex(subIndex + 1);
            } else {
                // Wait before deleting
                setTimeout(() => setIsDeleting(true), 2000);
            }
        }
    }, [index, subIndex, isDeleting, titles]);

    useEffect(() => {
        const typingSpeed = isDeleting ? 75 : 150;
        const timeout = setTimeout(type, typingSpeed);
        return () => clearTimeout(timeout);
    }, [text, type, isDeleting]);

    return (
        <span className="text-accent">
            {text}
            <span className="animate-ping">|</span>
        </span>
    );
};

export default TypingEffect;
