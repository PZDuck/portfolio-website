import React from "react";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";

const helperTextStyles = makeStyles(theme => ({
  error: {
    "&.MuiFormHelperText-root.Mui-error": {
      textAlign: "right"
    }
  }
}));

export const Form = ({ onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit}>
      <FormControl fullWidth>{children}</FormControl>
    </form>
  );
};

export const FormField = ({
  placeholder, type, ...props
}) => {
  const helperTestClasses = helperTextStyles();

  return (
    <TextField
      {...props}
      variant="outlined"
      FormHelperTextProps={{ classes: helperTestClasses }}
      label={placeholder}
      fullWidth
      InputLabelProps={{
        shrink: true
      }}
    />
  );
};
