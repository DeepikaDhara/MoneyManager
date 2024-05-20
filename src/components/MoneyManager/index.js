import {v4} from 'uuid'
import {Component} from 'react'
import './index.css'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionList: [],
    inputTitle: '',
    inputAmount: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  deleteTransaction = id => {
    const {transactionList} = this.state
    const updatedTransactionList = transactionList.filter(
      eachTransaction => id !== eachTransaction.id,
    )
    this.setState({
      transactionList: updatedTransactionList,
    })
  }

  onChangeTitleInput = event => {
    this.setState({
      inputTitle: event.target.value,
    })
  }
  onChangeInputAmount = event => {
    this.setState({
      inputAmount: event.target.value,
    })
  }

  onChangeOptionId = event => {
    this.setState({
      optionId: event.target.value,
    })
  }
  deleteTransaction = id => {
    const {transactionList} = this.state
    const updatedTransactionList = transactionList.filter(
      eachTransaction => id !== eachTransaction.id,
    )
    this.setState({
      transactionList: updatedTransactionList,
    })
  }

  addTransaction = event => {
    event.preventDefault()
    const {inputTitle, inputAmount, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = typeOption
    const newTransaction = {
      id: v4(),
      title: inputTitle,
      amount: inputAmount,
      type: displayText,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      inputTitle: '',
      inputAmount: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }
  getExpenses = () => {
    const {transactionList} = this.state
    let expensesAmount = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })
    return expensesAmount
  }
  getIncome = () => {
    const {transactionList} = this.state
    let incomeAmount = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  getBalance = () => {
    const {transactionList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  render() {
    const {inputTitle, inputAmount, optionId, transactionList} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()
    return (
      <div className="container">
        <div className="bg-container">
          <div className="Introduction-Container">
            <h1 className="name-container">Hi, Richard</h1>
            <p className="welcome">
              Welcome back to your
              <span className="span-element">Money Manager</span>
            </p>
          </div>
          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />

          <div className="Transaction-histroy">
            <form className="form" onSubmit={this.addTransaction}>
              <h1 className="Add-transaction">Add Transaction</h1>
              <label className="title" htmlFor="title">
                TITLE
              </label>
              <br />
              <input
                type="text"
                id="title"
                value={inputTitle}
                onChange={this.onChangeTitleInput}
              />
              <br />
              <label className="amount" htmlFor="amount">
                AMOUNT
              </label>
              <br />
              <input
                type="text"
                id="amount"
                value={inputAmount}
                onChange={this.onChangeInputAmount}
              />
              <br />
              <label className="type" htmlFor="select">
                TYPE
              </label>
              <br />
              <select
                className="transaction-type"
                id="select"
                value={optionId}
                onChange={this.onChangeOptionId}
              >
                {transactionTypeOptions.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <br />
              <button className="button" type="submit">
                Add
              </button>
            </form>
            <div className="history-transactions">
              <h1 className="transaction-header">History</h1>
              <div className="transaction-table-container">
                <ul className="transaction-table">
                  <li className="table-header">
                    <p className="table-header-cell">Title</p>
                    <p className="table-header-cell">Amount</p>
                    <p className="table-header-cell">Type</p>
                  </li>
                  {transactionList.map(eachTransaction => (
                    <TransactionItem
                      key={eachTransaction.id}
                      transactionDetails={eachTransaction}
                      deleteTransaction={this.deleteTransaction}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
