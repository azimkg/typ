import { ResultLesson } from 'models/keyboard/types/keyboardSchema';

// result для получения результата по каждой букве
export let result: ResultLesson = {};
// start и end определение скорости по каждой букве
let start = 0;
let end = 0;
export function setResult(key: string, type: 'error' | 'default' = 'default' ) {
  if(!result.hasOwnProperty(key)) {
    result[key] = {
      count: 0,
      errorCount: 0,
      time: 0
    };
  }
  if(type === 'error') {
    result[key].errorCount++;
    return;
  }
  const startTime = start || performance.now();
  end = performance.now();
  const time =  Math.ceil(end - startTime);

  result[key].time += time;
  result[key].count++;
}
export const setStartTime = () => {
  start = performance.now();
};
export const resetResult = () => {
  result = {};
  start = 0;
  end = 0;
};
