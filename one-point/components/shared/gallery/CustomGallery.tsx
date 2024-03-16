import React, { useState } from 'react';
import Image from 'next/image';
import { Dialog } from '@/components/ui/dialog'; // Adjust the import based on your actual library

interface ImageItem {
  src: string | null;
  width: number;
  height: number;
  caption: string;
}

interface CustomGalleryProps {
  images: ImageItem[] | any[];
}

const CustomGallery: React.FC<CustomGalleryProps> = ({ images }) => {

    const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleImageClick = (image: ImageItem) => {
        setSelectedImage(image);
        setIsDialogOpen(true);
    };

    return (
    
      <div className="custom-gallery" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px' }}>
        {images.map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => handleImageClick(image)} style={{ width: '100%', position: 'relative', paddingBottom: '100%' }}>
            {image.src && (
              <Image src={image.src} alt={image.caption} layout="fill" objectFit="cover" />
            )}
            {!image.src && (
              <div className="placeholder" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
                <span>No image available</span>
              </div>
            )}
            <div className="caption" style={{ position: 'absolute', bottom: 0, width: '100%', textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#fff' }}>{image.caption}</div>
          </div>
        ))}
      </div>


    );
  };

export default CustomGallery;
