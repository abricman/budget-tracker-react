import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

import { walletsActionTypes, currenciesActionTypes } from '../../constants'
import { walletsActions, currenciesActions } from '../../store/actions'
import { selectRequesting } from '../../selectors/requesting.selector'
import AppContainer from '../AppContainer'
import WalletsList from '../../components/WalletsList'
import WalletDetails from '../../components/WalletDetails'
import WalletDialog from '../../components/WalletDialog'
import ConfirmationDialog from '../../components/ConfirmationDialog'
import Spinner from '../../components/Spinner'

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(1, 2)
  }
}))

const WalletsPage = (props) => {
  const classes = useStyles()
  // Props
  const {
    isRequesting,
    wallets, currencies,
    handleGetWallets, handleGetCurrencies, handleWalletAdd, handleWalletUpdate, handleWalletDelete, 
  } = props
  // State
  const [openAddDialog, setOpenAddDialog] = useState(false)
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false)
  const [openDeleteConfirmDialog, setOpenDeleteConfirmDialog] = useState(false)
  const [selectedWalletId, setSelectedWalletId] = useState()
  
  // Event handlers
  const handleWalletSelection = (walletId) => () => setSelectedWalletId(walletId)
  const handleAddWalletClick = () => setOpenAddDialog(true)
  const handleCloseDeleteWalletClick = () => setOpenDeleteConfirmDialog(false)

  // Helpers
  const getSelectedWallet = (walletId) => wallets ? wallets.find(wallet => wallet._id === walletId) : null
  // Handle dialog actions
  const handleAddSubmit = async (values, formikBag) => handleWalletAdd(values).then(addResult => {
    if (!addResult.error) {
        setOpenAddDialog(false)
        handleGetWallets()
    } // TODO: show error in global Toast provider
  })
  const handleUpdateSubmit = async (values, formikBag) => handleWalletUpdate(values).then(updateResult => {
    if (!updateResult.error) {
        setOpenUpdateDialog(false)
        handleGetWallets()
    }// TODO: show error in global Toast provider
  })
  const handleDeleteSubmit = () => handleWalletDelete(selectedWalletId).then(deleteResult => {
    if (!deleteResult.error) {
        handleCloseDeleteWalletClick()
        handleGetWallets()
    } // TODO: show error in global Toast provider
  })

  useEffect(() => {
    handleGetWallets()
    handleGetCurrencies()
  }, [])

  const MainContent = () => (
    <Grid container justify="space-around" className={classes.container}>
      <Grid item xs={4} >
        <WalletsList wallets={wallets} handleWalletSelection={handleWalletSelection} />
      </Grid>
      <Grid item xs={8}>
          <WalletDetails
            wallet={getSelectedWallet(selectedWalletId)} 
            currencies={[currencies]}
            setOpenUpdateDialog={setOpenUpdateDialog}
            setOpenDeleteConfirmDialog={setOpenDeleteConfirmDialog} 
            setSelectedWalletId={setSelectedWalletId}
          />
          <ConfirmationDialog 
            open={openDeleteConfirmDialog}
            title="Delete wallet" 
            content="Are you sure?" 
            okBtnLabel="Delete" 
            cancelBtnLabel="Cancel"
            handleClose={handleCloseDeleteWalletClick}
            handleOk={handleDeleteSubmit}
            maxWidth="sm"
          />
          <WalletDialog 
              open={openUpdateDialog} 
              setOpen={setOpenUpdateDialog} 
              handleSubmit={handleUpdateSubmit}
              initialValues={getSelectedWallet(selectedWalletId)}
              title="Edit wallet"
              currencies={currencies}
          />
      </Grid>
    </Grid>
  )

  return (
    <AppContainer 
        renderHeader={() => (
          <Grid container justify="flex-end">
            <Grid item>
                <Button variant="contained" onClick={handleAddWalletClick}>
                    Add wallet
                </Button>
                <WalletDialog
                    open={openAddDialog} 
                    setOpen={setOpenAddDialog} 
                    handleSubmit={handleAddSubmit}
                    initialValues={{balance:0}}
                    title="New wallet"
                    currencies={currencies}
                />
            </Grid>
        </Grid>
        )}

        renderMain={() => (
          isRequesting ? <Spinner /> : <MainContent />
        )}
    />
  )
}

WalletsPage.propTypes = {
  isRequesting: PropTypes.bool.isRequired,
  wallets: PropTypes.array.isRequired,
  currencies: PropTypes.array.isRequired,
  handleGetWallets: PropTypes.func.isRequired,
  handleGetCurrencies: PropTypes.func.isRequired,
  handleWalletAdd: PropTypes.func.isRequired,
  handleWalletUpdate: PropTypes.func.isRequired,
  handleWalletDelete: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return { 
      isRequesting: selectRequesting(state, [
        walletsActionTypes.REQUEST_GET_WALLETS, 
        walletsActionTypes.REQUEST_ADD_WALLET, 
        walletsActionTypes.REQUEST_UPDATE_WALLET, 
        currenciesActionTypes.REQUEST_GET_CURRENCIES
      ]),
      wallets: state.wallets,
      currencies: state.currencies
  }
}

// TODO: Use bindActionCreators if number of props increases
const mapDispatchToProps = (dispatch) => {
  return {
      handleWalletAdd: wallet => dispatch(walletsActions.handleWalletAdd(wallet)),
      handleWalletUpdate: wallet => dispatch(walletsActions.handleWalletUpdate(wallet)),
      handleWalletDelete: (walletId) => dispatch(walletsActions.handleWalletDelete(walletId)),
      handleGetWallets: () => dispatch(walletsActions.handleGetWallets()),
      handleGetCurrencies: () => dispatch(currenciesActions.handleGetCurrencies())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WalletsPage)