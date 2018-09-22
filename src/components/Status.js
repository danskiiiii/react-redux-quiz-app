import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
  questNo: PropTypes.number,
  points: PropTypes.number,
};

const defaultProps = {
  questNo: 1,
  points: 0,
};

class Status extends Component {
  render() {
    const { questNo, points } = this.props;

    return (
      <div className="card bg-light text-dark">
        <div className="alert alert-warning" style={{ color: 'black' }}>
          Question {questNo} of 7. Correct answers: {points}
        </div>
      </div>
    );
  }
}

Status.propTypes = propTypes;
Status.defaultProps = defaultProps;

const mapStateToProps = state => ({
  questNo: state.quiz.answeredBlocks + 1,
  points: state.quiz.totalPoints,
});
export default connect(mapStateToProps)(Status);
