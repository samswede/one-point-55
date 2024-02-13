import Link from "next/link"
import { TripupcomingBlocksHero } from "@/tina/__generated__/types"
import { ArrowRight } from "lucide-react"
import { tinaField } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { Button } from "@/components/ui/button"
//import { IconList } from "@/components/icons"

export function TripUpcomingHero(props: TripupcomingBlocksHero) {
  return (
    <section className="relative overflow-hidden">

      <div className="relative flex flex-col items-center gap-2 py-24">
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted

          src={props?.backgroundVideo || "public/assets/videos/ibiza/waves_drone.mp4"}
          poster={props?.backgroundFallbackImage || ""}
          />

        <div
          className="px-4 py-8 text-center z-[1]"
          data-tina-field={tinaField(props, "message")}
        >
          <TinaMarkdown
            content={props.message}
            components={{
              h1: (props) => (
                <h1
                  className="mx-auto text-5xl font-extrabold leading-tight tracking-tighter text-primary md:text-7xl"
                  {...props}
                />
              ),
              bold: (props) => (
                <span
                  className="bg-gradient-to-b from-blue-300 to-pink-600 bg-clip-text text-transparent"
                  {...props}
                />
              ),
              p: (props) => (
                <p
                  className="mx-auto mt-8 max-w-[700px] px-2 text-center text-xl text-muted-foreground"
                  {...props}
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-5 py-12 z-[1]">
          {props.links?.map((link) => {
            switch (link?.style) {
              case "dark": {
                return (
                  <Link
                    data-tina-field={tinaField(link, "label")}
                    // key={link.label}
                    key={"a"}
                    href={link.link || ""}
                  >
                    <Button size="lg">{link.label}</Button>
                  </Link>
                )
              }
              case "light": {
                return (
                  <Link
                    data-tina-field={tinaField(link, "label")}
                    // key={link.label}
                    key={"b"}
                    href={link?.link || ""}
                  >
                    <Button size="lg" variant={"ghost"}>
                      {link.label}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                )
              }
            }
          })}
        </div>
      </div>
    </section>
  )
}
