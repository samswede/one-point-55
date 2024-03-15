import React from 'react';

import Image from "next/image"

import { Badge } from "@/components/ui/badge"

import PresetColorCircle from "@/components/svg/circle/PresetColorCircle"

import TextMD from '@/components/shared/text/TextMD';


type TeamCardProps = {
  image: any;
  description: any;
  badges?: Array<{ badge?: string | null; description?: string | null } | null> | null;
  backgroundColor?: string | null;
  specialStyle?: string | null;
  specialColor?: string | null;
};

const TeamCard: React.FC<TeamCardProps> = ({ 
     
    image, 
    description, 
    badges,
    backgroundColor="bg-gradient-to-b from-black to-purple-600",
    specialColor,
    specialStyle="circle"
  
    }) => {
  return (
    <div className={`relative p-4 rounded-lg justify-center ${backgroundColor}`}>
      <div className={`absolute inset-0 z-[-1] rounded-lg overflow-hidden`}>
        <PresetColorCircle className="w-full h-full" colorName={specialColor} />
      </div>

      <div className="p-2 rounded-lg">
        {
            // if trip?.image is not empty, then render the Image component
            // else, render nothing
            (image) && (
            <Image
                src={image || ""}
                alt=""
                layout="fill"
                objectFit="cover"
                
                className="object-cover rounded-lg"
                
            />
            )
        }
            
      </div>

      <div className="p-4 bg-black/30 backdrop-blur-md rounded-lg">
  
        <TextMD 
            content={description}
            headerColor='text-secondary'
            boldColor = "bg-gold-gradient"
            pClassName = "mt-8 max-w-[700px] px-2 text-left text-sm"
            pColor = "text-secondary-foreground"
            />
      </div>

      <div className="relative p-4 rounded-lg justify-center">
        {badges?.map((item, index) => (
          <Badge key={index} variant="destructive" color="secondary">
            {item?.badge}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
