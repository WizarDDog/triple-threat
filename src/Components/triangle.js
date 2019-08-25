import React, { Component } from 'react';

class Triangle extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            one: 0,
            two: 0,
            three: 0,
            show: false, 
            triangle: "",
        };
    }

    saveSide = (ev, side) => {
        this.setState({[side]: ev.target.value})
    }

    categorize = () => {
        const { one, two, three } = this.state;
        if (one > 0 && two > 0 && three > 0) {
            if (one === two && two === three) {
                this.setState({show: true, triangle: "Equilateral"})
            }
            else if (one === two || two === three || one === three) {
                this.setState({show: true, triangle: "Isosceles"})
            }
            else {
                this.setState({show: true, triangle: "Scalene"})
            }
        }
    }


    render() {
        return (
            <div>
                {/* // all inputs are similar, maybe can change them later*/}
                <input placeholder="Side 1" onChange={(ev) => this.saveSide(ev, "one")} />
                <input placeholder="Side 2" onChange={(ev) => this.saveSide(ev, "two")}/>
                <input placeholder="Side 3" onChange={(ev) => this.saveSide(ev, "three")}/>
                <button onClick={() => this.categorize()}>Categorize triangle</button>
                {this.state.show ? <div>{this.state.triangle}</div> : <div></div>}
            </div>
        );
    }
}
export default Triangle;