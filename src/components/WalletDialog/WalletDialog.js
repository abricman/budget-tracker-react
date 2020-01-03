import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Formik } from "formik"
import * as Yup from 'yup'

import WalletEditForm from '../WalletEditForm'

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Wallet name is required'),
    currency: Yup.string().required('Currency is required'),
    balance: Yup.number().default(0).required('Balance is required'),
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

export default function WalletDialog({ open, setOpen, handleSubmit, initialValues, title, currencies }) {
  const classes = useStyles()
  const handleClose = () => setOpen(false)

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="wallet-add-dialog-title">
      <Formik 
          render={props => (
            <form className={classes.form} noValidate onSubmit={props.handleSubmit}>
                <DialogTitle id="wallet-add-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <WalletEditForm {...props} currencies={currencies} />     
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
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
      />
    </Dialog>
  )
}