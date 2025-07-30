'use client';

import { useState } from 'react';


export default function useUploadQueue (onUpload) {
    const [uploadingFiles, setUploadingFiles] = useState([]);


    const uploadFiles = async (files) => {
        const temp = Array.from(files).map((file, i) => ({
            id: `${file.name}-${Date.now()}-${i}`,
            name: file.name,
        }));
        setUploadingFiles((prev) => [...prev, ...temp]);

        await onUpload(files);

        setUploadingFiles([]);
    };

    return { uploadingFiles, uploadFiles };
}
