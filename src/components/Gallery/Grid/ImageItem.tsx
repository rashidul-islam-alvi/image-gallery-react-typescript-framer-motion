import { motion } from "framer-motion";
import { ImageItemProps } from "../../../interfaces";
import CheckIconButton from "../Buttons/CheckIconButton";
import StarFilledIconButton from "../Buttons/StartFilledIconButton";

const ImageItem = ({
  image,
  index,
  handleImageClick,
  handleDrop,
  handleDragStart,
}: ImageItemProps) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "backOut" }}
      key={image.id}
      onClick={() => {
        handleImageClick(image.id);
      }}
      draggable
      onDrop={() => handleDrop(index)}
      onDragStart={() => handleDragStart(index)}
      onDragOver={(e) => e.preventDefault()}
      className={` h-[110px] md:h-[250px] ${
        image.isFeatured
          ? "col-span-2 row-span-2 h-[228px] md:h-[508px] border-[1px] border-[#ffa371]"
          : "border-transparent"
      } relative border-[1px] hover:border-white cursor-pointer ${
        image.isSelected ? "border-[1px] border-white" : "border-0"
      }`}
    >
      <StarFilledIconButton isFeatured={image.isFeatured} />

      <CheckIconButton isSelected={image.isSelected} />

      <img
        src={image.imageUrl}
        className="object-cover w-full h-full "
        alt={image.imageAlt}
        loading="lazy"
      />
    </motion.div>
  );
};

export default ImageItem;
