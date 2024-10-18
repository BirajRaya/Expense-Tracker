import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);
    const sign = transactions.amount > 0 ? '-' : '+';
    const amount = transactions.amount < 0 ? 'minus' : 'plus';
  return (
    <>
        <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction => (<li className= {amount} >
          {transaction.text} <span>{sign}${transaction.amount}</span><button className="delete-btn">x</button>
        </li> ))}
         
      </ul>
    </>
  )
}

export default TransactionList
