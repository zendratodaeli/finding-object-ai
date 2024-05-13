import { Button } from "@/components/ui/button"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className=" p-4 shadow">
      <div className=" max-w-7xl m-auto flex flex-wrap gap-3 items-center justify-between">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/logo.svg"
            alt="logo"
            width={20}
            height={20}
          />
          <span className=" font-bold">FO - AI</span>
        </Link>
        <div className=" flex items-center gap-2">
          <SignedOut>
            <SignInButton />
          </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
          </SignedIn>

          <Button>
            <Plus size={20} className="mr-2"/>
            Add Note
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
