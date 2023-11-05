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
  removeSelectedImages: (id: number[]) => void;
  toggleSelected: (id: number) => void;
  updateLocalStorageImages: (iamges: Image[]) => void;
}

export interface ImageItemProps {
  image: {
    id: number;
    imageUrl: string;
    imageAlt: string;
    isFeatured: boolean;
    isSelected: boolean;
  };
  index: number;
  handleImageClick: (id: number) => void;
  handleDrop: (index: number) => void;
  handleDragStart: (index: number) => void;
}
