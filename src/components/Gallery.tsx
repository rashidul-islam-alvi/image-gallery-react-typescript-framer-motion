import Header from "./Header";
import { AnimatePresence, motion } from "framer-motion";
import { useImages } from "../context/ImageContext";
import { AddIcon } from "../icons/AddIcon";
import { CheckIcon } from "../icons/CheckIcon";
import { StarFilledIcon } from "../icons/StarFilledIcon";
import { useState } from "react";
import toast from "react-hot-toast";

export const Gallery = () => {
  const {
    images,
    toggleSelected,
    removeImages,
    updateLocalStorageImages,
    toggleFeatured,
  } = useImages();

  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const handleDragStart = (index: number) => {
    setDragIndex(index);
  };

  const handleDrop = (dropIndex: number) => {
    if (dragIndex === null) return;
    const updatedImages = [...images];
    const droppedItem = updatedImages[dropIndex];
    const [draggedItem] = updatedImages.splice(dragIndex, 1);
    updatedImages.splice(dropIndex, 0, draggedItem);
    updateLocalStorageImages(updatedImages);
    if (dropIndex === 0) {
      toggleFeatured(draggedItem.id);
    }

    if (dragIndex === 0) {
      toggleFeatured(droppedItem.id);
    }
  };

  const handleImageClick = (id: number) => {
    toggleSelected(id);
  };

  const handleDeleteClick = () => {
    const selectedImages = images.filter((image) => image.isSelected);
    const featuredSelected = selectedImages.some((image) => image.isFeatured);

    if (featuredSelected) {
      toast.error("Cannot delete a featured image that is selected");
    } else {
      const selectedImageIds = selectedImages.map((image) => image.id);
      removeImages(selectedImageIds);
    }
  };

  return (
    <div className="relative flex flex-col items-center w-full p-5 ">
      <Header handleDeleteClick={handleDeleteClick} />

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
              className={` z-0 h-[110px] md:h-[200px] ${
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
    </div>
  );
};
