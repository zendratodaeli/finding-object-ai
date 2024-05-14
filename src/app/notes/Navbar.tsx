"use client"

import AddNoteDialog from "@/components/AddNoteDialog"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
  const [showAddNoteDialog, setShowAddNoteDialog] = useState(false);

  return (
    <>
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
            <ThemeToggle/>
            <Button onClick={() => setShowAddNoteDialog(true)}>
              <Plus size={20} className="mr-2"/>
              Add Note
            </Button>
            <SignedOut>
              <SignInButton />
            </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </div>
      <AddNoteDialog open={showAddNoteDialog} setOpen={setShowAddNoteDialog} />
    </>
  )
}

export default Navbar
