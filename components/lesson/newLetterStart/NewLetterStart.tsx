import React, { useEffect } from 'react';
import classes from 'classnames';
import Keyboard from 'common/keyboard/Keyboard';
import SmallContainer from 'common/smallContainer/SmallContainer';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { exerciseActions } from 'models/exercise/slice/exerciseSlice';
import { ExerciseType } from 'models/exercise/types/exerciseSchema';
import { getErrorIndexes, getNextIndex } from 'models/keyboard/selectors/keyboardSelectors';
import { keyboardActions } from 'models/keyboard/slice/keyboardSlice';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import cls from './newLetterStart.module.css';


const NewLetterStart = () => {
  const dispatch = useAppDispatch();
  const successIndex = useSelector(getNextIndex);
  const errors = useSelector(getErrorIndexes);
  const { t } = useTranslation();
  useEffect(() => {
    dispatch(keyboardActions.setCurrentLetter('a'));
  }, [ dispatch ]);
  useEffect(() => {
    if(successIndex === 1) {
      dispatch(exerciseActions.setExerciseType(ExerciseType.NEW_LETTER));
      dispatch(keyboardActions.handleReset());
    }
  }, [ successIndex, dispatch ]);
  return (
    <SmallContainer>
      <div className={cls.template}>
        <p>{t('new-letter.start.main')}</p>
        <div>
          <p>{t('new-letter.start.press-keyboard')}</p>
          <span className={classes(cls.letter, { [cls.error]: errors.length })}>a</span>
          <p>{t('new-letter.start.a')}</p>
        </div>
      </div>
      <Keyboard/>
    </SmallContainer>
  );
};

export default NewLetterStart;
