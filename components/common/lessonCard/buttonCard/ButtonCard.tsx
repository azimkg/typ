'use client';
import { FC } from 'react';
import Button from 'common/button/Button';
import { ButtonHeight } from 'common/button/buttonSchema';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { exerciseActions } from 'models/exercise/slice/exerciseSlice';
import { ExerciseType } from 'models/exercise/types/exerciseSchema';
import { useParams, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';


type ButtonCardProps = {
  progress?: number
  type: 'test' | 'default',
  activeExercise: number
}
const buttonTextsList = new Map([
  [
    'default',
    {
      0: 'button.begin',
      100: 'button.repeat',
      'default': 'button.continue'
    }
  ],
  [
    'test',
    {
      0: 'button.begin',
      100: 'button.another-one',
      'default': 'button.continue'
    }
  ]
]);
const ButtonCard: FC<ButtonCardProps> = ({ progress, type, activeExercise }) => {
  const { t } = useTranslation();
  const text = buttonTextsList.get(type)![progress !== 100 && progress !== 0 ? 'default' : progress];
  const { locale, type: routeType } = useParams<{ locale: string, type: string }>();
  const dispatch = useAppDispatch();
  const route = useRouter();
  const handleClick = () => {
    if (activeExercise === 2) {
      dispatch(exerciseActions.setExerciseType(ExerciseType.DROP_LETTER));
    }
    if (activeExercise === 3) {
      dispatch(exerciseActions.setExerciseType(ExerciseType.STANDARD));
    }
    if (activeExercise === 4) {
      dispatch(exerciseActions.setExerciseType(ExerciseType.CODING));
    }
    if (activeExercise === 5) {
      dispatch(exerciseActions.setExerciseType(ExerciseType.TEST));
    }
    if (activeExercise === 6) {
      dispatch(exerciseActions.setExerciseType(ExerciseType.TEST));
    }
    route.push(`/${locale}/lessons/${routeType}/${activeExercise}`);
  };
  return (
    <Button onClick={handleClick} type='button' white={progress === 100}>
      {t(text)}
    </Button>
  );
};

export default ButtonCard;
