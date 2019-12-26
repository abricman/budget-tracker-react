import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Formik, Form, Field } from "formik"
import * as Yup from 'yup'
import _ from 'lodash'

import { makeStyles } from '@material-ui/core/styles'

import TransactionAddForm from '../TransactionAddForm'

const validationSchema = Yup.object().shape({
    wallet: Yup.string('Select a wallet').required('Wallet is required'),
    category: Yup.string('Select a category').required('Category is required'),
    /* date: Yup.string('Enter a date').required('Date is required'), */
    amount: Yup.number('Enter an amount').positive('You must enter a positive number').required('Amount is required')
})
// TODO: Validation
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

export default function TransactionAddDialog({ open, setOpen, handleSubmit, categories, wallets }) {
  const classes = useStyles()
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <Formik 
          render={props => (
            <form className={classes.form} noValidate onSubmit={props.handleSubmit}>
                <DialogTitle id="form-dialog-title">Add transaction</DialogTitle>
                <DialogContent>
                    <TransactionAddForm {...props} categories={categories} wallets={wallets} />     
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button type="submit" color="primary">
                        Save
                    </Button>
                </DialogActions>
              </form>
          )} 
          initialValues={{date:new Date()}}
          /* validationSchema={validationSchema} */
          onSubmit={handleSubmit}
      />
    </Dialog>
  )
}