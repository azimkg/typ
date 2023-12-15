export type User = {
  fullName: string
  password: string
  email: string
}
export enum ModalAuthStage {
  LOGIN,
  PASSWORD_CREATE,
  FORGOT_PASSWORD,
  CREATE_NEW_PASSWORD,
  SING_IN_PASSWORD,
  REGISTER
}
export interface IUserSchema {
  user: User | null
  users: User[]
  modalAuthVisible: boolean
  authStage: ModalAuthStage
}
