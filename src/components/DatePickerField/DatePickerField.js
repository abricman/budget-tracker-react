import React from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
    
export default ({ field, form, ...other }) => {
  let pickerError = form.errors[field.name]

  return (
    <KeyboardDatePicker
      clearable
      disablePast
      id={field.name}
      name={field.name}
      value={field.value}
      format="dd.MM.yyyy"
      helperText={pickerError}
      error={Boolean(pickerError)}
      onError={error => {
        if (error) pickerError = error
      }}
      onChange={date => form.setFieldValue(field.name, date, true)}
      {...other}
    />
  );
};