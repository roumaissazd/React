import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  //useeffect
  // Cycle de vie : Le composant est monté
  componentDidMount() {
    document.title = "Count 1";
    console.log("The component has mounted");
  }

  // Cycle de vie : Le composant est mis à jour
  componentDidUpdate() {
    document.title = `Count ${this.state.count}`;
    console.log("The component has updated");
  }

  // Cycle de vie : Le composant sera démonté
  componentWillUnmount() {
    document.title = "";
    console.log("The component will unmount");
  }

  // Méthode pour incrémenter le compteur
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Méthode pour décrémenter le compteur
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  // Méthode de rendu
  render() {
    return (
      <>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </>
    );
  }
}

export default MyComponent;
