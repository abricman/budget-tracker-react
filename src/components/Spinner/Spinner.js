import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'

export default function Spinner() {
    return (
        <Grid container direction="column" alignItems="center" justify="center" style={{minHeight:'100%'}}>
            <Grid item>
                <CircularProgress size="4rem"/>
            </Grid>
        </Grid>
    )
}