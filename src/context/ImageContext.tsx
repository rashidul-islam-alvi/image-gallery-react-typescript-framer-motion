import { createContext, useContext } from "react";
import { ImageContextType } from "../interfaces";

export const ImageContext = createContext<ImageContextType | undefined>(
  undefined
);

export function useImages() {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error("useImages must be used within an ImageProvider");
  }
  return context;
}
