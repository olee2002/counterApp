import React, { Component } from 'react';

class Counter extends Component {

    state = {
        value: this.props.value,
        tags: ['tag1', 'tag2', 'tag3']

    };
    styles = {
        fontSize: 50,
        fontWeight: 'bold'
    }

    handleIncrement = () => {
        this.setState({ value: this.state.value + 1 });
    }


    render() {
        console.log(this.props.value)
        return (
            <div>
                <span
                    style={this.styles}
                    className={this.getBadgeClasses()}>{this.state.value}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );

    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }
}

export default Counter;