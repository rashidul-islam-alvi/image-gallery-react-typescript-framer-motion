import { StarFilledIcon } from "../../../icons/StarFilledIcon";

interface StarFilledIconButtonProps {
  isFeatured: boolean;
}

const StarFilledIconButton = ({ isFeatured }: StarFilledIconButtonProps) => {
  if (isFeatured) {
    return (
      <div className="absolute flex justify-end visible w-full h-full p-2">
        <StarFilledIcon />
      </div>
    );
  } else {
    return <div className="absolute hidden w-full h-full" />;
  }
};

export default StarFilledIconButton;
