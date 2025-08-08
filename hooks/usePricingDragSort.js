'use client';

import { useState } from 'react';

export default function usePricingDragSort (disabled, onMove) {
    const [dragIndex, setDragIndex] = useState(null);
    const [hoverIndex, setHoverIndex] = useState(null);

    const handleDragStart = (index) => {
        if (disabled) return;
        setDragIndex(index);
        setHoverIndex(null);
    };

    const handleDragOver = (e, index) => {
        e.preventDefault();
        if (disabled || index === dragIndex || hoverIndex === index) return;
        setHoverIndex(index);
    };

    const handleDrop = (targetIndex) => {
        if (disabled || dragIndex === null) return;
        if (dragIndex !== targetIndex) {
            onMove(dragIndex, targetIndex);
        }
        reset();
    };

    const handleDragEnd = () => {
        reset();
    };

    const reset = () => {
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
