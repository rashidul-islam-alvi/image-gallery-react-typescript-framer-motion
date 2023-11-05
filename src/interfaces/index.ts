export interface Image {
  id: number;
  imageUrl: string;
  imageAlt: string;
  isSelected: boolean;
  isFeatured: boolean;
}

export interface ImageContextType {
  images: Image[];
  toggleFeatured: (id: number) => void;
  removeImages: (id: number[]) => void;
  toggleSelected: (id: number) => void;
  updateLocalStorageImages: (iamges: Image[]) => void;
}
