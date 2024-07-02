import { FC, MouseEvent, ReactNode } from "react";
import { Button } from "react-bootstrap";
import { IButtonVariant } from "../../utils/types";

interface AppButtonProps {
  children: ReactNode;
  variant: IButtonVariant;
  size?: "lg";
  fullWidth?: boolean;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
const AppButton: FC<AppButtonProps> = ({
  children,
  variant,
  size,
  fullWidth,
  className,
  onClick,
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={onClick}
      style={{ width: fullWidth ? "100%" : "auto" }}
    >
      {children}
    </Button>
  );
};

export default AppButton;
