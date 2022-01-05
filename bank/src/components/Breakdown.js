import React, { Component } from 'react';


class Breakdown extends Component {
    constructor() {
        super()
        this.state = {
          cat:[]  
        }
    }
    componentDidMount =  () => {
        this.setState({
            cat:this.props.c
        })
    }

    render() {
        return (

            <div >
               <p>{this.props.c[0]}:{this.props.c[1]} </p>
            </div>
        );
    }
}

export default Breakdown;


