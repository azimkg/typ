'use client';
import React from 'react';
import FormCheckEmail from 'components/form/AuthForms/FormCheckEmail';
import FormCheckPassword from 'components/form/AuthForms/FormCheckPassword';
import FormEmailAuth from 'components/form/AuthForms/FormEmailAuth';
import FormPasswordRecovery from 'components/form/AuthForms/FormPasswordRecovery';
import FormPasswordSignUp from 'components/form/AuthForms/FormPasswordSignUp';
import FormSignUp from 'components/form/AuthForms/FormSignUp';
import { getStageAuth } from 'models/user/selectors/userSelector';
import { ModalAuthStage } from 'models/user/types/userTypes';
import { useSelector } from 'react-redux';


const ModalAuthContent = () => {
  const stageAuth = useSelector(getStageAuth);
  switch (stageAuth) {
  case ModalAuthStage.PASSWORD_CREATE:
    return <FormPasswordSignUp />;
  case ModalAuthStage.SING_IN_PASSWORD:
    return <FormCheckPassword />;
  case ModalAuthStage.FORGOT_PASSWORD:
    return <FormCheckEmail />;
  case ModalAuthStage.REGISTER:
    return <FormSignUp />;
  case ModalAuthStage.CREATE_NEW_PASSWORD:
    return <FormPasswordRecovery />;
  default:
    return <FormEmailAuth />;
  }
};

export default ModalAuthContent;
