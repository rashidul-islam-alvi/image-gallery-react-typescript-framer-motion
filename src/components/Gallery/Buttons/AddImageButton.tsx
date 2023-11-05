import { AddIcon } from "../../../icons/AddIcon";

const AddImageButton = () => {
  return (
    <div
      className={`border-2 flex justify-center items-center cursor-pointer h-[110px] md:h-[250px]  text-3xl`}
    >
      <AddIcon />
    </div>
  );
};

export default AddImageButton;
