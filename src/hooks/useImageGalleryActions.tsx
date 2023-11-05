import toast from "react-hot-toast";
import { useImages } from "../context/ImageContext";

export const useImageGalleryActions = () => {
  const { images, toggleSelected, removeSelectedImages } = useImages();

  const handleImageClick = (id: number) => {
    toggleSelected(id);
  };

  const handleDeleteClick = () => {
    const selectedImages = images.filter((image) => image.isSelected);
    const featuredSelected = selectedImages.some((image) => image.isFeatured);

    if (featuredSelected) {
      toast.error("Cannot delete a featured image that is selected", {
        duration: 2000,
        position: "bottom-right",
      });
    } else {
      const selectedImageIds = selectedImages.map((image) => image.id);
      removeSelectedImages(selectedImageIds);
    }
  };

  return { handleImageClick, handleDeleteClick };
};
