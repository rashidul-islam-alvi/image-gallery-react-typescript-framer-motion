import { AnimatePresence, motion } from "framer-motion";
import { AddIcon } from "../../icons/AddIcon";
import { CheckIcon } from "../../icons/CheckIcon";
import { StarFilledIcon } from "../../icons/StarFilledIcon";
import { useImageGalleryActions } from "../../hooks/useImageGalleryActions";
import { useImageGalleryFunctions } from "../../hooks/useImageGalleryFunctions";
import { useImages } from "../../context/ImageContext";

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
      className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4"
    >
      <AnimatePresence>
        {images.map((item, index) => (
          <motion.div
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "backOut" }}
            key={item.id}
            onClick={() => {
              handleImageClick(item.id);
            }}
            draggable
            onDrop={() => handleDrop(index)}
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => e.preventDefault()}
            className={`h-[110px] md:h-[200px] ${
              item.isFeatured ? "col-span-2  border-2 border-[#ffa371] " : ""
            } relative border-[1px] border-transparent  hover:border-white cursor-pointer ${
              item.isSelected ? "border-[1px] border-white" : "border-0"
            }`}
          >
            <div
              className={`${
                item.isFeatured ? "visible" : "hidden"
              } absolute w-full h-full  flex justify-end p-2 `}
            >
              <StarFilledIcon />
            </div>

            <div
              className={`${
                item.isSelected ? "visible" : "hidden"
              } absolute w-full h-full  flex justify-center items-center`}
            >
              <CheckIcon />
            </div>

            <img
              src={item.imageUrl}
              className={`object-cover  w-full h-full`}
              alt={item.imageAlt}
              loading="lazy"
            />
          </motion.div>
        ))}
      </AnimatePresence>
      <div
        className={`border-2 flex justify-center items-center cursor-pointer h-[110px] md:h-[200px]  text-3xl`}
      >
        <AddIcon />
      </div>
    </motion.div>
  );
};
