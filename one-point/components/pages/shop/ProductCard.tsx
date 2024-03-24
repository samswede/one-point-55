const ProductItems = [
    {
        title: 'Cap',
        description: 'Product description goes here',
        image: '/assets/images/shop/1.jpg',
        price: 59,
        stripeLink: '/shop/1'
    },
    {
        title: 'Sweater',
        description: 'Product description goes here',
        image: '/assets/images/shop/4.jpg',
        price: 99,
        stripeLink: '/shop/2'
    },
    {
        title: 'Shirt',
        description: 'Product description goes here',
        image: '/assets/images/shop/8.jpg',
        price: 79,
        stripeLink: '/shop/3'
    },
    {
        title: 'Socks',
        description: 'Product description goes here',
        image: '/assets/images/shop/7.jpg',
        price: 19,
        stripeLink: '/shop/6'
    },
]


import React from 'react';

import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"

import TextMD from '@/components/shared/text/TextMD';

type ProductCardProps = {
  title: any;
  description: any;
  stripeLink: string | null | undefined;
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
  return (
    <div className={`relative p-4 rounded-lg justify-center ${soldOut ? 'bg-gray-500' : 'bg-black/60'} backdrop-blur-lg`}>
      {soldOut && (
        <div className="absolute inset-0 bg-gray-500 opacity-75 z-10 rounded-lg"></div>
      )}
      <div className={`absolute inset-0 z-[-1] rounded-lg ${soldOut ? 'grayscale' : ''}`}>
        {image && (
          <Image
            src={image}
            alt=""
            width={500}
            height={500}
            objectFit="cover"
            className="object-cover rounded-lg"
          />
        )}
      </div>
      <div className="p-4 rounded-lg">
        <TextMD 
          content={title}
          headerColor='text-primary'
          boldColor="bg-gradient-to-b from-primary-foreground to-secondary"
          pClassName="mt-8 max-w-[700px] px-2 text-left text-sm"
          pColor="text-primary-foreground"
        />
      </div>
      <div className="p-4 bg-black/30 backdrop-blur-md rounded-lg">
        <TextMD 
          content={description}
          headerColor='text-secondary'
          boldColor="bg-gradient-to-b from-primary-foreground to-secondary"
          pClassName="mt-8 max-w-[700px] px-2 text-left text-sm"
          pColor="text-primary-foreground"
        />
      </div>
      {!soldOut && (
        <div className="relative p-4 rounded-lg flex justify-center gap-3">
          <Link href={stripeLink || "#"}>
            <Button>Purchase</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductCard;

