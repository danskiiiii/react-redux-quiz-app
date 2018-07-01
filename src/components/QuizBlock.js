import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

import Question from './Question';
import OptionButton from './OptionButton';
import Category from './Category';

import quiz_data from '../data/quiz_data.json';
import { connect } from 'react-redux';
import { onCheckClick } from '../actions/quizActions';

const propTypes = {
  textFirst: PropTypes.string,
  textSecond: PropTypes.string,
  textThird: PropTypes.string,
  onCheckClick: PropTypes.func.isRequired
}

class QuizBlock extends Component {   

  renderRow(correct,row,text){
    return <fieldset id={row} className="flex-row">
           <div className='option-col-1'>
           {this.renderButton('YES', correct, row)}{' '}
           {this.renderButton('NO', correct, row)}  </div> 
           <Question text={text} /> </fieldset>
      };

  renderButton(tag, correct, row) {
    return <OptionButton text={tag}  
            onClickProp={() => {this.props.onCheckClick(tag, correct, row );}}  />
  };

  render(){         
    return (   
      <div className='card bg-light text-dark' >
        <Category />  
        {this.renderRow(2, 'first', this.props.textFirst)}
        {this.renderRow(4, 'second', this.props.textSecond)}
        {this.renderRow(6, 'third', this.props.textThird)}      
      </div> 
   );
  }
}
QuizBlock.propTypes = propTypes;

const mapStateToProps = (state) => ({
  textFirst: quiz_data[state.quiz.currentQuestion][1],
  textSecond: quiz_data[state.quiz.currentQuestion][3],
  textThird: quiz_data[state.quiz.currentQuestion][5]
});
export default connect(mapStateToProps, {onCheckClick})(QuizBlock);
