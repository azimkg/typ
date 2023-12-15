'use client';
import { ReactElement, useEffect } from 'react';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { getStageExercise } from 'models/exercise/selectors/exerciseSelectors';
import { StageExercise } from 'models/exercise/types/exerciseSchema';
import { keyboardActions } from 'models/keyboard/slice/keyboardSlice';
import { useSelector } from 'react-redux';
import ExerciseDescription from '../exerciseDescription/ExerciseDescription';
import ExerciseTypeContent from '../exerciseTypeContent/ExerciseTypeContent';
import LessonsTypeResult from '../lessonsTypeResult/LessonsTypeResilt';


const contentPage = new Map<StageExercise, ReactElement>([
  [ StageExercise.DESCRIPTION, <ExerciseDescription key={1} /> ],
  [ StageExercise.START, <ExerciseTypeContent key={2} /> ],
  [ StageExercise.RESULT, <LessonsTypeResult key={3} /> ]

]);
const ExerciseContent = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    return () => {
      dispatch(keyboardActions.setCurrentLetter(''));
    };
  }, [dispatch]);
  const stage = useSelector(getStageExercise);
  return contentPage.get(stage);
};

export default ExerciseContent;
