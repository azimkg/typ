'use client';
import { FC, useState } from 'react';
import Button from 'common/button/Button';
import { setCookie } from 'cookies-next';
import { trainingCourseList } from 'helpers/coursesList';
import { useTranslation } from 'react-i18next';
import cls from './templateCourseSelect.module.css';


interface ITemplateCourseSelect {
  handleClose: () => void
  activeCourse: string
}

const TemplateCourseSelect: FC<ITemplateCourseSelect> = ({ handleClose, activeCourse }) => {
  const [typeCourse, setTypeCourse] = useState(activeCourse);
  const { t } = useTranslation();
  const handleChangeCourse = () => {
    setCookie('course-training', typeCourse);
    window.location.reload();
    handleClose();
  };
  return (
    <div className={cls.template}>
      <p>Выбор курса</p>
      <div className={cls.courses}>
        <Button
          onClick={() => setTypeCourse(trainingCourseList[0])}
          white={typeCourse !== trainingCourseList[0]}

        >
          {t(`course-progress.courses.${trainingCourseList[0]}`)}
        </Button>
        <Button
          onClick={() => setTypeCourse(trainingCourseList[1])}
          white={typeCourse !== trainingCourseList[1]}

        >
          {t(`course-progress.courses.${trainingCourseList[1]}`)}
        </Button>
        <Button
          onClick={() => setTypeCourse(trainingCourseList[2])}
          white={typeCourse !== trainingCourseList[2]}

        >
          {t(`course-progress.courses.${trainingCourseList[2]}`)}
        </Button>
        <Button
          onClick={() => setTypeCourse(trainingCourseList[3])}
          white={typeCourse !== trainingCourseList[3]}

        >
          {t(`course-progress.courses.${trainingCourseList[3]}`)}
        </Button>
      </div>
      <div className={cls.actions}>
        <Button white onClick={handleClose} >{t('button.cancel')}</Button>
        <Button onClick={handleChangeCourse} >{t('button.apply')}</Button>
      </div>
    </div>
  );
};

export default TemplateCourseSelect;
