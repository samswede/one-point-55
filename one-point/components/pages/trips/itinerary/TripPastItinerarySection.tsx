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

import TextMD from '@/components/shared/text/TextMD';

// Import background svgs

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
        
        
        <div className="flex-vertical gap-5 py-12">
          
          <div
            className="px-4 py-8 text-center z-[1] bg-black/30 backdrop-blur-md"
            data-tina-field={tinaField(props, "carouselTitle")}
            >

            <TextMD 
              content={props.carouselTitle}
              headerColor= "text-secondary"
              boldColor = "bg-gold-gradient"
              pClassName = "mt-8 max-w-[700px] px-2 text-left text-sm"
              pColor = "text-primary-foreground"

            />
          </div>
          

          <div>
            {
            
            <video 
              className="absolute bottom-0 left-0  h-full object-cover z-[-1]"
              autoPlay
              loop
              muted
              playsInline // required for iOS

              src={props?.carouselBackgroundVideo || "public/assets/videos/ibiza/waves_drone.mp4"}
              poster={props?.carouselBackgroundFallbackImage || ""}

              />

            }
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
                              specialStyle={item?.specialStyle}
                              specialColor={item?.specialColor}
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
                              specialStyle={item?.specialStyle}
                              specialColor={item?.specialColor}
                            />

                        </SwiperSlide>
                    ))}
                  </SwiperCarousel>
                  );

                case 'click':
                  return (
                    <Carousel className="w-full max-w-xl rounded-lg">
                      <CarouselContent className="rounded-lg">
                        {props?.itineraryCarousel?.map((item, index) => (
                          <CarouselItem key={index} className="rounded-lg md:basis-2/3 lg:basis-1/2">
                            
                            <ItineraryCard 
                              header={item?.header}
                              description={item?.description}
                              badges={item?.badges}
                              backgroundColor={item?.backgroundColor}
                              specialStyle={item?.specialStyle}
                              specialColor={item?.specialColor}
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
