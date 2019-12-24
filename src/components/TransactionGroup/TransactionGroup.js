import React from 'react'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'

const groupDividerStyle = {
    backgroundColor:"#f8f8f8",
    height:"1.75rem"
}

export default function TransactionGroup({item}) {
    const {day, dayName, monthName, year, transactions} = item

    {/* TODO: refactor padding to theme spacing*/}
    return (
        <Grid container direction="column">
            <Grid item style={groupDividerStyle}>
            </Grid>
            <Grid item style={{padding:"0.75rem"}}>
                <Grid container>
                    <Grid item xs={2}>   
                        {day}  
                    </Grid> 
                    <Grid item xs={10}>
                        <Grid container justify="space-between">
                            <Grid item>   
                                {dayName} <br/>
                                {monthName} {year}    
                            </Grid>
                            <Grid item>   
                                -37 
                            </Grid>
                        </Grid>   
                    </Grid> 
                </Grid>
            </Grid>
            <Divider/>
            {transactions.map((tx) => {
                return (<Grid item>
                    <Grid container style={{padding:"0.75rem"}}>
                        <Grid item xs={2}>   
                            Icon  
                        </Grid> 
                        <Grid item xs={10}>
                            <Grid container justify="space-between">
                                <Grid item>   
                                    {tx.category.name}
                                </Grid>
                                <Grid item>   
                                    {tx.amount}     
                                </Grid>
                            </Grid>   
                        </Grid> 
                    </Grid>
                </Grid>)
            })}
        </Grid>
    )
}