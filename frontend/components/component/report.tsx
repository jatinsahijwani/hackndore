import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function Report() {
  return (
    <div className="flex flex-col gap-6 p-6 md:p-8 bg-gradient-to-r from-blue-400  to-blue-950 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-white">Municipal Corporation Report</h1>
        <div className="flex items-center gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2 font-medium bg-transparent border border-white p-2 rounded-full">
                <CalendarClockIcon className="h-5 w-5 text-white" />
                <span className="text-white">June 1, 2023 - June 30, 2023</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0 w-auto bg-white shadow-md">
              <Calendar initialFocus mode="range" numberOfMonths={2} />
            </PopoverContent>
          </Popover>
          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            Export Report
          </Button>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-lg bg-white rounded-lg overflow-hidden">
          <CardHeader className="bg-gray-100 p-4">
            <CardTitle>Total Revenue</CardTitle>
            <CardDescription>For the selected period</CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <div className="text-4xl font-bold text-gray-800">$2,456,789</div>
          </CardContent>
        </Card>
        <Card className="shadow-lg bg-white rounded-lg overflow-hidden">
          <CardHeader className="bg-gray-100 p-4">
            <CardTitle>Total Expensed</CardTitle>
            <CardDescription>For the selected period</CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <div className="text-4xl font-bold text-gray-800">$1,456,789</div>
          </CardContent>
        </Card>
        <Card className="shadow-lg bg-white rounded-lg overflow-hidden">
          <CardHeader className="bg-gray-100 p-4">
            <CardTitle>Net Profit</CardTitle>
            <CardDescription>For the selected period</CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <div className="text-4xl font-bold text-gray-800">$2,456,789</div>
          </CardContent>
        </Card>
        <Card className="shadow-lg bg-white rounded-lg overflow-hidden">
          <CardHeader className="bg-gray-100 p-4">
            <CardTitle>Total Permits Issued</CardTitle>
            <CardDescription>For the selected period</CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <div className="text-4xl font-bold text-gray-800">$2,456,789</div>
          </CardContent>
        </Card>
        <Card className="shadow-lg bg-white rounded-lg overflow-hidden">
          <CardHeader className="bg-gray-100 p-4">
            <CardTitle>Total Violations</CardTitle>
            <CardDescription>For the selected period</CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <div className="text-4xl font-bold text-gray-800">$2,456,789</div>
          </CardContent>
        </Card>
        <Card className="shadow-lg bg-white rounded-lg overflow-hidden">
          <CardHeader className="bg-gray-100 p-4">
            <CardTitle>Total Citizen Requested</CardTitle>
            <CardDescription>For the selected period</CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <div className="text-4xl font-bold text-gray-800">2,456,789</div>
          </CardContent>
        </Card>
        
      </div>
    </div>
  );
}

function CalendarClockIcon(props) {
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
      <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h5" />
      <path d="M17.5 17.5 16 16.3V14" />
      <circle cx="16" cy="16" r="6" />
    </svg>
  );
}

function DownloadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

function XIcon(props) {
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
  );
}
