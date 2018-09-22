import React, { Component } from 'react';
import PropTypes from 'prop-types';
import quiz_data from '../data/quiz_data.json';
import { connect } from 'react-redux';
import { onNextClick } from '../actions/quizActions';

const propTypes = {
  text: PropTypes.string,
  onNextClick: PropTypes.func.isRequired,
};
const defaultProps = {
  text: 'You forgot to attach a category!',
};

class Category extends Component {
  render() {
    const { text } = this.props;

    return (
      <div className="alert alert-warning">
        <div className="flex-row">
          <div className="cat-col-1">
            <button
              className="btn btn-warning"
              onClick={this.props.onNextClick}
            >
              {' '}
              NEXT{' '}
            </button>{' '}
          </div>
          <div className="cat-col-2"> {text} </div>
        </div>
      </div>
    );
  }
}
Category.propTypes = propTypes;
Category.defaultProps = defaultProps;

const mapStateToProps = state => ({
  text: quiz_data[state.quiz.currentQuestion][0],
});
export default connect(
  mapStateToProps,
  { onNextClick },
)(Category);
