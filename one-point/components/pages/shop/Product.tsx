import React from "react";
import { useSelector } from "react-redux";
import { store, add } from "@/store";

import { ProductItem } from "@/types/global"

const Product = () => {
  const products = useSelector((state: ProductItem[]) => state);

  return (
    <div className="flex flex-wrap min-w-[300px] w-full">
      {products.map((product: ProductItem) => (
        <button
          key={product.id}
          className={`relative h-[400px] m-5 w-[45%] sm:w-full sm:h-[300px] hover:z-10 ${
            product.added ? "opacity-50 cursor-not-allowed" : "hover:border-4 hover:border-current"
          }`}
          onClick={() => {
            if (!product.added) {
              store.dispatch(add(product));
            }
          }}
          style={{
            backgroundImage: `url(${product.imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="absolute inset-0 bg-black opacity-20 hover:opacity-5 transition-opacity"></span>
          <span className="absolute inset-0 flex items-center justify-center text-white p-2">
            <span className="relative text-lg">{product.title}</span>
            <span className="absolute bottom-[-2px] left-[calc(50%-9px)] h-[3px] w-[18px] bg-white"></span>
          </span>
        </button>
      ))}
    </div>
  );
};

export { Product };
