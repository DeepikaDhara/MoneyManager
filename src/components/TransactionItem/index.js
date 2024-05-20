// Write your code here
import './index.css'
const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails
  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }
  return (
    <li className="table-row">
      <p className="text">{title}</p>
      <p className="text">Rs{amount}</p>
      <p className="text">{type}</p>
      <div className="delete-container">
        <button
          type="button"
          className="delete"
          onClick={onDeleteTransaction}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}
export default TransactionItem
