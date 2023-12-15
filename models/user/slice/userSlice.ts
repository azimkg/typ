import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserSchema, ModalAuthStage, User } from '../types/userTypes';


const USER_LIST: User[] = [
  {
    fullName: 'Ганин Никалаевич',
    email: 'ganin_nick@mail.ru',
    password: '1q2w3e4r'
  },
  {
    fullName: 'Лязет Арзыматова',
    email: 'lazet_arzu@mail.ru',
    password: 'Zaq12w'
  }
];
const USER = {
  fullName: 'Ганин Никалаевич',
  email: 'ganin_nick@mail.ru',
  password: '1q2w3e4r'
};

const initialState: IUserSchema = {
  user: null,
  users: USER_LIST,
  modalAuthVisible: false,
  authStage: 0
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    handleChangeModalAuth: (state, action: PayloadAction<boolean>) => {
      state.modalAuthVisible = action.payload;
    },
    handleChangeStageAuth: (state, action: PayloadAction<ModalAuthStage>) => {
      state.authStage = action.payload;
    },
    onHasEmail: (state, action: PayloadAction<string>) => {
      const isUser = state.users.find((user: User) => user.email.toLowerCase() === action.payload.toLowerCase());
      if(isUser) {
        state.user = isUser;
        state.authStage = ModalAuthStage.SING_IN_PASSWORD;
        return;
      }
      state.authStage = ModalAuthStage.PASSWORD_CREATE;
    },
    onCheckPassword: (state, action: PayloadAction<string>) => {
      state.user = USER;
      state.modalAuthVisible = false;
    },
    onCreateUser: (state) => {
      state.user = USER;
      state.modalAuthVisible = false;
    },
    handleCreateNewPassword: (state) => {
      state.user = USER;
      state.modalAuthVisible = false;
    },
    handleLogout: (state) => {
      state.user = null;
    }
  },
});

export const {
  actions: userActions,
  reducer: userReducer,
  name: userName
} = userSlice;
