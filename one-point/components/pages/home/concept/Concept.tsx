import Link from "next/link"
import { HomeBlocksContent } from "@/tina/__generated__/types"

import { tinaField } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { Button } from "@/components/ui/button"


export function Concept(props: HomeBlocksContent) {
  return (
    <section className="relative overflow-hidden">

      <div className="relative flex flex-col items-center gap-2 py-24">

        <div
          className="px-4 py-8 text-center"
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
              h2: (props) => (
                <h2
                  className="mx-auto text-4xl font-extrabold leading-tight tracking-tighter text-primary md:text-6xl"
                  {...props}
                />
              ),
              h3: (props) => (
                <h3
                  className="mx-auto text-3xl font-extrabold leading-tight tracking-tighter text-primary md:text-5xl"
                  {...props}
                />
              ),
              h4: (props) => (
                <h4
                  className="mx-auto text-2xl font-extrabold leading-tight tracking-tighter text-primary md:text-4xl"
                  {...props}
                />
              ),
              h5: (props) => (
                <h5
                  className="mx-auto text-xl font-extrabold leading-tight tracking-tighter text-primary md:text-3xl"
                  {...props}
                />
              ),
              bold: (props) => (
                <span
                  className="bg-gradient-to-b from-blue-400 to-green-600 bg-clip-text text-transparent"
                  {...props}
                />
              ),
              // Customizing the italic component with a different color gradient
              em: (props) => (
                <span
                  className="bg-gradient-to-r from-green-300 to-blue-500 bg-clip-text text-transparent"
                  {...props}
                />
              ),
              /*
              I want to make it so that if something is both italic and bold, it will be a different color
              */

              
              p: (props) => (
                <p
                  className="mx-auto mt-8 max-w-[700px] px-2 text-center text-xl text-muted-foreground"
                  {...props}
                />
              ),

              
            }}
          />
        </div>
        <div className="flex gap-5 py-12">
          {props.links?.map((link) => {
            switch (link?.style) {
              case "dark": {
                return (
                  <Link
                    data-tina-field={tinaField(link, "label")}
                    key={link.label}
                    //key={"a"}
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
                    key={link.label}
                    //key={"b"}
                    href={link?.link || ""}
                  >
                    <Button size="lg" variant={"ghost"}>
                      {link.label}
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
