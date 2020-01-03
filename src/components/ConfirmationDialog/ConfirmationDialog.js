import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

export default function ConfirmationDialog(props) {
  const { open, title, okBtnLabel, cancelBtnLabel, content, handleClose, handleOk, maxWidth } = props
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="delete-dialog" fullWidth maxWidth={maxWidth} >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers>
      <Typography component="p" variant="body1" align="justify">
        {content}
      </Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          {cancelBtnLabel}
        </Button>
        <Button onClick={handleOk} color="primary">
          {okBtnLabel}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

ConfirmationDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  okBtnLabel: PropTypes.string.isRequired,
  cancelBtnLabel: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleOk: PropTypes.func.isRequired,
  maxWidth: PropTypes.oneOf(["xs","sm","md","lg","xl"])
}