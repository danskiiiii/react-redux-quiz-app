import quizReducer from '../reducers/quizReducer';

test('quizReducer', () => {
  let state;
  state = quizReducer(
    {
      quiz: {
        answeredBlocks: 1,
        totalPoints: 1,
        questionsOrder: [13, 7, 2, 6, 9, 11, 8, 3, 0, 5, 14, 4, 12, 1, 10],
        currentQuestion: 7,
        isResultShown: false,
        percentResult: '',
      },
    },
    { type: 'CHECK', payload: {} },
  );
  expect(state).toEqual({
    quiz: {
      answeredBlocks: 1,
      totalPoints: 1,
      questionsOrder: [13, 7, 2, 6, 9, 11, 8, 3, 0, 5, 14, 4, 12, 1, 10],
      currentQuestion: 7,
      isResultShown: false,
      percentResult: '',
    },
  });
});
