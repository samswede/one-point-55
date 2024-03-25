"use client"

import React from 'react';
import ProductCard from './ProductCard'; // Adjust the import path as needed

import { ShopBlocksProducts } from '@/tina/__generated__/types';

const ProductGroup: React.FC<ShopBlocksProducts> = (props) => {
  //grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4
  //grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4
  //grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 lg:gap-6
  //mx-auto max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4
  //flex flex-wrap justify-center gap-4
  return (
    <div className="mx-auto flex flex-wrap justify-center gap-4">
      {props?.products?.map((item: any, key: any) => (
        <ProductCard
          key={key}
          title={item?.title}
          description={item?.description}
          stripeLink={item?.stripeLink}
          image={item?.image}
          price={item?.price}
          soldOut={item?.soldOut}
        />
      ))}
    </div>
  );
};

export default ProductGroup;
