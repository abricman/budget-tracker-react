import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });

export default function CenteredTabs({ value = 0, tabs, renderTabContent }) {
debugger;
    const classes = useStyles()
    const [_value, setValue] = React.useState(value)

    function handleChange(event, newValue) {
        setValue(newValue)
    }

    const _tabs = tabs.map(({label}) => <Tab label ={label} />)

    return (
        <Paper className={classes.root}>
            <Tabs
                value={_value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                {/* <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" /> */}
                {_tabs}
            </Tabs>
            {/*renderTabContent()*/}
        </Paper>
    )
}

