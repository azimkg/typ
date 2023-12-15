'use-client';
import React, { useMemo } from 'react';
import { keyImagesEnRight } from 'helpers/KeyboardHandsImages';
import { getActiveKeyRight } from 'models/keyboard/selectors/keyboardSelectors';
import { useSelector } from 'react-redux';
import RightHand from '../../assets/hands/right-resting-hand.svg';


const KeyboardRightHand = () => {
  const activeKey = useSelector(getActiveKeyRight);
  const activeKeyImage = useMemo(() => {
    if (activeKey?.key !== undefined) {
      const X = keyImagesEnRight[activeKey?.key?.toLowerCase()];
      return <X />;
    }
    return <RightHand />;
  }, [activeKey]);


  return (
    <div>
      {
        activeKeyImage
      }
    </div>
  );
};

export default KeyboardRightHand;