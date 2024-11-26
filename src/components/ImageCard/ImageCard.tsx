import React from "react";
import css from "./ImageCard.module.css";

interface ImageInfo {
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

interface ImageCardProps {
  image: ImageInfo;
  onOpenModal: (imgInfo: {
    regular: string;
    alt: string | null;
    likes: number;
    description: string | null;
    user: string | null;
  }) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onOpenModal }) => {
  const handleClick = () => {
    onOpenModal({
      regular: image.urls.regular,
      alt: image.alt_description,
      likes: image.likes,
      description: image.description,
      user: image.user.username,
    });
  };

  return (
    <div className={css.item}>
      <img
        className={css.img}
        onClick={handleClick}
        src={image.urls.small}
        alt={image.alt_description || "Image"}
      />
    </div>
  );
};

export default ImageCard;