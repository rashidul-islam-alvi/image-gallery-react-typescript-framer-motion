import { motion } from "framer-motion";
import { useImages } from "../../context/ImageContext";
import { useImageGalleryActions } from "../../hooks/useImageGalleryActions";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { images } = useImages();
  const { handleDeleteClick } = useImageGalleryActions();

  const numberOfSelectedImages: number = images.filter(
    (image) => image.isSelected
  ).length;

  const transitionToHome = () => {
    navigate("/");
  };

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
      {numberOfSelectedImages === 0 ? (
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={transitionToHome}
          className="font-semibold cursor-pointer "
        >
          Gallery
        </motion.h2>
      ) : (
        <h2>{numberOfSelectedImages} items are selected</h2>
      )}

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
