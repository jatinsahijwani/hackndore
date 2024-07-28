"use client"
import React, { useRef, useState, useEffect } from 'react';
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";




const initialChats = [
  {
    id: 1,
    sender: 'Bot',
    content: 'Hello! Please let me access your location.',
    timestamp: '2:35 PM'
  },
  {
    id: 2,
    sender: 'Bot',
    content: 'What kind of problem are you facing? Please explain briefly.',
    timestamp: '2:36 PM'
  },
];

// Inside your component file or a separate .d.ts file
export type LocationState = {
  latitude?: number;
  longitude?: number;
};


export function ChatForm() {
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);
  const [chats, setChats] = useState(initialChats);
  const [location, setLocation] = useState<LocationState | null>(null);
  const [error, setError] = useState('');
  const [point,setPoint] = useState(0);
  const [message,setMessage] = useState('');

  function scrollToBottom() {
    const scrollAreaElement = scrollAreaRef.current;
    if (scrollAreaElement) {
      scrollAreaElement.scrollTop = scrollAreaElement.scrollHeight;
    }
  }
  
  useEffect(() => {
    scrollToBottom();
  }, [chats]); // Re-run this effect whenever `chats` changes
  

  const handleClick = async() => {
    if (point === 0)
    {
      setPoint(point+1);
      initialChats.push({
        id: 3,
        sender: 'User',
        content: message,
        timestamp: "2:40 PM"
      });
      setChats(initialChats);
      setMessage('');
      setTimeout(() => {
        initialChats.push({
          id: 4,
          sender: 'Bot',
          content: "Please type your complete address!",
          timestamp: "2:41 PM"
        });
        setChats(initialChats);
      },1000)
    }
    else if(point==1)
    { 
      setPoint(point+1);
      initialChats.push({
        id: 5,
        sender: 'User',
        content: message,
        timestamp: "2:43 PM"
      });
      setChats(initialChats);
      setMessage('');
      setTimeout(() => {
        initialChats.push({
          id: 4,
          sender: 'Bot',
          content: "Please type remarks!",
          timestamp: "2:50 PM"
        });
        setChats(initialChats);
      },1000)
    }
    else if(point==2)
    {
      initialChats.push({
        id: 5,
        sender: 'User',
        content: message,
        timestamp: "2:43 PM"
      });
      setChats(initialChats);
      setMessage('');
      setTimeout(() => {
        initialChats.push({
          id: 4,
          sender: 'Bot',
          content: "Complaint Registered Succesfully!!",
          timestamp: "2:50 PM"
        });
        setChats(initialChats);
      },1000)
    }
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => {
        setError(error.message);
      }
    );
  },[])

  return (
    <div className="flex flex-col h-screen">
  <header className="bg-primary sticky text-primary-foreground bg-blue-900 text-white py-4 px-6 flex items-center justify-between">
    <Link href="#" className="flex items-center gap-2" prefetch={false}>
      {/* Assuming MessageCircleIcon is imported */}
      <span className="text-xl font-bold">Helpline ChatBot</span>
    </Link>
  </header>
  <div className="flex-1 flex flex-col ">
    <ScrollArea ref={scrollAreaRef} className="flex-1 space-y-4 overflow-y-auto">
      {chats.map((chat) => (
        <div key={chat.id} className={`flex items-start my-2 gap-2 ${chat.sender === 'User' ? 'justify-end' : ''}`}>
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>{chat.sender.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className={`rounded-lg p-3 max-w-[75%] ${chat.sender === 'User' ? 'bg-muted text-black' : 'bg-muted text-gray-700'}`}>
            <div className="font-medium">{chat.sender}</div>
            <p>{chat.content}</p>
            <div className="text-xs text-muted-foreground mt-1">{chat.timestamp}</div>
          </div>
        </div>
      ))}
    </ScrollArea>
    <div className="bg-muted sticky bottom-0 border-t p-4 flex items-center gap-2 bg-gray-300">
      <Input value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder="Type your message..." className="flex-1" />
      <Button onClick={handleClick} className='bg-blue-500 text-white hover:bg-blue-800'>
        <SendIcon className="w-5 h-5 mr-2" />
        Send
      </Button>
    </div>
  </div>
</div>
  );
}


function MessageCircleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}


function MoveHorizontalIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  )
}


function PaperclipIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  )
}


function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function SendIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}


function SmileIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  )
}


function VideoIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  )
}


function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}


