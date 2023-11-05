import { useState } from "react";
import { useImages } from "../context/ImageContext";

export const useImageGalleryFunctions = () => {
  const { images, updateLocalStorageImages, toggleFeatured } = useImages();

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

  return { dragIndex, handleDragStart, handleDrop };
};
