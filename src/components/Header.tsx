import { motion } from "framer-motion";
import React from "react";
import { useImages } from "../context/ImageContext";

interface HeaderProps {
  handleDeleteClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ handleDeleteClick }) => {
  const { images } = useImages();

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
      className="flex flex-col items-center gap-10 mb-10"
    >
      <h2 className="text-6xl cursor-pointer md:text-9xl"> wellgram</h2>

      <div className="flex items-center gap-5 text-xl uppercase md:text-4xl">
        <h2>{numberOfSelectedImages} items are selected</h2>
        <button
          onClick={handleDeleteClick}
          className={`${
            numberOfSelectedImages === 0 ? "hidden" : "visible"
          } text-red-400 uppercase`}
        >
          Delete
        </button>
      </div>
    </motion.div>
  );
};

export default Header;
