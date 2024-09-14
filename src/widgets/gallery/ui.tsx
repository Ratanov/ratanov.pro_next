import { FC, useState } from "react";
import MainLayout from "@/app/main-layout";
import styles from "./gallery.module.css";

interface GalleryItem {
  largeURL: string;
  thumbnailURL: string;
  width: number;
  height: number;
}

export interface GalleryProps {
  items: GalleryItem[];
}

const Gallery: FC<GalleryProps> = ({ items }) => {

  return (
    <MainLayout>
      <h2 className="text-center">Галерея</h2>
      <div className={styles.gallery}>
        {items.map((data, index) => {
          return (
            <img
              key={index}
              src={data.largeURL}
              alt="description"
              className={styles.gallery__item}
            />
          );
        })}
      </div>
    </MainLayout>
  );
};

export default Gallery;
