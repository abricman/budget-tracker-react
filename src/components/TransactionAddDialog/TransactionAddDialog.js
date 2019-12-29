import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Formik } from "formik"
import * as Yup from 'yup'
import _ from 'lodash'

import { makeStyles } from '@material-ui/core/styles'

import TransactionAddForm from '../TransactionAddForm'

const validationSchema = Yup.object().shape({
    wallet: Yup.string().required('Wallet is required'),
    category: Yup.string().required('Category is required'),
    date: Yup.date().nullable().default(null).required('Date is required'),
    amount: Yup.number().positive('You must enter a positive number').required('Amount is required')
})

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
                <DialogTitle id="form-dialog-title">New transaction</DialogTitle>
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
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
      />
    </Dialog>
  )
}