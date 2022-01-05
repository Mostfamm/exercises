import React, { Component } from 'react';
import Breakdown from './Breakdown';
class Breakdowns extends Component {
    constructor() {
        super()
        this.state = {
            category: []
        }
    }
    componentDidMount =  () => {
        let categories = {}
        for (let transaction of this.props.transactions) {
            if (categories[transaction.category]) {
                categories[transaction.category].amount += transaction.amount
            } else {
                categories[transaction.category] = transaction.amount
            }
        }
        this.setState({
            category: Object.entries(categories)
        })

    }

    render() {
        return (

            <div >
                {this.state.category.map(c => {
                    return <p>
                        <Breakdown c={c} />
                    </p>
                })}
            </div>
        );
    }
}

export default Breakdowns;


