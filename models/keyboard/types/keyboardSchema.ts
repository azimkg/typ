export type ActiveKey = {
    key: string
    location: number
    handIcon?: string
}

export type ResultLesson = {
    [keyof in string]: {
        count: number
        errorCount: number
        time: number
    }
}
export interface IKeyboardSchema {
    keyboardLn: string
    keyboardVisible: boolean
    handsVisible: boolean
    index: number
    errorIndex: number[]
    currentLetter: string
    nextKey: string | null
    isNotValidSettingKeyboard: boolean
    settingsModal: boolean
    typeValidate: 'half' | 'full'
}
