// Import statements at the top of your file
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function Profile() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-900 min-h-screen flex justify-center items-center">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-lg overflow-hidden m-10">
        <div className="md:flex">
          <div className="md:w-1/2 bg-blue-500 text-white p-10 space-y-6 ">
            <h2 className="text-3xl font-bold">Ramesh Malviya</h2>
            <p className="text-lg">Sanitation Worker</p>
            <p>+91 7591682795</p>
            <Separator className="border-t border-gray-300 my-6" />
            <div>
              <h3 className="text-xl font-semibold">Job Details</h3>
              <ul className="list-disc pl-5 mt-2">
                <li>Assigned Area: Malharganj</li>
                <li>Shift: Morning (6am - 2pm)</li>
                <li>Years of Experience: 5 years</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Performance Rating</h3>
              <div className="flex items-center mt-2">
                {[...Array(4)].map((_, i) => (
                  <StarIcon key={i} className="w-6 h-6 fill-current text-yellow-400 mr-1" />
                ))}
                {[...Array(1)].map((_, i) => (
                  <StarIcon key={i} className="w-6 h-6 fill-current text-gray-300 mr-1" />
                ))}
                <span className="text-lg">4.2 / 5</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 p-10 space-y-8">
            <h2 className="text-2xl font-bold text-blue-500">Managed Assets</h2>
            <div className="grid grid-cols-2 gap-4">
              {assets.map(({ title, count }) => (
                <div key={title} className="bg-blue-100 rounded-lg p-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p>{count} units</p>
                </div>
              ))}
            </div>
            <Separator className="border-t border-gray-300 my-6" />
            <h2 className="text-2xl font-bold text-blue-500">Work Details</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">Responsibilities</h3>
                <p className="mt-2">Responsible for maintaining and repairing public infrastructure, including roads, sidewalks, and street lights.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-xl font-semibold">Specialties</h3>
                  <p className="mt-2">Expertise in electrical work, plumbing, and concrete repair.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Work History</h3>
                  <p className="mt-2">5 years of experience working for the Municipal Corporation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StarIcon(props) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

// Sample assets data
const assets = [
  { title: "Street Sweepers", count: "12" },
  { title: "Garbage Trucks", count: "8" },
  { title: "Dumpsters", count: "45" },
  { title: "Shovels", count: "28" },
  { title: "Brooms", count: "32" },
  { title: "Rakes", count: "18" },
];
