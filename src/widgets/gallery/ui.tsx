"use client";
import { FC, useEffect, useState } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import styles from "./gallery.module.css";

export interface GalleryImage {
  width: number;
  height: number;
  largeURL: string;
  thumbnailURL: string;
}

interface GalleryProps {
  galleryId: string;
  images: GalleryImage[];
}

const Gallery: FC<GalleryProps> = ({ galleryId, images }) => {
  useEffect(() => {
    let lightbox: PhotoSwipeLightbox | null = new PhotoSwipeLightbox({
      gallery: `#${galleryId}`,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox?.destroy();
      lightbox = null;
    };
  }, [galleryId]);

  return (
    <div className="gallery" id={galleryId}>
      {images.map((img, i) => (
        <a
          key={`${galleryId}-${i}`}
          href={img.largeURL}
          data-pswp-width={img.width}
          data-pswp-height={img.height}
          className="gallery__item"
          target="_blank"
          rel="noreferrer"
        >
          <img src={img.thumbnailURL} alt="" />
        </a>
      ))}
    </div>
  );
};

export default Gallery;
