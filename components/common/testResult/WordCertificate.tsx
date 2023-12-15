import React, { FC } from 'react';
import classes from 'classnames';
import Button from '../button/Button';
import cls from './testResult.module.css';


interface WordCertificateProps {
  title: string
}

const WordCertificate: FC<WordCertificateProps> = ({ title }) => {
  return (
    <div className={cls.certificate_word}>
      <p>Сертификат за прохождение теста `{title}` </p>
      <Button className={classes(cls.btn_white, 'repeat')} white={true} >
        Распечатать
      </Button>
    </div>
  );
};

export default WordCertificate;