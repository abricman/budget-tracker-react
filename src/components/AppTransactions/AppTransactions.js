import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import moment from 'moment'

import AppContainer from '../../containers/AppContainer'
import TransactionsTabs from '../TransactionsTabs'
import TransactionAddDialog from '../TransactionAddDialog'
import Spinner from '../Spinner'
import { transactionsActions } from '../../store/actions';
import { transactionConstants } from '../../constants'
import { selectRequesting } from '../../selectors/requesting.selector'

const useStyles = makeStyles((theme) => ({
    containerRoot: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    }
}));

const AppTransactions = ({ handleTransactionAdd, handleGetTransactions, isRequesting, transactionsModel }) => {
    const classes = useStyles()
    const [openAddDialog, setOpenAddDialog] = useState(false)
    const [currentDate, setCurrentDate] = useState(new moment())
    const openAddTransaction = () => setOpenAddDialog(true)

    const getTransactionData = async () => {
        handleGetTransactions(currentDate.year(), currentDate.month()) // TODO: Remove fake parameter
    }
    useEffect(() => {
        getTransactionData()
    }, [])
    // TODO
    // 1. Load all transactions, categories, and wallets => dispatch actions alltogether
    // 2. Implement spinner while loading
    // 3. If error show some toast (existing toast component)
    // 4. Handle redux action errors

    const handleSubmit = (values, formikBag) => {
        handleTransactionAdd(values)
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
                <Grid item xs="6" classes={{root: classes.containerRoot}}>
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
                        <TransactionAddDialog open={openAddDialog} setOpen={setOpenAddDialog} handleSubmit={handleSubmit}/>
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
        isRequesting: selectRequesting(state, [transactionConstants.REQUEST_GET_TRANSACTIONS]),
        transactionsModel: state.transactionsModel
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        handleTransactionAdd: transaction => dispatch(transactionsActions.handleTransactionAdd(transaction)),
        handleGetTransactions: (year, month) => dispatch(transactionsActions.handleGetTransactions(year, month))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppTransactions)