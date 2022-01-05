import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Transactions from './components/Transactions'
import Operations from './components/Operations '
import Breakdowns from './components/Breakdowns'
const axios = require('axios')


class App extends Component {
  constructor() {
    super()
    this.state = {

      transactions: [],
      sum: 0
    }
  }
  sumAmount = () => {
    let amount = 0
    this.state.transactions.map(transaction => {
      amount += transaction.amount
    })
    this.setState({
      sum: amount
    })
  }
  componentDidMount = async () => {
    let res = await axios.get('http://localhost:8080/transactions')
    this.setState({
      transactions: res.data
    })
    this.sumAmount()
  }
  deposit = async (newTransaction) => {
    fetch('http://localhost:8080/transactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTransaction)
    }).then(res => res.json())
      .then(data => {
        let newTransactions = [...this.state.transactions]
        newTransactions.push(data)
        this.setState({
          transactions: newTransactions
        }, function () {
          this.sumAmount()
        })

      })

  }
  delete = (transaction) => {
    let newTransactions = [...this.state.transactions]
    newTransactions.splice(newTransactions.findIndex(function (tran) {
      return tran._id === transaction._id;
    }), 1)
    this.setState({
      transactions: newTransactions
    }, function () {
      this.sumAmount()
    })
    fetch('http://localhost:8080/transactions', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(transaction)
    })
  }
  render() {
    return (
      <Router>
        <div >         
          <div id="main-links">
            <Link className='links' to="/">Transactions</Link>
            <Link className='links' to="/operations">Operations</Link>
            <Link className='links' to="/breakdowns">breakdown</Link>
            <p className='links'>Balance :{this.state.sum}</p>
          </div>
          <Route exact path="/" render={() => <Transactions transactions={this.state.transactions} delete={this.delete} />} />
          <Route exact path="/operations" render={() => <Operations transactions={this.state.transactions} deposit={this.deposit} />} />
          <Route exact path="/breakdowns" render={() => <Breakdowns transactions={this.state.transactions}  />} />
        </div>
      </Router>
    );
  }
}

export default App;
