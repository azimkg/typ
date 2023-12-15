import { FC, useEffect } from 'react';
import classes from 'classnames';
import Button from 'common/button/Button';
import ClientProviders from 'components/providers/clientProviders/ClientProviders';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { exerciseActions } from 'models/exercise/slice/exerciseSlice';
import { StageExercise } from 'models/exercise/types/exerciseSchema';
import { useTranslation } from 'react-i18next';
import cls from './descriptionLesson.module.css';


interface DescriptionLessonProps {
  text: string
  className?: string
}

const DescriptionLesson: FC<DescriptionLessonProps> = ({ text, className }) => {
  const dispatch = useAppDispatch();
  const handleStart = () => {
    dispatch(exerciseActions.setStage(StageExercise.START));
  };
  const handlePress = (e: KeyboardEvent) => {
    if (e.code === 'Enter') {
      handleStart();
    }
  };
  useEffect(() => {
    window.document.addEventListener('keypress', handlePress);
    return () => {
      window.document.removeEventListener('keypress', handlePress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { t } = useTranslation();
  return (
    <div className={classes(cls.content, className ?? '')}>
      <div className={cls.content_text}>
        <div dangerouslySetInnerHTML={{ __html: text }} />
        <ClientProviders>
          <Button onClick={handleStart} type='button' className={cls.btn} >
            {t('button.start')} 
            <span className={cls.btn_content}>(enter)</span>
          </Button>
        </ClientProviders>
      </div>
    </div>
  );
};

export default DescriptionLesson;
