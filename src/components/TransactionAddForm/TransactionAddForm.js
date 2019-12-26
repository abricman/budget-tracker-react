import 'date-fns'
import React from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DatePickerField from '../DatePickerField'
import { Field } from 'formik'
import SelectField from '../SelectField'

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}))


export default function AddTransactionForm(props) {
  const classes = useStyles()

  const {
    values : { wallet, category, amount, date, note},
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    categories,
    wallets
  } = props

  const getPicklistOptions = (records) => {
    return records ? records.map((rec) => { 
      return { name: rec.name, value: rec._id } 
    }) : []
  } 

  return (
    <>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      {/* <form className={classes.form} noValidate onSubmit={handleSubmit}> */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Field name="wallet" label="Wallet" id="wallet" options={getPicklistOptions(wallets)} required component={SelectField} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field name="category" label="Category" id="category" options={getPicklistOptions(categories)} required component={SelectField} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field name="date" label="Date" inputVariant="outlined" required component={DatePickerField} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="amount"
              label="Amount"
              helperText={touched.name ? errors.name : ''}
              error={touched.name && Boolean(errors.name)}
              value={amount}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
            variant="outlined"
            fullWidth
            multiline
            id="note"
            label="Note"
            name="note"
            autoComplete="note"
            helperText={touched.name ? errors.name : ''}
            error={touched.name && Boolean(errors.name)}
            onChange={handleChange}
            value={note}
            />
          </Grid>
        </Grid>
      {/* </form> */}
    </MuiPickersUtilsProvider>
  </>
  );
}