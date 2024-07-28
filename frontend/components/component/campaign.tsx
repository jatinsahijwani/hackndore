import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Campaign() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40 ">
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 border-b  bg-[#001D4A]">
        <h1 className="text-2xl font-bold text-white">Community Campaigns</h1>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 flex-col border-r bg-background p-6 sm:flex">
          <nav className="flex flex-col gap-4 ">
            <Link
              href="/createcampaigns"
              className="inline-flex h-10 items-center bg-[#001D4A] text-white hover:bg-[#045CC8] justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Create Campaign
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              <ListIcon className="h-5 w-5" />
              Departments
            </Link>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="grid gap-6">
            <div className="flex items-center justify-between ">
              <h2 className="text-xl font-bold">Existing Campaigns</h2>
              
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Card className="bg-gray-300">
                <CardHeader>
                  <CardTitle>Smart Streetlights</CardTitle>
                  <CardDescription>Campaign to install energy-efficient LED streetlights in the city.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">Active</Badge>
                    <Link
                      href="#"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      View
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-300" >
                <CardHeader>
                  <CardTitle>Bike Share Program</CardTitle>
                  <CardDescription>
                    Campaign to expand the city bikes share program with more stations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">Draft</Badge>
                    <Link
                      href="#"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      View
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-300">
                <CardHeader>
                  <CardTitle>Smart Waste Management</CardTitle>
                  <CardDescription>Campaign to implement a smart waste management system in the city.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">Active</Badge>
                    <Link
                      href="#"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      View
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-300">
                <CardHeader>
                  <CardTitle>Smart Parking</CardTitle>
                  <CardDescription>Campaign to implement a smart parking system in the city.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">Active</Badge>
                    <Link
                      href="#"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      View
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-300">
                <CardHeader>
                  <CardTitle>Urban Greening</CardTitle>
                  <CardDescription>Campaign to plant more trees and create green spaces in the city.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">Active</Badge>
                    <Link
                      href="#"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      View
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-300">
                <CardHeader>
                  <CardTitle>Renewable Energy</CardTitle>
                  <CardDescription>
                    Campaign to promote the use of renewable energy sources in the city.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">Draft</Badge>
                    <Link
                      href="#"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      View
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-300">
                <CardHeader>
                  <CardTitle>Public Transit Expansion</CardTitle>
                  <CardDescription>Campaign to expand the city public transportation network.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">Active</Badge>
                    <Link
                      href="#"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      View
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-300">
                <CardHeader>
                  <CardTitle>Sustainable Water Management</CardTitle>
                  <CardDescription>
                    Campaign to implement sustainable water management practices in the city.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">Active</Badge>
                    <Link
                      href="#"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      View
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function ListIcon(props) {
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
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  )
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
  )
}
