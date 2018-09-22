import React, { Component } from 'react';
import Status from './components/Status';
import Result from './components/Result';
import QuizBlock from './components/QuizBlock';
import { start, shuffle } from './actions/quizActions';
import store from './store';

class App extends Component {
  componentDidMount() {
    store.dispatch(shuffle());
    store.dispatch(start());
  }

  render() {
    return (
      <div>
        <Result />
        <Status />
        <QuizBlock />
      </div>
    );
  }
}
export default App;
