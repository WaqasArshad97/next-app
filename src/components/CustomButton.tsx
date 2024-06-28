import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface CustomButtonProps extends ButtonProps {
  
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  onClick,
  color = "primary",
  variant = "contained",
  fullWidth = true,
  size = "large",
  type = "submit",
}) => {
  return (
    <Button
      fullWidth={fullWidth}
      variant={variant}
      color={color}
      size={size}
      type={type}
      onClick={onClick}
      sx={{
        backgroundColor: "#3AAFA9",
        color: "#fff",
        borderRadius: "8px",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 1px 20px 0 rgba(0, 0, 0, 0.1)",
        "&:hover": {
          color: "#fff",
          backgroundColor: "#3AAFA9",
        },
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;