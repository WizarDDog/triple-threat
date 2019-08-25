import React, { Component } from 'react';

class Fifth extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            numbers: 0,
            fifth: '',
        };
    }

    fifthEl = () => {
        const { numbers }= this.state;

        const split = numbers.split("")
        this.setState({ fifth: split[split.length - 5]})
    }

    render = () => { 
        let langs = ["Ruby","ES6","Scala"] 
        return (<div>{langs.map(it => <p>it</p>)}</div>) 
    }

    render() {
        const { fifth } = this.state;
        return (
            <div>
                <input onChange={ev => this.setState({numbers : ev.target.value})}/>
                <button onClick={() => this.fifthEl()}>Fifth el from end</button>
                <div>{fifth}</div>
                {this.render()}
            </div>
        );
    }
}
export default Fifth;