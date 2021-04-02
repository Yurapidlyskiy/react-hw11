import React, { Component } from "react";
import Button from "./Button";
export default class Test extends Component {
  state = {
    title: this.props.title,
    price: this.props.price,
  };

  handleClick = () => {
    this.setState({ price: 15 });
  };

  render() {
    const { title, price } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <h2>{price}</h2>
        <Button onStateChange={this.handleClick} />
      </div>
    );
  }
}