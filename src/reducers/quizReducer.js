import { NEXT, CHECK, START, SHUFFLE } from '../actions/types';

const initialState = {
  answeredBlocks: 0,
  totalPoints: 0,
  questionsOrder: [],
  currentQuestion: 0,
  isResultShown: false,
  percentResult: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case START:
    case CHECK:
    case NEXT:
    case SHUFFLE:
      return { ...state, ...action.payload };

    default:
      return state;
  }
}
