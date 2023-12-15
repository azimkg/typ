import React, { ReactElement } from 'react';
import ExersiceForTests from 'components/common/exersiceForTests/ExersiceForTests';
import NavbarLesson from 'components/lesson/navbarLesson/NavbarLesson';
import { getExerciseType } from 'models/exercise/selectors/exerciseSelectors';
import { ExerciseType } from 'models/exercise/types/exerciseSchema';
import { useSelector } from 'react-redux';
import ProgressExecuted from '../progressExecuted/ProgressExecuted';


const contentPage = new Map<ExerciseType, ReactElement>([
  [ExerciseType.TEST, <ExersiceForTests key={1} />]
]);
const ExerciseTypeTestContent = () => {
  const exerciseType = useSelector(getExerciseType);
  const component = contentPage.get(exerciseType);
  return (
    <div>
      <NavbarLesson />
      <ProgressExecuted />
      {component}
    </div>
  );
};

export default ExerciseTypeTestContent;
