import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ]
    }

    handleDelete = (id) => {
        console.log('this', id)
        const updatedCounters = this.state.counters.filter(counter => counter.id !== id)
        this.setState({ counters: updatedCounters })
    }
    handleReset = () => {
        this.state.counters.map(counter => {
            counter.value = 0;
            return counter;
        })
        this.setState({
            counters: this.state.counters
        })
        console.log(this.state.counters);
    }

    render() {
        console.log(this.state.counters);
        return (
            <div>
                <button onClick={this.handleReset}>Reset</button>
                {this.state.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete={this.handleDelete}
                        counter={counter}
                    ></Counter>
                )}

            </div>
        )
    }
}

export default Counters;