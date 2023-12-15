'use client';
import { FC } from 'react';
import Button from 'common/button/Button';
import { ButtonHeight } from 'common/button/buttonSchema';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { exerciseActions } from 'models/exercise/slice/exerciseSlice';
import { ExerciseType } from 'models/exercise/types/exerciseSchema';
import { useParams, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';


type TestButtonCardProps = {
  activeExercise: number
}

const TestButtonCard: FC<TestButtonCardProps> = ({ activeExercise }) => {
  const { t } = useTranslation();
  const { locale, type: routeType } = useParams<{ locale: string, type: string }>();
  const dispatch = useAppDispatch();
  const route = useRouter();
  const handleClick = () => {
    if (activeExercise === 1) {
      dispatch(exerciseActions.setExerciseType(ExerciseType.TEST));
    }
    if (activeExercise === 2) {
      dispatch(exerciseActions.setExerciseType(ExerciseType.TEST));
    }
    if (activeExercise === 3) {
      dispatch(exerciseActions.setExerciseType(ExerciseType.TEST));
    }
    if (activeExercise === 4) {
      dispatch(exerciseActions.setExerciseType(ExerciseType.TEST));
    }

    route.push(`/${locale}/tests/${routeType}/${activeExercise}`);
  };
  return (
    <Button onClick={handleClick} type='button'>
      {t('button.begin')}
    </Button>
  );
};

export default TestButtonCard;
