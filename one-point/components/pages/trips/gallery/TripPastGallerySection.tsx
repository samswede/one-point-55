"use client"

import { TrippastBlocksGallery } from "@/tina/__generated__/types"

import { Gallery } from "react-grid-gallery";
import CustomGallery from "@/components/shared/gallery/CustomGallery";


export function GallerySection(props: TrippastBlocksGallery) {
  return (
    <section className="relative overflow-hidden">

    {/* 
      <Gallery images={props.items || []} />
      
    */}
      <CustomGallery images={props.items || []} />
    
    </section>
  )
}
