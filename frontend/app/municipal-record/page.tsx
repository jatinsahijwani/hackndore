"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation'; // Corrected import path

const RecordPage = () => {
    const router = useRouter();
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [isRecording, setIsRecording] = useState('Start Recording');

    const handleClick = async () => {
        setIsRecording("Recording");
        setTimeout(async () => {
            console.log("Recording in progress");

            // Check if canvas is available
            if (!canvasRef.current) {
                console.error('Canvas is not available.');
                return;
            }

            // Capture the current frame
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            if (!context) {
                console.error('Cannot get context from canvas.');
                return;
            }
            context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
            const imageData = canvas.toDataURL('image/png');
            const blob = await fetch(imageData).then(res => res.blob());

            // Send the blob to your API
            const formData = new FormData();
            formData.append('file', blob);

            try {
                const response = await fetch('YOUR_API_ENDPOINT', {
                    method: 'POST',
                    body: formData,
                });
                const result = await response.json();
                console.log(result);
            } catch (error) {
                console.error('Error uploading video:', error);
            }

            router.push('/municipal-record-success');
        }, 5000);
    };

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            })
            .catch(err => console.error('Error accessing the camera:', err));
    }, []);
    

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Live Video Recorder</h1>
        <video ref={videoRef} autoPlay muted className="w-full overflow-hidden scale-[400%] max-w-xs"></video>
            <Button onClick={() => {
                handleClick()
            }} className='p-5 absolute z-10 mt-96 mr-16'>{isRecording}</Button>
        )
    </div>
    );
};

export default RecordPage;
