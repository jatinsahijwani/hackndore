import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode; // Type for the icon prop
  title: string; // Type for the title prop
  description: string; // Type for the description prop
}

export default function Assets() {
  return (
    <main className="w-full h-[100vh] py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-500 to-blue-950">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-white">
            Explore Our Municipal Services
          </h1>
          <p className="max-w-[900px] mx-auto text-lg sm:text-xl md:text-2xl text-gray-200">
            Discover the diverse range of services provided by our municipal corporation, catering to the needs of our vibrant community.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-8">
          <ServiceCard
            icon={<WrenchIcon />}
            title="Public Works"
            description="Maintaining and improving the city's infrastructure, including roads, bridges, and public facilities."
          />
          <ServiceCard
            icon={<LeafIcon />}
            title="Parks & Recreation"
            description="Providing and maintaining green spaces, recreational facilities, and community events for residents to enjoy."
          />
          <ServiceCard
            icon={<BoltIcon />}
            title="Utilities"
            description="Overseeing the provision of essential services like water, power, and waste management for the community."
          />
          <ServiceCard
            icon={<PencilIcon />}
            title="Planning & Development"
            description="Guiding the city's growth and development, including zoning, permitting, and urban planning initiatives."
          />
          <ServiceCard
            icon={<ShieldIcon />}
            title="Public Safety"
            description="Ensuring the safety and security of residents through police, fire, and emergency services."
          />
          <ServiceCard
            icon={<BriefcaseIcon />}
            title="Administration"
            description="Overseeing the day-to-day operations and governance of the municipal corporation."
          />
        </div>
      </div>
    </main>
  );
}

function ServiceCard({ icon, title, description } : ServiceCardProps) {
  return (
    <div className="flex flex-col items-start gap-4 p-6 bg-white shadow-xl rounded-lg transform transition duration-500 hover:scale-105 cursor-pointer">
      <div className="bg-blue-500 rounded-md p-3 flex items-center justify-center text-white hover:bg-purple-600 transition-colors duration-300">
        {icon}
      </div>
      <div className="grid gap-2">
        <h3 className="text-xl sm:text-2xl font-semibold">{title}</h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}

function WrenchIcon(props: any) {
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
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function LeafIcon(props: any) {
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
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function BoltIcon(props: any) {
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
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function PencilIcon(props: any) {
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
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  );
}

function ShieldIcon(props: any) {
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
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}

function BriefcaseIcon(props: any) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}
