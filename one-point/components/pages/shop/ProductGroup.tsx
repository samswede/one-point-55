"use client"

import React from 'react';
import ProductCard from './ProductCard'; // Adjust the import path as needed

import { ShopBlocksProducts } from '@/tina/__generated__/types';

const ProductGroup: React.FC<ShopBlocksProducts> = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {props?.products?.map((product: any, key: any) => (
        <ProductCard
          key={key}
          title={product?.title}
          description={product?.description}
          stripeLink={product?.stripeLink}
          image={product?.image}
          price={product?.price}
          soldOut={product?.soldOut}
        />
      ))}
    </div>
  );
};

export default ProductGroup;
