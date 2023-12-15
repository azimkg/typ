import React, { FC } from 'react';
import Course from '@icons/get_course.svg';
import classes from 'classnames';
import Button from '../button/Button';
import cls from './testResult.module.css';


const TimeCertificate = () => {
  return (
    <div className={cls.certificate_time}>
      <div className={cls.certificate_block}>
        <Course />
        <div>
          <h2>Хочешь печатать быстрее?</h2>
          <p>Пройди наш курс слепой печати и подними скорость печати</p>
        </div>
      </div>
      <Button className={classes(cls.btn_white, 'repeat')} white={true} >
        Начать
      </Button>
    </div>
  );
};

export default TimeCertificate;