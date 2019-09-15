import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import AppContainer from '../../containers/AppContainer'
import TabbedItems from '../TabbedItems'

const fetchedTabs = [{label: "tab1"}, {label: "tab2"}, {label: "tab3"}];

const AppTransactions = () => {
    return (
        <AppContainer 
            renderHeader={() => 'Some dynamic header content'}

            renderMain={() => (
                <>
                    <Typography variant="h2" component="h1" gutterBottom align="center">
                        Welcome!
                    </Typography>
                    <Typography variant="body1" align="center">
                        {'The only budget tracker you will ever need'}
                    </Typography>
                    <TabbedItems tabs={fetchedTabs}/>
                </>
            )}
        />
    )
}

export default connect(null)(AppTransactions)

