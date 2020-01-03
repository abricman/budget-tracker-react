import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import CloseIcon from '@material-ui/icons/Close'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  walletAction: {
    color: theme.palette.primary.main
  },
  dividerFix: {
    margin:"1px 0"
  }
}))

const WalletDetails = (props) => {
  const { wallet, currencies, setOpenUpdateDialog, setOpenDeleteConfirmDialog, setSelectedWalletId } = props
  const classes = useStyles()

  // Event handlers
  const handleWalletSelection = (walletId) => () => setSelectedWalletId(walletId)
  const handleEditWalletClick = () => setOpenUpdateDialog(true)
  const handleDeleteWalletClick = () => setOpenDeleteConfirmDialog(true)

  // Helpers
  const getCurrencyName = (currencyId) => {
    let found = currencies ? currencies.find((currency) => currency._id === currencyId) : ''
    return found ? found.name : found
  }
 
  return !wallet ? null : (
    <Card className={classes.card}>
      <CardActions>
        <Grid container>
          <Grid container item xs={6} justify="flex-start" alignItems="center">
            <IconButton edge="start" color="inherit" aria-label="close" onClick={handleWalletSelection(undefined)}>
              <CloseIcon />
            </IconButton>
            <Typography component="h1" variant="h5">Wallet details</Typography>
          </Grid>
          <Grid container item xs={6} alignItems="flex-end" justify="flex-end">
            <Button color="primary" onClick={handleEditWalletClick}>
              Edit
            </Button>
            <Button color="primary" onClick={handleDeleteWalletClick}>
              Delete
            </Button>
          </Grid>
        </Grid>
      </CardActions>
      <Divider />
      <CardContent>
        <Typography component="h2" variant="h4">
          {wallet.name}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {getCurrencyName(wallet.currency)}
        </Typography>
      </CardContent>
    </Card>
  )
}

WalletDetails.propTypes = {
  wallet: PropTypes.object,
  currencies: PropTypes.array.isRequired,
  setOpenUpdateDialog: PropTypes.func.isRequired,
  setOpenDeleteConfirmDialog: PropTypes.func.isRequired,
  setSelectedWalletId: PropTypes.func.isRequired
}

export default WalletDetails