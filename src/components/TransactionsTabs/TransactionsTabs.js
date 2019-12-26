import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import TransactionsMonthOverview from '../TransactionsMonthOverview'

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
});

export default function TransactionsTabs({ model, changeMonth }) {
    const classes = useStyles()
    const selectedValue = model ? model.summary.tabsConfig.value: null;
    const tabs = model ? (model.summary.tabsConfig.tabs.map(({label, value}) => <Tab label={label} value={value} />)) : []

    return (
        <Paper className={classes.root}>
            <Tabs
                value={selectedValue}
                onChange={changeMonth}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                {tabs}
            </Tabs>

            <TransactionsMonthOverview model={model}/>
        </Paper>
    )
}