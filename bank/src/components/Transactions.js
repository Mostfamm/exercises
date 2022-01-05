import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Transaction from './Transaction'

class Transactions extends Component {
    constructor() {
        super()
        this.state = {
        }
    }
    delete = (transaction) => {    
        this.props.delete(transaction)
        }

    render() {
        console.log(this.props.transactions);
        return (
            <div>

                {this.props.transactions.map(transaction => {
                    return <p>
                        <Transaction transaction={transaction} delete={this.delete} />
                      
                    </p>
                })}
            </div>
        );
    }
}

export default Transactions;