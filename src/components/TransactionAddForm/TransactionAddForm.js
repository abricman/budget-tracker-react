import 'date-fns'
import React from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { Field } from 'formik'

import DatePickerField from '../DatePickerField'
import SelectField from '../SelectField'
import { getPicklistOptions } from '../../lib/Helpers'

export default function TransactionAddForm(props) {

  const {
    values : { amount, note },
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    categories,
    wallets
  } = props

  return (
    <>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Field name="wallet" label="Wallet" id="wallet" options={getPicklistOptions(wallets, 'name', '_id')} required component={SelectField} error={Boolean(errors.wallet)} helperText={errors.wallet}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field name="category" label="Category" id="category" options={getPicklistOptions(categories, 'name', '_id')} required component={SelectField} />
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
              name="amount"
              label="Amount"
              helperText={errors.amount}
              error={Boolean(errors.amount)}
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
            onChange={handleChange}
            value={note}
            />
          </Grid>
        </Grid>
    </MuiPickersUtilsProvider>
  </>
  );
}