import React from 'react';
import Progress from 'common/progress/Progress';
import { getProgressExercise } from 'models/keyboard/selectors/keyboardSelectors';
import { useSelector } from 'react-redux';


const ProgressExecuted = () => {
  const progress = useSelector(getProgressExercise);
  return <Progress percent={progress} withText={false} height={6}/>;
};

export default ProgressExecuted;
