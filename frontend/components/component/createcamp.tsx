import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

export default function CreateCamp() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-400 to-blue-800">
      <header className="py-4 px-6 bg-opacity-75 bg-black">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Community Campaigns</h1>
          <nav className="flex gap-4">
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md bg-white text-black px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-opacity-75 hover:bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-opacity-50 disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Create Campaign
            </Link>
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md bg-white text-black px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-opacity-75 hover:bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-opacity-50 disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              View Campaigns
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 py-12">
        <div className="container mx-auto items-center align-center">
          <div className=" max-w-xl mx-auto rounded-lg overflow-hidden ">
            <div className="max-w-md mx-auto space-y-6 mt-10 m-5">
              <h2 className="text-4xl font-bold text-center text-white">Create a Campaign</h2>
              <form className="space-y-6 bg-white p-6 md:p-8 rounded-lg shadow-md">
                <div>
                  <Label htmlFor="title" className="block text-gray-700">Campaign Title</Label>
                  <Input id="title" type="text" placeholder="Enter campaign title" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>
                <div>
                  <Label htmlFor="description" className="block text-gray-700">Campaign Description</Label>
                  <Textarea id="description" placeholder="Enter campaign description" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="start-date" className="block text-gray-700">Start Date</Label>
                    <Input id="start-date" type="date" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                  </div>
                  <div>
                    <Label htmlFor="end-date" className="block text-gray-700">End Date</Label>
                    <Input id="end-date" type="date" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out">
                  Create Campaign
                </Button>
              </form>
            </div>
          </div>
          <div className="max-w-4xl mx-auto mt-10 space-y-6">
            <h2 className="text-4xl font-bold text-center text-white">Existing Campaigns</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white">
                  <CardHeader>
                    <CardTitle>Smart City Recycling Initiative</CardTitle>
                    <CardDescription>Help reduce waste and promote sustainability in our community.</CardDescription>
                  </CardHeader>
                  <CardContent >
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <div className="text-sm text-muted-foreground">Start Date</div>
                        <div>2023-05-01</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">End Date</div>
                        <div>2023-06-30</div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="#"
                      className=" bg-slate-200 inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      View Details
                    </Link>
                  </CardFooter>
                </Card>
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle>Urban Gardening Project</CardTitle>
                    <CardDescription>Help transform vacant lots into thriving community gardens.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <div className="text-sm text-muted-foreground">Start Date</div>
                        <div>2023-04-15</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">End Date</div>
                        <div>2023-09-30</div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="#"
                      className=" bg-slate-200 inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      View Details
                    </Link>
                  </CardFooter>
                </Card>
                <Card  className="bg-white">
                  <CardHeader>
                    <CardTitle>Renewable Energy Awareness</CardTitle>
                    <CardDescription>Educate the community on the benefits of renewable energy.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <div className="text-sm text-muted-foreground">Start Date</div>
                        <div>2023-06-01</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">End Date</div>
                        <div>2023-08-31</div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="#"
                      className="bg-slate-200 inline-flex h-9 items-center justify-center rounded-md  px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      View Details
                    </Link>
                  </CardFooter>
                </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
