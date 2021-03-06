import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Button from './Button';

import './style.scss';

class App extends Component {
  state = {
    counter: 0,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.counter <= 10;
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    console.log('render');

    return (
      <Fragment>
        <h1 className="title">Hello World</h1>
        <h2 style={{ color: '#f00' }}>{this.state.counter}</h2>
        <Button onClick={this.handleClick}>Somar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
