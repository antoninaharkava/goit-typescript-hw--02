import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface ImageInfo {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string | null;
  description: string | null;
  user: {
    username: string;
  };
  likes: number;
}

interface ImageGalleryProps {
  images: ImageInfo[];
  onOpenModal: (imgInfo: {
    regular: string;
    alt: string | null;
    likes: number;
    description: string | null;
    user: string | null;
  }) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onOpenModal }) => {
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onOpenModal={onOpenModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
