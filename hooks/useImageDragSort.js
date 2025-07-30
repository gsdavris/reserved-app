'use client';

import { useState } from 'react';

export default function useImageDragSort (disabled, onMove) {
    const [dragIndex, setDragIndex] = useState(null);
    const [hoverIndex, setHoverIndex] = useState(null);

    const handleDragStart = (index) => {
        if (disabled) return;
        setDragIndex(index);
        setHoverIndex(null);
    };

    const handleDragOver = (e, index) => {
        e.preventDefault();
        if (index !== dragIndex && hoverIndex !== index) {
            setHoverIndex(index);
        }
    };

    const handleDrop = (targetIndex) => {
        if (disabled || dragIndex === null) return;
        if (dragIndex !== targetIndex) {
            onMove(dragIndex, targetIndex);
        }
        setDragIndex(null);
        setHoverIndex(null);
    };

    const handleDragEnd = () => {
        setDragIndex(null);
        setHoverIndex(null);
    };

    return {
        dragIndex,
        hoverIndex,
        onDragStart: handleDragStart,
        onDragOver: handleDragOver,
        onDrop: handleDrop,
        onDragEnd: handleDragEnd,
    };
}
