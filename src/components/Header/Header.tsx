import { motion } from "framer-motion";
import { useImages } from "../../context/ImageContext";
import { useImageGalleryActions } from "../../hooks/useImageGalleryActions";

const Header = () => {
  const { images } = useImages();
  const { handleDeleteClick } = useImageGalleryActions();

  const numberOfSelectedImages: number = images.filter(
    (image) => image.isSelected
  ).length;

  return (
    <motion.div
      initial={{ x: -2000 }}
      animate={{ x: 0 }}
      transition={{
        ease: "backOut",
        delay: 0.4,
        duration: 0.9,
      }}
      className={`flex items-center uppercase justify-between text-xl md:text-4xl mb-10 border-b-[1px] py-10   h-10 `}
    >
      <h2>
        {numberOfSelectedImages === 0
          ? "Gallery"
          : numberOfSelectedImages + " items are selected"}
      </h2>
      <button
        onClick={handleDeleteClick}
        className={`${
          numberOfSelectedImages === 0 ? "hidden" : "visible"
        } text-red-400 uppercase `}
      >
        Delete
      </button>
    </motion.div>
  );
};

export default Header;
