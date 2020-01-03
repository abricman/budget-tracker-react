import React from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import { Field } from 'formik'

import SelectField from '../SelectField'
import { getPicklistOptions } from '../../lib/Helpers'

export default function WalletEditForm(props) {

  const {
    values : { name, balance },
    errors,
    initialValues,
    touched,
    handleChange,
    currencies
  } = props

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          variant="outlined"
          required
          fullWidth
          id="name"
          name="name"
          label="Name"
          helperText={errors.name}
          error={Boolean(errors.name)}
          value={name}
          onChange={handleChange}
          type="text"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          variant="outlined"
          required
          fullWidth
          id="balance"
          name="balance"
          label="Balance"
          helperText={errors.balance}
          error={Boolean(errors.balance)}
          value={balance}
          onChange={handleChange}
          type="number"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field 
          name="currency" 
          id="currency" 
          label="Currency" 
          options={getPicklistOptions(currencies, 'name', '_id')} 
          required 
          component={SelectField} 
          error={Boolean(errors.currency)} 
          helperText={errors.currency}
        />
      </Grid>
    </Grid>
  );
}