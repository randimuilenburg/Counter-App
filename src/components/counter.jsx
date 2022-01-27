import React, { Component } from "react";
import {
  Badge,
  //   Navbar,
  //   Container,
  //   Nav,
  //   NavDropdown,
  //   Card,
  //   Button,
} from "react-bootstrap";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

class Counter extends React.Component {
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("prevsProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
    }
  }

  componentWillUnmount() {
    console.log("Counter-Unmount");
  }

  render() {
    console.log("Counter - Rendered");

    // React.createElement('div')
    return (
      <div>
        <Badge bg={this.getBadgeClasses()}>{this.formatCount()}</Badge>{" "}
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let color = this.props.counter.value === 0 ? "warning" : "primary";
    return color;
    let classes = "badge m-2 badge-";
    // was this.state.value, ???
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
