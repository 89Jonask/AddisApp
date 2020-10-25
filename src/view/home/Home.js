import React from "react";
import Flux from "react-flux-dash";
import { Link } from "react-router-dom";

export default class Home extends Flux.View {
  render() {
    return (
      <div>
        <h1>I am the home</h1>
        <ul>
          <li>
            <Link to="/product/2">Go to product 2 (normal link)</Link>
          </li>
          <li>
            <button onClick={() => this.props.history.push("/product/3")}>
              Go to product 3 (history.push)
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
