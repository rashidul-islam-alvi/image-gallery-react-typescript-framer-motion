import { useEffect, useState } from "react";
import { images } from "../data/data";
import { Image } from "../interfaces";
import { ImageContext } from "./ImageContext";

export function ImageProvider({ children }: { children: React.ReactNode }) {
  // use this if you want all the images to restore when you refresh
  // const [localStorageImages, setLocalStorageImages] = useState<Image[]>(images);

  // use this if you dont want to restore when you refresh
  const [localStorageImages, setLocalStorageImages] = useState<Image[]>(() => {
    const storedImages = localStorage.getItem("images");
    if (storedImages) {
      return JSON.parse(storedImages);
    }
    return images;
  });

  // Save images to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("images", JSON.stringify(localStorageImages));
  }, [localStorageImages]);

  function updateLocalStorageImages(images: Image[]) {
    setLocalStorageImages(images);
  }

  // Toggle the 'isFeatured' property of an image by its ID
  function toggleFeatured(id: number) {
    setLocalStorageImages((prevImages) => {
      const updatedImages = prevImages.map((image) => ({
        ...image,
        isFeatured: image.id === id,
      }));

      // Move the featured image to the beginning
      const featuredIndex = updatedImages.findIndex(
        (image) => image.isFeatured
      );
      if (featuredIndex !== -1) {
        const featuredImage = updatedImages[featuredIndex];
        updatedImages.splice(featuredIndex, 1);
        updatedImages.unshift(featuredImage);
      }
      return updatedImages;
    });
  }

  // Toggle the 'isSelected' property of an image by its ID
  function toggleSelected(id: number) {
    setLocalStorageImages((prevImages) =>
      prevImages.map((image) =>
        image.id === id ? { ...image, isSelected: !image.isSelected } : image
      )
    );
  }

  // Remove images by its IDs
  function removeImages(ids: number[]) {
    setLocalStorageImages((prevImages) =>
      prevImages.filter((image) => !ids.includes(image.id))
    );
  }

  return (
    <ImageContext.Provider
      value={{
        images: localStorageImages,
        removeImages,
        toggleFeatured,
        toggleSelected,
        updateLocalStorageImages,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
}
