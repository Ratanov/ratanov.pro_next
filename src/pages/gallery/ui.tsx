import Gallery from "../../widgets/gallery";
import MainLayout from "@/app/main-layout";
import { images } from "./img-data";

const GalleryPage = () => {
  return (
    <MainLayout>
      <h2 className="text-center">Галерея</h2>
      <Gallery galleryId="dis-gallery" images={images} />
    </MainLayout>
  );
};

export default GalleryPage;
