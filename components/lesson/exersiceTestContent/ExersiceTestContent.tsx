'use client';
import { ReactElement, useEffect } from 'react';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { getStageTestExercise } from 'models/exercise/selectors/exerciseSelectors';
import { StageTestExercise } from 'models/exercise/types/exerciseSchema';
import { keyboardActions } from 'models/keyboard/slice/keyboardSlice';
import { useSelector } from 'react-redux';
import ExerciseTypeResult from '../exerciseTypeResult/ExerciseTypeResult';
import ExerciseTypeTestContent from '../exersiceTypeTestContent/ExersiceTypeTestContent';


const contentPage = new Map<StageTestExercise, ReactElement>([
  [StageTestExercise.START, <ExerciseTypeTestContent key={1} />],
  [StageTestExercise.RESULT, <ExerciseTypeResult key={2} />]
]);
const ExerciseTestContent = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    return () => {
      dispatch(keyboardActions.setCurrentLetter(''));
    };
  }, [dispatch]);
  const stage = useSelector(getStageTestExercise);
  return contentPage.get(stage);
};

export default ExerciseTestContent;
