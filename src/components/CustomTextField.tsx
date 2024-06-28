import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { useField, FieldAttributes } from 'formik';

interface CustomTextFieldProps extends FieldAttributes<{}>, Omit<TextFieldProps, 'name'> {
  name: string;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({ label, sx, ...props }) => {
  const [field, meta] = useField(props.name);
  return (
    <TextField
      {...field}
      {...props}
      label={label}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      fullWidth
      margin="normal"
      sx={{
        ...sx,
        width: "100%",
        "& .MuiOutlinedInput-root": {
          borderRadius: "8px",
          "& fieldset": {
            border: "1px solid #3AAFA9",
            borderColor: "#3AAFA9",
          },
          "&:hover fieldset": {
            border: "1px solid #3AAFA9",
            borderColor: "#3AAFA9",
          },
          "&.Mui-focused fieldset": {
            border: "1px solid #3AAFA9",
            borderColor: "#3AAFA9",
          },
        },
        "& .MuiInputLabel-root": {
          fontSize: "14px",
          color: "#3AAFA9",
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "#3AAFA9",
        },
      }}
    />
  );
};

export default CustomTextField;