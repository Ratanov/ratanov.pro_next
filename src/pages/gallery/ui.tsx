import Gallery from "../../widgets/gallery";
import galleryItems from "../../assets/json/galleryItems.json";

const GalleryPage = () => {
  return (
    <div>
      <Gallery items={ galleryItems } />
    </div>
  );
};

export default GalleryPage;
