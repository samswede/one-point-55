"use client"

import * as React from "react"
import Link from "next/link"

import Image from "next/image"

import { cn } from "@/lib/utils"
//import { Icons } from "@/components/icons"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import image from "@/public/assets/images/generated/wellness.webp"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Mission",
    href: "/about/mission",
    description:
      "Learn about our purpose.",
  },
  
  {
    title: "Team",
    href: "/about/team",
    description:
      "See who is behind the scenes."
  },
  
  {
    title: "Gallery",
    href: "/about/gallery",
    description:
      "View our past trips and experiences.",
  },
  {
    title: "Itineraries",
    href: "/about/itineraries",
    description: "Details for what to expect.",
  },
  
]

export function NavBarMenu() {
  return (
    <NavigationMenu className="opacity-95">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {
                    // if trip?.image is not empty, then render the Image component
                    // else, render nothing
                    (image) && (
                    <Image
                        src={image || ""}
                        alt=""
                        layout="fit"
                        objectFit="cover"
                        
                        className="object-cover rounded-lg"
                        
                    />
                    )
                  }
                    <div className="mb-2 mt-4 text-lg font-medium">
                      onepoint55
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      three word motto
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/#concept" title="The Concept">
                What is OnePoint55 about?
              </ListItem>
              <ListItem href="/" title="Upcoming Trips">
                Sign up for the next adventure
              </ListItem>
              <ListItem href="/#pasttrips" title="Past Trips">
                See where we have been before
              </ListItem>
              <ListItem href="/contact" title="Contact">
                Reach out to us
              </ListItem>
              <ListItem href="/#FAQ" title="FAQ">
                Answers to common questions
              </ListItem>

            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/impressum" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Impressum
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
