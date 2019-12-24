import React from 'react'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'

export default function TransactionsSummary({summary}) {
    return (
        !summary ? null :
        <Grid container style={{padding:"0.75rem"}}>
            <Grid container justify="space-between">
                <Grid item>Inflow:</Grid><Grid item>{summary.inflow}</Grid>
            </Grid>
            <Grid container justify="space-between">
                <Grid item>Outflow:</Grid><Grid item>{summary.outflow}<Divider/></Grid>
            </Grid>
            <Grid container justify="flex-end">
                <Grid item>{summary.total}</Grid>
            </Grid>
        </Grid>
    )
}