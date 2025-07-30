'use client';

import { useState } from 'react';
import { useNotification } from '@/context/NotificationContext';

export default function useMediaPicker (currentImages, onAddImages) {
    const [isOpen, setIsOpen] = useState(false);
    const { showNotification } = useNotification();

    const openPicker = () => setIsOpen(true);
    const closePicker = () => setIsOpen(false);

    const handleSelect = async (image) => {
        if (!image?.id || !image?.url) return;
        // Έλεγχος για διπλότυπα
        if (currentImages.some((img) => img.id === image.id)) {
            showNotification('Αυτή η εικόνα είναι ήδη στη gallery.', 'error');
            return;
        }
        // Προσθέτουμε την εικόνα (με δυνατότητα για πολλαπλές επιλογές)
        onAddImages([image]);
    };

    return {
        isOpen,
        openPicker,
        closePicker,
        handleSelect,
        selectedIds: currentImages.map((img) => img.id),
    };
}
