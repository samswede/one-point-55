import Link from "next/link"
import Image from "next/image"

import { HomeBlocksPasttrips } from "@/tina/__generated__/types"

import { tinaField } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"



import { AspectRatio } from "@/components/ui/aspect-ratio"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  } from "@/components/ui/card"

import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  } from "@/components/ui/carousel"


export function PastTripsSection(props: HomeBlocksPasttrips) {
  return (
    <section className="relative overflow-hidden">

      <div className="relative flex flex-col items-center gap-2 py-24">
        <video 
          className="absolute top-0 left-0 z-[-1] w-full h-full object-cover"
          autoPlay
          loop
          muted

          src={require('@/public/assets/videos/waves_drone.mp4')}
          />

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
        <div className="flex gap-5 py-12">
          
        {
          (() => {
            switch (props?.style || "swiper") {
              case "swiper": {
                return (
                  <Carousel className="w-full max-w-xs">
                    <CarouselContent>
                      {props?.tripscarousel?.map((trip, index) => (
                        <CarouselItem key={index}>

                          <Card>
                            <CardHeader>
                              <AspectRatio ratio={16 / 9}>
                                <Image
                                  src={trip?.image || ""}
                                  alt=""
                                  layout="fill"
                                  objectFit="cover"
                                />
                              </AspectRatio>
                            </CardHeader>
                            <CardContent>
                              <CardTitle>{trip?.title || ""}</CardTitle>
                              <CardDescription>
                                {trip?.text || ""}
                              </CardDescription>
                            </CardContent>
                            <CardFooter>
                              <Link href={trip?.link || ""}>
                                
                                <Button>View Trip</Button>
                                
                              </Link>
                            </CardFooter>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                );
              }
              
              case "cards": {
                return (
                  <Carousel className="w-full max-w-xs">
                    <CarouselContent>
                      {props?.tripscarousel?.map((trip, index) => (
                        <CarouselItem key={index}>
                          <Card key={index}>
                            <CardHeader>
                              <AspectRatio ratio={16 / 9}>
                                <Image
                                  src={trip?.image || ""}
                                  alt=""
                                  layout="fill"
                                  objectFit="cover"
                                />
                              </AspectRatio>
                            </CardHeader>
                            <CardContent>
                              <CardTitle>Card {index + 1}</CardTitle>
                              <CardDescription>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Morbi accumsan, justo in tincidunt luctus, odio libero 
                                facilisis mi, nec faucibus turpis nunc nec elit.
                              </CardDescription>
                            </CardContent>
                            <CardFooter>
                              <Link href="/trips">
                                
                                <Button>View Trip</Button>
                                
                              </Link>
                            </CardFooter>
                          </Card>
                        </CarouselItem>
                      ))}
                      
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>

                );
              }

              default: {
                return null;
              }
            }
          })()
        }
          
        </div>
      </div>
    </section>
  )
}
