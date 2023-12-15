import React, { FC } from 'react';
import cls from '../testCard.module.css';


interface TestOfWordsProps {
  title: string
}

const TestOfWords: FC<TestOfWordsProps> = ({ title }) => {
  return (
    <div className={cls.test}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2605_62132)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0Z" fill="#1A75FF" />
          <path d="M11 28V25.8365L12.3091 25.6511L18.1371 10H21.9007L27.6909 25.6511L29 25.8365V28H22.7566V25.8365L24.028 25.614L23.2224 23.1415H16.7776L15.972 25.614L17.2434 25.8365V28H11ZM17.6462 20.4835H22.3538L20.214 14.3146L20.0378 13.7706H19.9622L19.7734 14.3516L17.6462 20.4835Z" fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_2605_62132">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <h2>{title}</h2>
    </div>
  );
};

export default TestOfWords;