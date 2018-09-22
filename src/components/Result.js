import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
  finalScore: PropTypes.string, // .toFixed(2) used
  isVisible: PropTypes.bool,
};

const defaultProps = {
  finalScore: undefined,
  isVisible: false,
};

class Result extends Component {
  render() {
    const { finalScore } = this.props;

    if (!this.props.isVisible) {
      return null;
    } else {
      return (
        <div className="alert alert-primary" style={{ color: 'black' }}>
          Final score: {finalScore}%
        </div>
      );
    }
  }
}

Result.propTypes = propTypes;
Result.defaultProps = defaultProps;

const mapStateToProps = state => ({
  isVisible: state.quiz.isResultShown,
  finalScore: state.quiz.percentResult,
});
export default connect(mapStateToProps)(Result);
