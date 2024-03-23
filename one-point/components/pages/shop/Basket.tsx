import React from "react"
import { useSelector } from "react-redux"
import { store, remove } from "@/store"

import { ProductItem } from "@/types/global"
import Image from "next/image"

const Basket = () => {
  const products = useSelector((state: ProductItem[]) => state)

  return (
    <div>
      <h2 className="text-xl font-semibold text-blue-600 mb-4">
        Shopping Basket
      </h2>
      <p className="mb-4">
        You have {products.filter(product => product.added).length} items in your basket
      </p>
      <div className="w-full bg-white">
        {products
          .filter(product => product.added)
          .map((product: ProductItem) => (
            <div key={product.id} className="flex items-start py-2 justify-between">
              <div className="flex items-center">
                <Image 
                  className="w-10 h-10 rounded-full" 
                  alt="Product" 
                  src={product.imageUrl}
                  width={40}
                  height={40}
                  />
                <div className="ml-4">
                  <p className="font-semibold">{product.title}</p>
                  <span className="text-sm">
                    ${product.price.toFixed(2)} — {product.description}
                  </span>
                </div>
              </div>
              <button
                className="p-2 rounded-full hover:bg-gray-200"
                aria-label="delete"
                onClick={() => {
                  store.dispatch(remove({ id: product.id }))
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        <div className="py-2 font-bold text-lg">
          Total: $
          {products
            .filter(product => product.added)
            .reduce((acc, current) => acc + current.price, 0)
            .toFixed(2)}
        </div>
      </div>
    </div>
  )
}

export { Basket }
