'use client';
import { FC, useState } from 'react';
import FlagRu from '@icons/flag-ru.svg';
import Dropdown from 'common/dropdown/Dropdown';
import LanguageChange from 'components/header/languageChange/LanguageChange';
import ClientProviders from 'components/providers/clientProviders/ClientProviders';
import cls from './dropdownLanguage.module.css';


interface IDropdownLanguageProps {
  lan: string
}
const DropdownLanguage: FC<IDropdownLanguageProps> = ({ lan }) => {
  const [ isShow, setIsShow ] = useState(false);
  const handleToggle = () => {
    setIsShow(!isShow);
  };
  const handleClose = () => {
    setIsShow(false);
  };
  return (
    <Dropdown
      content={
        <div onClick={handleToggle} className={cls.template}>
          <FlagRu/>
          <p>{lan}</p>
        </div>}
      isShow={isShow}
      onClose={handleClose}
      className={cls.dropdown}
    >
      <ClientProviders>
        <LanguageChange onClose={handleClose}/>
      </ClientProviders>
    </Dropdown>
  );
};

export default DropdownLanguage;
