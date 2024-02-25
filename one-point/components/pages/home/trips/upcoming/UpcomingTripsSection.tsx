import Link from "next/link"
import Image from "next/image"

import { HomeBlocksUpcomingtrips } from "@/tina/__generated__/types"

import { tinaField } from "tinacms/dist/react"

import { TinaMarkdown } from "tinacms/dist/rich-text"
import TextMD from '@/components/shared/text/TextMD';



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

import { SheetGoogleForm } from "@/components/shared/sheet/SheetGoogleForm";



export function UpcomingTripsSection(props: HomeBlocksUpcomingtrips) {


  return (
    <section className="relative overflow-hidden" id="upcomingtrips">

      <div className="relative flex flex-col items-center gap-2 py-24">
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline

          src={props?.backgroundVideo || "public/assets/videos/ibiza/waves_drone.mp4"}
          poster={props?.backgroundFallbackImage || ""}
          >
  
        </video>


        <div
          className="px-4 py-8 text-center z-[1]"
          data-tina-field={tinaField(props, "message")}
        >

          <TextMD 
            content={props.message}
            headerColor='text-primary'
            boldColor = "bg-gradient-to-b from-blue-300 to-pink-600"
            pClassName = "mt-8 max-w-[700px] px-2 text-left text-sm"
            pColor = "text-primary-foreground"
            />
          
        </div>
        <div className="flex gap-5 py-12">
          
        {
          (() => {
            switch (props?.style || "swiper") {
              case "swiper": {
                return (
                  <Carousel className="w-full max-w-xs z-[1]">
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
                                      
                                      className="object-cover"
                                      
                                    />
                                  </AspectRatio>
                                </CardHeader>
                                <CardContent
                                  className="bg-black/30 backdrop-blur-lg p-4 rounded-lg"
                                  >
                                    
                                    <TextMD 
                                      content={trip?.description}
                                      headerColor='text-secondary'
                                      boldColor = "bg-gradient-to-b from-yellow-400 to-red-600"
                                      pClassName = "mt-8 max-w-[700px] px-2 text-left text-sm"
                                      pColor = "text-secondary-foreground"
                                      />

                                </CardContent>
                                <CardFooter>
                                  <Link href={trip?.link || ""}>
                                    
                                    <Button>Learn More</Button>
                                    
                                  </Link>

                                  <SheetGoogleForm {...trip?.sheetGoogleForm}/>
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
                          
                          <div className="relative p-4 rounded-lg justify-center">
                              <div className="absolute inset-0 z-[-1] rounded-lg">
                                
                                <Image
                                      src={trip?.image || ""}
                                      alt=""
                                      layout="fill"
                                      objectFit="cover"
                                      
                                      className="object-cover rounded-lg"
                                      
                                    />

                              </div>
                              <div className="p-4 rounded-lg">
                                  <TextMD 
                                      content={trip?.header}
                                      headerColor='text-primary'
                                      boldColor = "bg-gradient-to-b from-yellow-400 to-red-600"
                                      pClassName = "mt-8 max-w-[700px] px-2 text-left text-sm"
                                      pColor = "text-primary-foreground"
                                      />

                              </div>
                              <div className="p-4 bg-white/30 backdrop-blur-md rounded-lg">
                                  <TextMD 
                                      content={trip?.description}
                                      headerColor='text-secondary'
                                      boldColor = "bg-gradient-to-b from-blue-300 to-green-400"
                                      pClassName = "mt-8 max-w-[700px] px-2 text-left text-sm"
                                      pColor = "text-secondary-foreground"
                                      />
                                  
                              </div>
                              <div className="relative p-4 rounded-lg justify-center">
                                  <Link href={trip?.link || ""}>
                                    
                                    <Button>View Trip</Button>
                                    
                                  </Link>
                                  <SheetGoogleForm {...trip?.sheetGoogleForm}/>
                              </div>
                          </div>
                          

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
