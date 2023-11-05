import { AnimatePresence, motion } from "framer-motion";
import { useImageGalleryActions } from "../../../hooks/useImageGalleryActions";
import { useImageGalleryFunctions } from "../../../hooks/useImageGalleryFunctions";
import { useImages } from "../../../context/ImageContext";
import ImageItem from "./ImageItem";
import AddImageButton from "../Buttons/AddImageButton";

export const GridLayoutGallery = () => {
  const { images } = useImages();
  const { handleDragStart, handleDrop } = useImageGalleryFunctions();
  const { handleImageClick } = useImageGalleryActions();

  return (
    <motion.div
      layout
      initial={{ x: 2000 }}
      animate={{ x: 0 }}
      transition={{ ease: "backOut", delay: 0.4, duration: 0.9 }}
      className="grid grid-cols-2 gap-2 mb-5 sm:grid-cols-3 md:grid-cols-4"
    >
      <AnimatePresence>
        {images.map((image, index) => (
          <ImageItem
            key={image.id}
            image={image}
            index={index}
            handleImageClick={handleImageClick}
            handleDrop={handleDrop}
            handleDragStart={handleDragStart}
          />
        ))}
      </AnimatePresence>
      <AddImageButton />
    </motion.div>
  );
};
