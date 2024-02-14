import Link from "next/link"
import Image from "next/image"

import { TrippastBlocksItinerary } from "@/tina/__generated__/types"

import { tinaField } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"



import { AspectRatio } from "@/components/ui/aspect-ratio"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  } from "@/components/ui/card"

import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  } from "@/components/ui/carousel"

import CardsCarousel from "@/components/shared/carousel/CardsCarousel"
import SwiperCarousel from "@/components/shared/carousel/SwiperCarousel"
import { SwiperSlide } from 'swiper/react';

// Import background svgs
import PresetColorCircle from "@/components/svg/circle/PresetColorCircle"

import ItineraryCard from "@/components/pages/trips/itinerary/ItineraryCard"

export function TripPastItinerarySection(props: TrippastBlocksItinerary) {

  const exampleColorStops = [
    { offset: "15%", color: "#0057B8", opacity: "0.5" },
    { offset: "75%", color: "hsl(240, 100%, 50%)", opacity: "1" },
    { offset: "100%", color: "#00BFFF", opacity: "1" }
  ];
  

  return (
    <section className="relative overflow-hidden" id="itinerary">

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
          <div
            id="badges"
            className="flex gap-5 py-12"
            >
            {props?.badges?.map((item, index) => (
              <Badge key={index} variant="destructive" color="secondary">
                {item?.badge}
              </Badge>
            ))
            }

          </div>
        </div>
        <div className="flex-vertical gap-5 py-12">
          
          <div
            className="px-4 py-8 text-center z-[1] bg-gradient-to-b from-green-600 to-secondary rounded-lg"
            data-tina-field={tinaField(props, "carouselTitle")}
            >
            <TinaMarkdown
              content={props.carouselTitle}
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
                    className="mx-auto text-2xl font-extrabold leading-tight tracking-tighter text-secondary md:text-4xl text-center"
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
                    className="bg-gradient-to-b from-yellow-400 to-red-600 bg-clip-text text-transparent"
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
                    className="mx-auto mt-8 max-w-[700px] px-2 text-left text-sm text-primary-foreground"
                    {...props}
                  />
                ),

              }}
            />
          </div>
          

          <div>
            <video 
              className="absolute bottom-0 left-0 w-full object-cover z-[-1]"
              autoPlay
              loop
              muted
              playsInline // required for iOS

              src={props?.carouselBackgroundVideo || "public/assets/videos/ibiza/waves_drone.mp4"}
              poster={props?.carouselBackgroundFallbackImage || ""}

              />

            <div
              className="px-4 py-8 text-center z-[1] w-full rounded-lg"
              
              >
            { (() => {
              switch (props.carouselStyle) {
                case 'cards':
                  return (
                  <CardsCarousel>
                    {props?.itineraryCarousel?.map((item, index) => (
                        <SwiperSlide
                          key={index}
                          className="w-full max-w-xs rounded-lg"
                        >
                            <ItineraryCard 
                              header={item?.header}
                              description={item?.description}
                              badges={item?.badges}
                              backgroundColor={item?.backgroundColor}
                            />

                        </SwiperSlide>
                    ))}
                  </CardsCarousel>
                  );
                
                case 'flow':
                  return (
                    <SwiperCarousel>
                    {props?.itineraryCarousel?.map((item, index) => (
                        <SwiperSlide
                          key={index}
                          className="w-full max-w-xs rounded-lg"
                        >
                            <ItineraryCard 
                              header={item?.header}
                              description={item?.description}
                              badges={item?.badges}
                              backgroundColor={item?.backgroundColor}
                            />

                        </SwiperSlide>
                    ))}
                  </SwiperCarousel>
                  );

                case 'click':
                  return (
                    <Carousel className="w-full max-w-xs rounded-lg">
                      <CarouselContent className="rounded-lg">
                        {props?.itineraryCarousel?.map((item, index) => (
                          <CarouselItem key={index} className="rounded-lg">
                            
                            <ItineraryCard 
                              header={item?.header}
                              description={item?.description}
                              badges={item?.badges}
                              backgroundColor={item?.backgroundColor}
                            />
                            
                          </CarouselItem>
                        )
                        )
                        }
                        
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  );
                }

                })()
              }
                    

                
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
  )
}
