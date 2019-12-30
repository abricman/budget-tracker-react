import React from 'react'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { categoriesTypes } from '../../constants/categories.constants'

const useStyles = makeStyles(theme => ({
    expenseColor: {
      color:"red"
    },
    incomeColor: {
        color:"#50b94c"
    },
    defaultPadding: {
        padding:theme.spacing(1)
    },
    divider: {
        backgroundColor:"#f8f8f8",
        height:"1.75rem"
    }
}));

const getTypeColorClass = (classes, type) => {
    switch (type) {
        case categoriesTypes.INCOME: 
            return classes.incomeColor
        case categoriesTypes.EXPENSE: 
            return classes.expenseColor
        default: 
            return ''
    }
}

export default function TransactionGroup({item}) {
    const {day, dayName, monthName, year, total, transactions} = item
    const classes = useStyles()
    
    return (
        <Grid container direction="column">
            <Grid item className={classes.divider}>
            </Grid>
            <Grid item>
                <Grid container className={classes.defaultPadding}>
                    <Grid item xs={2}>   
                        <Typography variant="h4">{day}</Typography>  
                    </Grid> 
                    <Grid item xs={10}>
                        <Grid container justify="space-between">
                            <Grid item>   
                                {dayName} <br/>
                                {monthName} {year}    
                            </Grid>
                            <Grid item>   
                                <b>{total}</b>
                            </Grid>
                        </Grid>   
                    </Grid> 
                </Grid>
            </Grid>
            <Divider/>
            {transactions.map((tx) => {
                return (
                <Grid item key={tx._id}>
                    <Grid container className={classes.defaultPadding}>
                        <Grid item xs={2}>   
                            {tx.category.faIcon ? <FontAwesomeIcon icon={tx.category.faIcon.icon} size="2x" color={tx.category.faIcon.color} /> : null}
                        </Grid> 
                        <Grid item xs={10}>
                            <Grid container justify="space-between">
                                <Grid item>   
                                    {tx.category.name}
                                </Grid>
                                <Grid item>
                                    <span className={getTypeColorClass(classes, tx.category.type)}>{tx.amount}</span>
                                </Grid>
                            </Grid>   
                        </Grid> 
                    </Grid>
                </Grid>)
            })}
        </Grid>
    )
}