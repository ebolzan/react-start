import React, { Component } from 'react';

class Clock2 extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            time : new Date().toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
            })
        }
    }

    updateClock()
    {
        this.setState(
            {
                time : new Date().toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    hour12: true
                })
            }
        );
    }

    componentDidMount(){
        setInterval(()=> this.updateClock(), 1000);

    }

    componentWillUnmount(){

    }

    render(){

        return (
            <div>
            <h1>
                {this.state.time}
            </h1>
            </div>
        );
    }
}
export default Clock2;