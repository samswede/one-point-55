
import React from 'react';

import {Card, CardHeader, CardBody, CardFooter, Image, Button, Link, Chip} from "@nextui-org/react";


type ProductCardProps = {
  title: string;
  description: string;
  stripeLink: string | undefined;
  image?: any;
  price: number;
  soldOut?: boolean;
};

const ProductCard: React.FC<ProductCardProps> = ({ 
  title, 
  description, 
  stripeLink,
  image,
  price,
  soldOut = false,
}) => {
  //w-full h-[300px] col-span-12 sm:col-span-5
  //w-full aspect-w-4 aspect-h-5 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3
  //w-full sm:w-96 md:w-80 lg:w-64 xl:w-72 h-auto p-4 col-span-12 sm:col-span-6 md:col-span-4
  //
  return (<>
  
    <Card 
      isPressable
      isFooterBlurred 
      className="w-full sm:w-80 md:w-80 lg:w-64 xl:w-72 h-auto col-span-12 sm:col-span-6 md:col-span-4">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">New</p>
        <h4 className="text-black font-medium text-2xl bg-white/20 backdrop-blur-sm rounded-sm">{title}</h4>
      </CardHeader>
      <Image
        removeWrapper
        isZoomed
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src={image}
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        {soldOut && (
          <>
          <div className="justify-between flex-row">
            <p className="text-black text-md">{`${price}.-`} CHF</p>
          </div>

          <Chip 
            color="warning"
            variant="dot"
            size="md">
            Sold Out
          </Chip>

          </>
        )}
        {!soldOut && (
          <>

          <div className="justify-between flex-row">
            <p className="text-black text-md">{`${price}.-`} CHF</p>
          </div>

          <Button 
              href={stripeLink}
              as={Link}
              color="primary"
              variant="solid">
              Buy
          </Button>

          <Chip 
            color="success"
            variant="dot"
            size="md">
            Available
          </Chip>
          
        </>
        )}

        
        
      </CardFooter>
    </Card>
  </>
  );
};

export default ProductCard;

