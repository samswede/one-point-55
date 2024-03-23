"use client"

import React from "react";
import { Provider } from "react-redux";
import { Basket } from "@/components/pages/shop/Basket";
import { Product } from "@/components/pages/shop/Product";
import { store } from "@/store";

const ShoppingBasket = () => {
  return (
    <Provider store={store}>
      <div className="container mx-auto max-w-lg px-4">
        <div className="mt-20 mb-20">
          <Product />
        </div>
        <div className="mt-20 mb-20">
          <Basket />
        </div>
      </div>
    </Provider>
  );
};

export default ShoppingBasket;
