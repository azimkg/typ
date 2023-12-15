import React, { FC } from 'react';
import AurCoin from '@icons/AurCoin.svg';
import Coin from '@icons/Coin.svg';
import { useTranslation } from 'react-i18next';
import TooltipContent from '../tooltip/Tooltip';
import cls from './resultLesson.module.css';


interface SuccessResultProps {
  accuracy: number;
}

const TEST = {
  'one-coint': {
    icons: (
      <>
        <Coin className='one' />
        <AurCoin className='two' />
        <AurCoin className='three' />
      </>
    ),
    text: 'result.one-coin',
  },
  'two-coint': {
    icons: (
      <>
        <Coin className='one' />
        <Coin className='two' />
        <AurCoin className='three' />
      </>
    ),
    text: 'result.two-coin',
  },
  'three-coint': {
    icons: (
      <>
        <Coin className='one' />
        <Coin className='two' />
        <Coin className='three' />
      </>
    ),
    text: 'result.three-coin',
  },
};

const SuccessResult: FC<SuccessResultProps> = ({ accuracy }) => {
  const { t } = useTranslation();
  const result = accuracy >= 60 && accuracy < 90 ? 'one-coint' : accuracy >= 90 && accuracy < 95 ? 'two-coint' : 'three-coint';

  return (
    <div className={cls.result_coins}>
      <div>
        {TEST[result].icons}
        <TooltipContent anchorSelect='.one' content={t('tooltip.one-coin')} />
        <TooltipContent anchorSelect='.two' content={t('tooltip.two-coin')} />
        <TooltipContent anchorSelect='.three' content={t('tooltip.three-coin')} />
      </div>
      <p>{t(TEST[result].text)}</p>
    </div>
  );
};

export default SuccessResult;
