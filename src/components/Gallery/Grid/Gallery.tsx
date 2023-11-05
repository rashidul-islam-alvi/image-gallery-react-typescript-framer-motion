import Header from "../../Header/Header";
import { GridLayoutGallery } from "./GridLayoutGallery";

export const Gallery = () => {
  return (
    <div className="relative flex flex-col w-full px-2 md:px-5 ">
      <Header />
      <GridLayoutGallery />
    </div>
  );
};
