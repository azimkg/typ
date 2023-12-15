import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'configs/store/stateSchema';
import { Rows, keyboard } from 'helpers/KeyboardBtns';
import { keyImagesEnLeft, keyImagesEnRight } from 'helpers/KeyboardHandsImages';
import { ActiveKey } from '../types/keyboardSchema';


const getNextKey = (state: StateSchema) => state.keyboard.nextKey;

export const getActiveKeyLeft = createSelector(getNextKey, (nextKey): ActiveKey | null => {
  if(nextKey === null) return null;
  if (keyImagesEnLeft.hasOwnProperty(nextKey?.toLocaleLowerCase())) {
    return { key: nextKey, location: 0 };
  }
  if(nextKey !== nextKey?.toLocaleLowerCase()) return { key: 'shift', location: 1 };
  return null;
});
export const getActiveKeyRight = createSelector(getNextKey, (nextKey): ActiveKey | null => {
  if(nextKey === null) return null;
  if (keyImagesEnRight.hasOwnProperty(nextKey?.toLocaleLowerCase())) {
    return { key: nextKey, location: 0 };
  }
  if(nextKey !== nextKey?.toLocaleLowerCase()) return { key: 'shift', location: 2 };
  return null;
});
export const getLanguageKeyboard = (state: StateSchema) => state.keyboard.keyboardLn;
export const keyboardRows = createSelector(getLanguageKeyboard, (ln): Rows => {
  return keyboard[ln];
});
export const getKeyboardVisible = (state: StateSchema) => state.keyboard.keyboardVisible;
export const getHandsVisible = (state: StateSchema) => state.keyboard.handsVisible;
export const getKeyboardAndHands = createSelector(getHandsVisible, getKeyboardVisible, (handsVisible, keyboardVisible) => handsVisible && keyboardVisible);
export const getSettingsModal = (state: StateSchema) => state.keyboard.settingsModal;
export const getErrorIndexes = (state: StateSchema) => state.keyboard.errorIndex;
export const getNextIndex = (state: StateSchema) => state.keyboard.index;

export const getLetters = (state: StateSchema) => state.keyboard.currentLetter;
export const getIsNotValidSettingKeyboard = (state: StateSchema) => state.keyboard.isNotValidSettingKeyboard;
export const getProgressExercise = createSelector(getNextIndex, getLetters, (i, text) => text.length === 0 ? 0 : i/text.length*100 );
