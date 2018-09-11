import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']

    };
    styles = {
        fontSize: 50,
        fontWeight: 'bold'
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    }


    render() {

        return (
            <div>
                <span
                    style={this.styles}
                    className={this.getBadgeClasses()}>{this.state.count}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>

                <ul>
                    {this.state.tags.map(tag => <li key={tag}>
                        {tag}
                    </li>)}
                </ul>
            </div>
        );

    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }
}

export default Counter;