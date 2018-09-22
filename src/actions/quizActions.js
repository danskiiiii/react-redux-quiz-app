import { START, NEXT, CHECK, SHUFFLE } from './types';
import quiz_data from '../data/quiz_data.json';
import store from '../store';
import setOrder from '../helpers/setOrder';

export const shuffle = () => {
  return {
    type: SHUFFLE,
    payload: {
      questionsOrder: setOrder(quiz_data.length),
    },
  };
};

export const start = () => {
  return {
    type: START,
    payload: { currentQuestion: store.getState().quiz.questionsOrder[0] },
  };
};

export const onNextClick = () => {
  const elementsList = document.querySelectorAll('#first, #second, #third');
  const elementsArray = [...elementsList];
  elementsArray.forEach(element => {
    element.childNodes[0].childNodes[2].disabled = false;
    element.childNodes[0].childNodes[0].disabled = false;
    element.childNodes[1].firstElementChild.className = 'alert alert-info';
  });
  if (store.getState().quiz.answeredBlocks < 6) {
    return {
      type: NEXT,
      payload: {
        currentQuestion: store.getState().quiz.questionsOrder[
          store.getState().quiz.answeredBlocks + 1
        ],
        answeredBlocks: store.getState().quiz.answeredBlocks + 1,
        isResultShown: false,
      },
    };
  } else {
    store.dispatch(shuffle());
    return {
      type: NEXT,
      payload: {
        answeredBlocks: 0,
        totalPoints: 0,
        currentQuestion: store.getState().quiz.questionsOrder[0],
        isResultShown: true,
        percentResult: (
          (store.getState().quiz.totalPoints /
            ((store.getState().quiz.answeredBlocks + 1) * 3)) *
          100
        ).toFixed(2),
      },
    };
  }
};

export const onCheckClick = (tag, correct, row) => {
  document.getElementById(row).childNodes[0].childNodes[2].disabled = true;
  document.getElementById(row).childNodes[0].childNodes[0].disabled = true;
  if (tag === quiz_data[store.getState().quiz.currentQuestion][correct]) {
    document.getElementById(row).childNodes[1].firstElementChild.className =
      'alert alert-success';
    return {
      type: CHECK,
      payload: {
        totalPoints: store.getState().quiz.totalPoints + 1,
      },
    };
  } else {
    document.getElementById(row).childNodes[1].firstElementChild.className =
      'alert alert-danger';
    return { type: CHECK, payload: {} };
  }
};
