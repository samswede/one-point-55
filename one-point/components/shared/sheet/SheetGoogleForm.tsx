import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Scroll } from "lucide-react"

export function SheetGoogleForm() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        
          {/*
          I want to make this form responsive, but I'm not sure how to do it.

          I want to use className with tailwindcss to give the form a max height
           */}
          
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSeqymnsplI3MfVipP9Gdv7Taf7DakbmH6AyLGglvXt-X39esg/viewform?embedded=true" 
            className="w-full top-0 left-0"
            height="800"
            >
              Loading…
          </iframe>
        

      </SheetContent>
    </Sheet>
  )
}
