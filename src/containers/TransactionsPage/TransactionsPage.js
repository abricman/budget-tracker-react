import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import moment from 'moment'

import AppContainer from '../AppContainer'
import TransactionsTabs from '../../components/TransactionsTabs'
import TransactionAddDialog from '../../components/TransactionAddDialog'
import Spinner from '../../components/Spinner'
import { transactionsActions, categoriesActions, walletsActions } from '../../store/actions';
import { transactionsActionTypes } from '../../constants'
import { selectRequesting } from '../../selectors/requesting.selector'

const useStyles = makeStyles((theme) => ({
    containerRoot: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    }
}));

const TransactionsPage = ({ handleTransactionAdd, handleGetTransactions, handleGetCategories, handleGetWallets, isRequesting, transactionsModel, wallets, categories }) => {
    const classes = useStyles()
    const [openAddDialog, setOpenAddDialog] = useState(false)
    const [currentDate, setCurrentDate] = useState(new moment())
    const openAddTransaction = () => setOpenAddDialog(true)

    const getTransactionData = async () => {
        handleGetTransactions(currentDate.year(), currentDate.month())
    }

    useEffect(() => {
        getTransactionData()
        handleGetCategories()
        handleGetWallets()
    }, [])

    const handleSubmit = async (values, formikBag) => {
        handleTransactionAdd(values).then(addResult => {
            if (!addResult.error) {
                setOpenAddDialog(false)
                getTransactionData()
            }
            // TODO: show error in global Toast provider
        })
    }

    const changeMonth = (event, tabValue) => {
        let isFuture = currentDate > new moment()
        tabValue = isFuture ? tabValue - 1 : tabValue // If future tab fix tabValue
        setCurrentDate(currentDate.add(tabValue, 'M'))
        getTransactionData()
    }

    const MainContent = () => {
        return (
            <Grid container alignContent="center" alignItems="center" justify="center">
                <Grid item xs={6} classes={{root: classes.containerRoot}}>
                    <TransactionsTabs model={transactionsModel} changeMonth={changeMonth}/>
                </Grid>
            </Grid>
        )
    }

    return (
        <AppContainer 
            renderHeader={() => (
                <Grid container justify="flex-end">
                    <Grid item>
                        <Button variant="contained" onClick={openAddTransaction}>
                            Add transaction
                        </Button>
                        <TransactionAddDialog 
                            open={openAddDialog} 
                            setOpen={setOpenAddDialog} 
                            handleSubmit={handleSubmit}
                            categories={categories}
                            wallets={wallets}
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

const mapStateToProps = (state) => {
    return { 
        isRequesting: selectRequesting(state, [transactionsActionTypes.REQUEST_GET_TRANSACTIONS]),
        transactionsModel: state.transactionsModel,
        categories: state.categories,
        wallets: state.wallets
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        handleTransactionAdd: transaction => dispatch(transactionsActions.handleTransactionAdd(transaction)),
        handleGetTransactions: (year, month) => dispatch(transactionsActions.handleGetTransactions(year, month)),
        handleGetCategories: () => dispatch(categoriesActions.handleGetCategories()),
        handleGetWallets: () => dispatch(walletsActions.handleGetWallets())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsPage)