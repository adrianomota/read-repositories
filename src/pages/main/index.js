import React, { Component } from 'react';

// import TodoList from '../../components/TodoList';
import Repository from '../../components/Repository';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Repository />;
  }
}
