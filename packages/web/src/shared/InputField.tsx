import React from "react";
import { FieldProps } from "formik";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";

const InputField: React.FC<FieldProps<any> & TextFieldProps> = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const error = !!errors[field.name] && touched[field.name] as boolean;
  const helperText = touched[field.name] && errors[field.name];

  return (
    <TextField {...field} {...props} error={error} helperText={helperText} />
  );
};

export default InputField;
