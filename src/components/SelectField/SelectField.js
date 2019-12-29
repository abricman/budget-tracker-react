import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

export default function SimpleSelect({ field, form, id, label, required = true, options, ...other }) {
  const classes = useStyles();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <FormControl variant="outlined" required={required} className={classes.formControl} error={Boolean(form.errors[field.name])}>
        <InputLabel ref={inputLabel} htmlFor={field.name}>
          {label}
        </InputLabel>
        <Select
          value={field.value}
          onChange={form.handleChange}
          labelWidth={labelWidth}
          inputProps={{
            name: field.name,
            id: id
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {options.map((opt) => {
            return <MenuItem value={opt.value}>{opt.name}</MenuItem>
          })}
        </Select>
        <FormHelperText>{form.errors[field.name]}</FormHelperText>
    </FormControl>
  );
}