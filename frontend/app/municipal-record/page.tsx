"use client"
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const RecordPage = () => {
    const router = useRouter();
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isRecording, setIsRecording] = useState('Start Recording');
    const handleClick = () => {
        setIsRecording("Recording");
        setTimeout(() => {
            console.log("Recording in progress");
            router.push('municipal-record-success');
        }, 5000)

    }

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
            }} className='p-5 absolute z-10 mt-96 mr-16 border-2 border-black bg-blue-600 text-white'>{isRecording}</Button>
        )
    </div>
    );
};

export default RecordPage;