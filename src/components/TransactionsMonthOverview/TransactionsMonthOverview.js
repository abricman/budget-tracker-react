import React from 'react'
import TransactionGroup from '../TransactionGroup'
import TransactionsSummary from '../TransactionsSummary'

export default function TransactionsMonthOverview({model}) {
    let groups = []
    if (model && model.transactionGroups) groups = model.transactionGroups.map((group) => <TransactionGroup item={group} key={group.day}/>)
    
    return (
        !model ? null :
        <>
            <TransactionsSummary summary={model.summary}/>
            { groups }
        </>
    )
}