import Link from "next/link"

export default function Home() {
  return (
    <div className="bg-[#001D4A] h-[100vh]">
      <header className="py-4 px-6 bg-opacity-75 bg-black">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">User Help Portal</h1>
          <nav className="flex gap-4">
            <Link
              href="/campaigns"
              className="inline-flex h-9 items-center justify-center rounded-md bg-white text-black px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-opacity-75 hover:bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-opacity-50 disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Campaigns
            </Link>
          </nav>
        </div>
      </header>
    <main className="container mx-auto pt-[5vw] grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3 w-[90vw] h-[46vw] ">
      <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        <Link href="/chat-form-municipal-records" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <img src="/idaa.jpg" alt="Feature 1" width={300} height={400} className="h-64 w-full object-cover items-center" />
        <div className=" bg-[#022E64] p-2">
          <h3 className="text-lg font-semibold items-center text-center text-white  ">Indore Development Authority</h3>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        <Link href="/chat-form-municipal-records" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <img src="/WATER.png" alt="Feature 2" width={300} height={400} className="h-64 w-full object-cover" />
        <div className=" bg-[#022E64] p-2">
          <h3 className="text-lg font-semibold text-center text-white">Water Department</h3>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        <Link href="/chat-form-municipal-records" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <img src="/MUNICIPAL.png" alt="Feature 3" width={500} height={300} className="h-64 w-full object-cover" />
        <div className=" bg-[#022E64] p-2">
          <h3 className="text-lg font-semibold text-center text-white">Municipal Corporation</h3>
        </div>
      </div>
    
      <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        <Link href="/chat-form-municipal-records" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <img src="/custcare.jpg" alt="Feature 3" width={500} height={300} className="h-64 w-full object-cover" />
        <div className=" bg-[#022E64] p-2">
          <h3 className="text-lg font-semibold text-center text-white">Customer Care</h3>
        </div>
      </div>
      
    </main>
    </div>
  )
}
