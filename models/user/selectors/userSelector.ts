import { StateSchema } from 'configs/store/stateSchema';


export const getUser = (state: StateSchema) => state.user.user;
export const getModalAuthVisible = (state: StateSchema) => state.user.modalAuthVisible;
export const getStageAuth = (state: StateSchema) => state.user.authStage;
export const getUsers = (state: StateSchema) => state.user.users;
