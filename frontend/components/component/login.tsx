import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Login() {
  return (
    <div className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2">
      <div className="relative hidden h-full w-full bg-cover bg-center items-center md:block">
        <img src="/MUNICIPAL.png" alt="Background" height={400} width={700} className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/50" />
      </div>
      <div className="flex items-center justify-center p-6 md:p-12 bg-[#001D4A]">
        <div className="w-full max-w-md space-y-6 ">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white">Welcome back!</h1>
            <p className="text-muted-foreground text-white">Enter your credentials to access your account.</p>
          </div>
          <Tabs defaultValue="login" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login" className="bg-[#045CC8] mr-2 hover:bg-white">Login</TabsTrigger>
              <TabsTrigger value="register" className="bg-[#045CC8] hover:bg-white">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email " className="text-white">Email</Label>
                  <Input id="email" type="email" placeholder="m@example.com" required />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-white">Password</Label>
                    <Link
                      href="#"
                      className="text-sm font-medium underline underline-offset-4 hover:text-primary text-white"
                      prefetch={false}
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full bg-[#045CC8] hover:bg-white">
                  Sign in
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="register">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name " className="text-white">Name</Label>
                  <Input id="name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input id="email" type="email" placeholder="m@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white">Password</Label>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full bg-[#045CC8] hover:bg-white">
                  Create account
                </Button>
              </form>
            </TabsContent>
          </Tabs>
          <div className="text-center text-sm text-muted-foreground text-gray-300">
             
            <Link href="#" className="  hover:text-primary text-gray-300" prefetch={false}>
            By signing in, you agree to our Terms of Service and Privacy Policy
            </Link>
           
            
            .
          </div>
        </div>
      </div>
    </div>
  )
}
