import React from 'react';

import { Badge } from "@/components/ui/badge"

import PresetColorCircle from "@/components/svg/circle/PresetColorCircle"

import TextMD from '@/components/shared/text/TextMD';

type ItineraryCardProps = {
  header: any;
  description: any;
  badges?: Array<{ badge?: string | null; description?: string | null } | null> | null;
  backgroundColor?: string | null;
  specialStyle?: string | null;
  specialColor?: string | null;
};

const ItineraryCard: React.FC<ItineraryCardProps> = ({ 
     
    header, 
    description, 
    badges,
    backgroundColor="bg-gradient-to-b from-black to-purple-600",
    specialColor,
    specialStyle="circle"
  
    }) => {
  return (
    <div className={`relative p-4 rounded-lg justify-center `}>
      <div className={`absolute inset-0 rounded-lg overflow-hidden z-[-1] ${backgroundColor}`}>
        <PresetColorCircle className="w-full h-full" colorName={specialColor} />
      </div>

      <div className="p-2 rounded-lg z-[1]">
    
          <TextMD 
            content={header}
            headerColor='text-primary-foreground'
            boldColor = "bg-gradient-to-b from-primary-foreground to-yellow-200" //bg-gradient-to-b from-yellow-400 to-red-600
            pClassName = "mt-8 max-w-[700px] px-2 text-left text-sm"
            pColor = "text-primary-foreground"
            />
            
      </div>

      <div className="p-4 bg-black/60 backdrop-blur-md rounded-lg z-[1]">
  
        <TextMD 
            content={description}
            headerColor='text-secondary'
            boldColor = "bg-gold-gradient"
            pClassName = "mt-8 max-w-[700px] px-2 text-left text-sm"
            pColor = "text-primary-foreground"
            />
      </div>

      <div className="relative p-4 rounded-lg justify-center z-[1]">
        {badges?.map((item, index) => (
          <Badge key={index} variant="destructive" color="secondary">
            {item?.badge}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default ItineraryCard;
