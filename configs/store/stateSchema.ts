import { IExerciseSchema } from 'models/exercise/types/exerciseSchema';
import { IKeyboardSchema } from 'models/keyboard/types/keyboardSchema';
import { IUserSchema } from 'models/user/types/userTypes';


export interface StateSchema {
  user:IUserSchema
  keyboard: IKeyboardSchema
  exercise: IExerciseSchema
}
