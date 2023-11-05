import { CheckIcon } from "../../../icons/CheckIcon";

interface CheckIconButtonProps {
  isSelected: boolean;
}

const CheckIconButton = ({ isSelected }: CheckIconButtonProps) => {
  if (isSelected) {
    return (
      <div className="absolute flex items-center justify-center visible w-full h-full">
        <CheckIcon />
      </div>
    );
  } else {
    return <div className="absolute hidden w-full h-full" />;
  }
};

export default CheckIconButton;
