'use client';
import { FC, useState } from 'react';
import Arrow from '@icons/arrow-icon.svg';
import classes from 'classnames';
import Dropdown from 'common/dropdown/Dropdown';
import { useTranslation } from 'react-i18next';
import TemplateCourseSelect from '../templateCourseSelect/TemplateCourseSelect';
import cls from './courseSelection.module.css';


interface ICourseSelectionProps {
  activeCourse: string
}
const CourseSelection: FC<ICourseSelectionProps> = ({ activeCourse }) => {
  const [ iShow, setIsShow ] = useState(false);
  const { t } = useTranslation();
  const handleClose = () => {
    setIsShow(false);
  };
  const handleToggle = () => {
    setIsShow(!iShow);
  };
  return (
    <>
      <Dropdown
        className={cls.dropdown}
        isShow={iShow}
        onClose={handleClose}
        content={
          <>
            <div onClick={handleToggle} className={classes(cls.template, { [cls.active]: iShow })}>
              {t(`course-progress.courses.${activeCourse}`)}
              <Arrow/>
            </div>
          </>}
      >
        <TemplateCourseSelect handleClose={handleClose} activeCourse={activeCourse}/>
      </Dropdown>
    </>
  );
};

export default CourseSelection;
