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
    const draggedItem = updatedImages[dragIndex];
    const droppedItem = updatedImages[dropIndex];

    // Swap the items using destructuring assignment
    [updatedImages[dragIndex], updatedImages[dropIndex]] = [
      droppedItem,
      draggedItem,
    ];

    updateLocalStorageImages(updatedImages);

    // Toggle 'isFeatured' if necessary
    if (dragIndex === 0 || dropIndex === 0) {
      toggleFeatured(dragIndex === 0 ? droppedItem.id : draggedItem.id);
    }

    setDragIndex(null);
  };

  return { dragIndex, handleDragStart, handleDrop };
};
