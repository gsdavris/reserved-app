import { useState } from 'react';

export function useLocationSearch ({ onResult, onError }) {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

    const search = async () => {
        if (!query.trim()) return;

        setLoading(true);
        try {
            const res = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
                    query
                )}`
            );
            const data = await res.json();

            if (data?.length > 0) {
                const { lat, lon } = data[0];
                onResult?.({
                    lat: parseFloat(lat),
                    lng: parseFloat(lon),
                    raw: data[0],
                });
            } else {
                onError?.('Δεν βρέθηκε η τοποθεσία');
            }
        } catch (err) {
            console.error('Geocoding error:', err);
            onError?.('Αποτυχία αναζήτησης τοποθεσίας');
        } finally {
            setLoading(false);
        }
    };

    return {
        query,
        setQuery,
        search,
        loading,
    };
}
