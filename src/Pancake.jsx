import React, { Component } from 'react';

class Pancake extends Component {

    render() {
        return (
            <div className="pancake">
                <img className="image" src={process.env.PUBLIC_URL + this.props.item.photo} alt="pancake"></img>
                <h3>{this.props.item.name}, a {this.props.item.taste} pancake!</h3>
                <h4>{this.props.item.country}, {this.props.item.continent}</h4>
                <p>{this.props.item.blurb}</p>
            </div>
        )
    }
}

export default Pancake;