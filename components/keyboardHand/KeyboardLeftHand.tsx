'use-client';
import React, { useMemo } from 'react';
import { keyImagesEnLeft } from 'helpers/KeyboardHandsImages';
import { getActiveKeyLeft } from 'models/keyboard/selectors/keyboardSelectors';
import { useSelector } from 'react-redux';
import LeftHand from '../../assets/hands/left-resting-hand.svg';


const KeyboardLeftHand = () => {
  const activeKey = useSelector(getActiveKeyLeft);
  const activeKeyImage = useMemo(() => {
    if (activeKey?.key === undefined) {
      return <LeftHand />;
    }
    const test = activeKey?.key.toLowerCase();

    const X = keyImagesEnLeft[activeKey?.key?.toLowerCase()];
    return <X />;

  }, [activeKey]);


  return (
    <div>
      {
        activeKeyImage
      }
    </div>
  );
};

export default KeyboardLeftHand;