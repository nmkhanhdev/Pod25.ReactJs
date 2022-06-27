import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        console.log('I am in the CONSTRUCTOR of the Counter.js');
    }

    counter = () => {
        this.setState({ count: this.state.count + 1 });
    }

    componentDidMount() {
        this.timer = setInterval(this.counter, 1000);
        console.log('Component DID MOUNT of the Counter.js');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component Counter UPDATED from: ', prevState.count, ' of the Counter.js');
    }

    componentWillUnmount() {
        console.log("======== Component COUNTER is UNMOUNTED of the Counter.js! ========");
        clearInterval(this.timer);
    }


    render() {
        console.log('I am in the RENDER of the Counter.js');
        return (
            <h1> {this.state.count}</h1>
        )
    }
}

export default Counter;