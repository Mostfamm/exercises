import React, { Component } from 'react';


class Operations extends Component {
    constructor() {
        super()
        this.state = {
            amount: 0,
            vendor: "",
            category: "",
            message:""
        }
    }
    updateAmount = (event) => {
        this.setState({
            amount: event.target.value
        })

    }
    updateVendor = (event) => {
        this.setState({
            vendor: event.target.value
        })

    }
    updateCategory = (event) => {
        this.setState({
            category: event.target.value
        })

    }
    deposit = () => {
        if(this.state.amount>0 && this.state.vendor!="" && this.state.category!=""){
        let transaction=
        {
            amount: this.state.amount,
            vendor: this.state.vendor,
            category: this.state.category
        }
        this.setState({
        amount: 0,
        vendor: "",
        category: ""
    })
    this.props.deposit(transaction)
    }
    else{
        this.setState({
           message:"All the inputes are required" 
        })
    }
}
    withdraw = () => {
        let transaction={
            amount: -this.state.amount,
            vendor: this.state.vendor,
            category: this.state.category
        }
        this.setState({
        amount: 0,
        vendor: "",
        category: ""
    })
    this.props.deposit(transaction)
    }
    render() {
        return (
            <div>
                <div id="u-input">
                    <input type="number" placeholder="Amount" value={this.state.amount} onChange={this.updateAmount} />
                </div>
                <div id="u-input">
                    <input type="text" placeholder="Vendor" value={this.state.vendor} onChange={this.updateVendor} />
                </div>
                <div id="u-input">
                    <input type="text" placeholder="Category" value={this.state.category} onChange={this.updateCategory} />
                </div>
                <button onClick={this.deposit}>Deposit</button>
                <button onClick={this.withdraw}>Withdraw</button>
                <h2>{this.state.message}</h2>
            </div>
        );
    }
}

export default Operations;


