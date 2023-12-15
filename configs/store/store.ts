import { configureStore } from '@reduxjs/toolkit';
import { exerciseReducer } from 'models/exercise/slice/exerciseSlice';
import { keyboardReducer } from 'models/keyboard/slice/keyboardSlice';
import { userReducer } from 'models/user/slice/userSlice';
import { StateSchema } from './stateSchema';


export const store = configureStore<StateSchema>({
  reducer: {
    user: userReducer,
    keyboard: keyboardReducer,
    exercise: exerciseReducer
  },
});
