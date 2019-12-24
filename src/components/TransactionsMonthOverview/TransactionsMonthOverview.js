import React from 'react'
import TransactionGroup from '../TransactionGroup'
import TransactionsSummary from '../TransactionsSummary'

export default function TransactionsMonthOverview({model}) {
    const groups = []
    if (model && model.transactionGroups) model.transactionGroups.map((group) => <TransactionGroup item={group}/>)
    
    return (
        !model ? null :
        <>
            <TransactionsSummary summary={model.summary}/>
            { groups }
        </>
    )
}