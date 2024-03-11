
import { TrippastBlocksGallery } from "@/tina/__generated__/types"

import { Gallery } from "react-grid-gallery";

export function GallerySection(props: TrippastBlocksGallery) {
  return (
    <section className="relative overflow-hidden">

      <Gallery images={props.items || []} />
      
    </section>
  )
}
