import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  }
}))

const WalletsList = ({wallets, handleWalletSelection}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <List component="nav">
        {!wallets ? null :
          wallets.map((wallet) => (
            <ListItem key={wallet._id} button onClick={handleWalletSelection(wallet._id)} >
              <ListItemIcon>
                <AccountBalanceWalletIcon />
              </ListItemIcon>
              <ListItemText primary={wallet.name} secondary={wallet.balance}/>
            </ListItem>
          ))
        }
      </List>
    </div>
  )
}

WalletsList.propTypes = {
  wallets: PropTypes.array.isRequired,
  handleWalletSelection: PropTypes.func.isRequired
}

export default WalletsList