import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart"


export default function MunicipalHome() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <header className="flex h-14 items-center gap-4 border-b bg-white px-4 sm:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <img src="/MUNICIPAL.png" alt="logo" height={140} width={140} />
          <span className="text-lg font-semibold"> Indore Municipal Corporation</span>
        </Link>
        
      </header>
      <div className="flex flex-1">
        <aside className="border-r bg-[#001D4A] px-4 py-6 sm:px-6">
          <nav className="grid gap-4 text-white">
            <Link
              href="#"
              className="flex items-center hover:bg-[#045CC8] gap-2 rounded-md bg-primary px-3 py-2 text-primary-foreground"
              prefetch={false}
            >
              <LayoutGridIcon className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="#"
              className="flex items-center hover:bg-[#045CC8] gap-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              <PackageIcon className="h-5 w-5" />
              Assets
            </Link>
            <Link
              href="#"
              className="flex items-center hover:bg-[#045CC8] gap-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              <WrenchIcon className="h-5 w-5" />
              Maintenance
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 hover:bg-[#045CC8] rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              <FileTextIcon className="h-5 w-5" />
              Reports
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 hover:bg-[#045CC8] rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              <SettingsIcon className="h-5 w-5" />
              Settings
            </Link>
          </nav>
        </aside>
        <main className="flex-1 p-4 sm:p-6 bg-[#045CC8] text-white">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            
          </div>
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Asset Management</CardTitle>
              <CardDescription>
                View and manage the assets under the Municipal Corporation's responsibility.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#001D4A]">
                    <TableHead>Asset Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Condition</TableHead>
                    <TableHead>Assigned Personnel</TableHead>
                    <TableHead>Contact No</TableHead>
                    <TableHead>Last Maintenance</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                <TableRow className="hover:bg-[#001D4A]">
                    <TableCell>Fire Truck</TableCell>
                    <TableCell>Vehicle</TableCell>
                    <TableCell>Malharganj</TableCell>
                    <TableCell>Idle</TableCell>
                    <TableHead>Shyam Ji</TableHead>
                    <TableHead>+91 9875642891</TableHead>
                    <TableCell>15 days ago</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-[#001D4A]">
                    <TableCell>Street Light - Palhar Nagar</TableCell>
                    <TableCell>Infrastructure</TableCell>
                    <TableCell>Palhar Nagar, Main Road</TableCell>
                    <TableCell>Not working</TableCell>
                    <TableCell>Ramlal Kumawat</TableCell>
                    <TableCell>+91 7584970591</TableCell>
                    <TableCell>2 months ago</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-[#001D4A]">
                    <TableCell>Water Pump - Bhanwarkua</TableCell>
                    <TableCell>Utilities</TableCell>
                    <TableCell>Bhawarkua, Residential Area</TableCell>
                    <TableCell>Repaired</TableCell>
                    <TableCell>Harish Joshi</TableCell>
                    <TableCell>+91 6278195350</TableCell>
                    <TableCell>1 week ago</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-[#001D4A]">
                    <TableCell>Street Light - Sarwate Bus Stand</TableCell>
                    <TableCell>Infrastructure</TableCell>
                    <TableCell>Sarwate Bus Stand</TableCell>
                    <TableCell>Not Working</TableCell>
                    <TableCell>Harish Joshi</TableCell>
                    <TableCell>+91 6278195350</TableCell>
                    <TableCell>6 months ago</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-[#001D4A]">
                    <TableCell>Park Bench - Central Park</TableCell>
                    <TableCell>Amenities</TableCell>
                    <TableCell>Central Park, Main Area</TableCell>
                    <TableCell>Good</TableCell>
                    <TableCell>Harish Joshi</TableCell>
                    <TableCell>+91 6278195350</TableCell>
                    <TableCell>1 month ago</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-[#001D4A]">
                    <TableCell>Water Tank - Ward No. 61</TableCell>
                    <TableCell>Utilities</TableCell>
                    <TableCell>Ward No.61 , Residential Area</TableCell>
                    <TableCell>Good</TableCell>
                    <TableCell>Harish Joshi</TableCell>
                    <TableCell>+91 6278195350</TableCell>
                    <TableCell>2 weeks ago</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

function BuildingIcon(props) {
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
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  )
}


function FileTextIcon(props) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  )
}


function LayoutGridIcon(props) {
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
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  )
}


function LinechartChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
      >
      </ChartContainer>
    </div>
  )
}


function PackageIcon(props) {
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
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function SettingsIcon(props) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function WrenchIcon(props) {
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
