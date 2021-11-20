import React, {Component} from 'react';
import './App.css';

class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

   state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };
}

export default App;
