import React, { Component } from 'react';


class Transaction extends Component {
    constructor() {
        super()
        this.state = {}
    }
    delete = () => {
        this.props.delete(this.props.transaction)
    }

    render() {
        return (
            <div className='card'>

                <p>amount:{this.props.transaction.amount} </p>
                <p> vendor:{this.props.transaction.vendor}  </p>
                <p> category:{this.props.transaction.category}</p>
                <br/>
                <center><button className='delete' onClick={this.delete}>delete</button></center>

            </div>
        );
    }
}

export default Transaction;


