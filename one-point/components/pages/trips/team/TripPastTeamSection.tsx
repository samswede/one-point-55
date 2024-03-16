import { TrippastBlocksTeam } from "@/tina/__generated__/types"

import { tinaField } from "tinacms/dist/react"

import { Badge } from "@/components/ui/badge"


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

import TeamCard from "@/components/pages/trips/team/TeamCard"

export function TripPastTeamSection(props: TrippastBlocksTeam) {

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

          <TextMD 
            content={props.message}
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
        <div className="flex flex-col xl:flex-row py-12 px-16">
          
          <div
            className="px-4 py-8 text-center z-[1] bg-accent backdrop-blur-md rounded-lg"
            data-tina-field={tinaField(props, "carouselTitle")}
            >

            <TextMD 
              content={props.carouselTitle}
              headerColor= "text-primary"
              boldColor = "bg-gold-gradient"
              pClassName = "mt-8 max-w-[700px] px-2 text-left text-sm"
              pColor = "text-primary-foreground"

            />
          </div>
          

          <div>
            
            <div
              className="px-4 py-8 text-center z-[1] w-full rounded-lg"
              
              >
            { (() => {
              switch (props.carouselStyle) {
                case 'cards':
                  return (
                  <CardsCarousel>
                    {props?.teamCarousel?.map((item, index) => (
                        <SwiperSlide
                          key={index}
                          className="w-full max-w-xs rounded-lg"
                        >
                            <TeamCard 
                              image={item?.image}
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
                    {props?.teamCarousel?.map((item, index) => (
                        <SwiperSlide
                          key={index}
                          className="w-full max-w-xs rounded-lg"
                        >
                            <TeamCard 
                              image={item?.image}
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
                    <Carousel className="w-full max-w-xs rounded-lg">
                      <CarouselContent className="rounded-lg">
                        {props?.teamCarousel?.map((item, index) => (
                          <CarouselItem key={index} className="rounded-lg">
                            
                            <TeamCard 
                              image={item?.image}
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
