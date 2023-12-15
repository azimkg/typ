import { test ,course, ICourse, ITest } from 'helpers/lessonData';


export const fetchCourseProgress = async (courseType: string, courseTraining: string): Promise<ICourse> => {
  return course;
};


export const fetchTestProgress = async (testType: string, testTraining: string): Promise<ITest> => {
  return test;
};