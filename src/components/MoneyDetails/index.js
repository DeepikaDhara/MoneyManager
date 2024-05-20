import './index.css'
const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props
  return (
    <div className="Balance-expense-income">
      <div className="Balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balance"
        />
        <div className="Balance Text">
          <p className="Your Balance" data-testid="balanceAmount">
            Your Balance
          </p>
          <p className="Balance-amount">Rs {balanceAmount}</p>
        </div>
      </div>
      <div className="Income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="income"
        />
        <div className="Income Text">
          <p className="Your Income">Your Income</p>
          <p className="Income" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="expenses"
        />
        <div className="expenses Text">
          <p className="Your Expenses">Your Expenses</p>
          <p className="expenses" data-testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
