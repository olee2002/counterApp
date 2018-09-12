import React, { Component } from 'react';

class Counter extends Component {

    state = {
        value: this.props.counter.value,
        tags: ['tag1', 'tag2', 'tag3']
    };
    styles = {
        fontSize: 25,
        fontWeight: 'bold'
    }

    handleIncrement = () => {
        console.log(this.props.counter.value, this.state.value)
        this.setState({ value: this.state.value + 1 });
    }
    handleDecrement = () => {
        console.log(this.props.counter.value, this.state.value)
        this.setState({ value: this.state.value - 1 });
    }


    render() {
        console.log(this.props.counter)
        return (
            <div className="row">
                <div className="col-1">
                    <span
                        style={this.styles}
                        className={this.getBadgeClasses()}>{this.state.value}</span>
                </div>
                <div className="col">
                    <button onClick={this.handleIncrement} className="btn btn-secondary">+</button>
                    <button onClick={this.handleDecrement} className="btn btn-secondary m-2">-</button>
                    <button className='btn btn-danger' onClick={() => this.props.onDelete(this.props.counter.id)}>X</button>
                </div>
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