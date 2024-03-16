
import { TripupcomingBlocksGallery } from "@/tina/__generated__/types"

import { tinaField } from "tinacms/dist/react"

import { Gallery } from "react-grid-gallery";
import CustomGallery from "@/components/shared/gallery/CustomGallery";

export function GallerySection(props: TripupcomingBlocksGallery) {
  return (
    <section className="relative overflow-hidden">

      {/* 
      <Gallery images={props.items || []} />
    */}
      <CustomGallery images={props.items || []} />
      
    </section>
  )
}
