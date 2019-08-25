import React, { Component } from 'react';

class Reverse extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            sentence: "",
            reverseSentence: "",
        };
    }

    reverse = () => {
        const { sentence } = this.state;
        const revWords = [];
        const words = sentence.split(" ");
        words.map(word => revWords.push(word.split('').reverse().join('')))
        this.setState({reverseSentence: revWords.join(" ")})
    }

    render() {
        const { reverseSentence } = this.state;
        return (
            <div >
                <input onChange={(ev) => this.setState({sentence: ev.target.value})}/>
                <button onClick={() => this.reverse()}>Reverse</button>
                <div>{reverseSentence}</div>
            </div>
        );
    }
}
export default Reverse;