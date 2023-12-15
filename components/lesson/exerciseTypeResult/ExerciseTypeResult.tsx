import React, { FC, useEffect, useState } from 'react';
import ResultLessons from 'components/common/resultLesson/ResultLesson';
import TestResult from 'components/common/testResult/TestResult';
import { result } from 'helpers/determineResult';
import { WORDS } from 'helpers/lessonData';
import { ResultLesson } from 'models/keyboard/types/keyboardSchema';
import { useParams } from 'next/navigation';
import NavbarLesson from '../navbarLesson/NavbarLesson';


export type lessonResultType = {
  count: number
  time: number
  errorCount: number
}

const initialLessonResult: lessonResultType = {
  count: 0,
  time: 0,
  errorCount: 0,
};

const calculateSum = (data: ResultLesson): lessonResultType => {
  return Object.keys(initialLessonResult).reduce((sums: any, key) => {
    sums[key] = Object.values(data).reduce((acc, item: any) => acc + item[key], 0);
    return sums;
  }, {} as lessonResultType);
};

const ExerciseTypeResult = () => {
  const [lessonResult, setLessonResult] = useState<lessonResultType>(initialLessonResult);

  useEffect(() => {
    const updatedLessonResult = calculateSum(result);
    setLessonResult(updatedLessonResult);
  }, []);

  const { count, time, errorCount } = lessonResult;

  const { type, test } = useParams<{ type: string, test: string }>();
  const letters = ['The life story of American physicist Robert Oppenheimer,', 'who led the first development of nuclear', 'weapons.'];

  return (
    <div>
      <NavbarLesson />
      {
        type === 'word' ?
          <TestResult accuracy={100 - (errorCount * 4) <= 0 ? 0 : 100 - (errorCount * 4)} time={Math.ceil(time / 60)} speed={40} title={'Тестовый урок'} text={WORDS[+test - 1].words} types={'word'} />
          :
          <TestResult accuracy={100 - (errorCount * 4) <= 0 ? 0 : 100 - (errorCount * 4)} time={Math.ceil(time / 60)} speed={40} title={'Тестовый урок'} text={letters} types={'time'} />
      }
    </div>
  );
};

export default ExerciseTypeResult;
