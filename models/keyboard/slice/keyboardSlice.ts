import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCookie, setCookie } from 'cookies-next';
import { determineLanguage } from 'helpers/determineLanguage';
import { resetResult, result, setResult, setStartTime } from 'helpers/determineResult';
import { IKeyboardSchema } from '../types/keyboardSchema';


const initialState: IKeyboardSchema = {
  keyboardLn: getCookie('keyboardLn')?.toString() || 'ru',
  keyboardVisible: true,
  handsVisible: true,
  currentLetter: '',
  index: 0,
  errorIndex: [],
  nextKey: null,
  isNotValidSettingKeyboard: false,
  settingsModal: false,
  typeValidate: 'full'
};

let currentKey: string | null = null;
const handleValidate = (errors: number[], typeValidate: 'full' | 'half' = 'full', key: string = ''): boolean => {
  if(typeValidate === 'half') {
    return errors[errors.length - 1] - errors[errors.length - 2] <= 1;
  }
  return currentKey !== key;
};
const keyboardSlice = createSlice({
  name: 'keyboard',
  initialState,
  reducers:{
    setKeyboardLn: (state, action: PayloadAction<string>) => {
      state.keyboardLn = action.payload;
      setCookie('keyboardLn', action.payload);
    },
    setKeyboardVisible: (state, action: PayloadAction<boolean>) => {
      state.keyboardVisible = action.payload;
    },
    setHandsVisible: (state, action: PayloadAction<boolean>) => {
      state.handsVisible = action.payload;
    },
    setSettingsModal: (state, action: PayloadAction<boolean>) => {
      state.settingsModal = action.payload;
    },
    setCurrentLetter: (state, action: PayloadAction<string>) => {
      const letterLanguage = determineLanguage(action.payload);
      state.currentLetter = action.payload;
      state.nextKey =  action.payload[0];
      state.keyboardLn = letterLanguage;
    },
    handleChangeKeyboard: (state) => {
      if (handleValidate(state.errorIndex, state.typeValidate, state.currentLetter[state.index]) || state.isNotValidSettingKeyboard === true) {
        if(state.typeValidate === 'half') {
          state.errorIndex = handleValidate(state.errorIndex, state.typeValidate) ? state.errorIndex.slice(0, -1): state.errorIndex;
        } else {
          state.errorIndex = [];
        }
        return;
      }
      setStartTime();
      const nextIndex = state.index + 1;
      state.index = nextIndex;
      state.nextKey = state.index === state.currentLetter.length ? null : state.currentLetter[nextIndex];
    },
    handleSetNull: (state, action: PayloadAction<string>) => {
      const keyLayout = determineLanguage(action.payload);
      if(!(state.keyboardLn === keyLayout)) {
        state.isNotValidSettingKeyboard = true;
        return;
      }
      if (action.payload === state.currentLetter[state.index]) {
        setResult(state.nextKey!);
        state.nextKey = null;
        currentKey = action.payload;
        
        return;
      }
      if(state.nextKey !== null) {
        currentKey = action.payload;
        state.errorIndex.push(state.index);
        setResult(state.nextKey!, 'error');
      }
    },
    handleReset: (state) => {
      state.nextKey = state.currentLetter[0];
      state.errorIndex = [];
      state.index = 0;
      resetResult();
    },
    handleDelete: (state) => {
      const prev = state.index ? state.index - 1 : 0;
      state.index = prev;
      state.nextKey = state.currentLetter[prev];
      if(state.errorIndex.includes(prev)) {
        state.errorIndex.pop();
      }
    },
    handleChangeValidate:(state, action:PayloadAction<'half'|'full'>)=>{
      state.typeValidate = action.payload;
    }
  }
});

export const { actions: keyboardActions, reducer: keyboardReducer } = keyboardSlice;
