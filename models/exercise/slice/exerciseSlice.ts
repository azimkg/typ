import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ExerciseType, IExerciseSchema } from '../types/exerciseSchema';


const initialState: IExerciseSchema = {
  stage: 0,
  exerciseType: ExerciseType.NEW_LETTER_START,
  stageTest: 0,
};

const exerciseSlice = createSlice({
  name: 'exercise',
  initialState,
  reducers: {
    setExerciseType: (state, action: PayloadAction<ExerciseType>) => {
      state.exerciseType = action.payload;
    },
    setStage: (state, action: PayloadAction<number>) => {
      state.stage = action.payload;
    },
    setTestStage: (state, action: PayloadAction<number>) => {
      state.stageTest = action.payload;
    }
  }
});

export const { actions: exerciseActions, reducer: exerciseReducer } = exerciseSlice;
