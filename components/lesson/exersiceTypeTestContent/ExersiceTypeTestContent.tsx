import React, { ReactElement } from 'react';
import ExersiceForTests from 'components/common/exersiceForTests/ExersiceForTests';
import NavbarLesson from 'components/lesson/navbarLesson/NavbarLesson';
import { TEST_LETTER } from 'helpers/lessonData';
import { getExerciseType } from 'models/exercise/selectors/exerciseSelectors';
import { ExerciseType } from 'models/exercise/types/exerciseSchema';
import { useParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import ProgressExecuted from '../progressExecuted/ProgressExecuted';
import ProgressTimer from '../progressTimer/ProgressTimer';


const contentPage = new Map<ExerciseType, ReactElement>([
  [ExerciseType.TEST, <ExersiceForTests key={1} />]
]);
const ExerciseTypeTestContent = () => {
  const { type: routeType, test } = useParams<{ type: string, test: string }>();
  const exerciseType = useSelector(getExerciseType);
  const component = contentPage.get(exerciseType);
  return (
    <div>
      <NavbarLesson />
      {
        routeType === 'time' ?
          <ProgressTimer time={TEST_LETTER[+test - 1].time} /> :
          // <ProgressExecuted />
          null
      }
      {component}
    </div>
  );
};

export default ExerciseTypeTestContent;
