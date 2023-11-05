import toast from "react-hot-toast";
import { useImages } from "../context/ImageContext";

export const useImageGalleryActions = () => {
  const { images, toggleSelected, removeImages } = useImages();

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

  return { handleImageClick, handleDeleteClick };
};
