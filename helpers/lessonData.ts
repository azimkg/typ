import { Lesson } from 'common/lessonCard/LessonCard';
import { Letters, Word } from 'components/common/exersiceForTests/ExersiceForTests';
import { Test } from 'components/common/testCard/TestCard';
import { IMainProgressData } from '../types/commonTypes';


export const LESSONS: Lesson[] = [
  {
    id: 1,
    title: 'Слепая печать',
    lessonNumber: 1,
    progress: 100,
    stars: 32,
    totalStars: 23,
    activeExercise: 1,
    exercisesCount: 4,
    results: {
      speed: 0,
      accuracy: 0,
      spendTime: '',
    }
  },
  {
    id: 2,
    title: 'Слепая печать',
    lessonNumber: 1,
    progress: 0,
    activeExercise: 2,
    exercisesCount: 4,
    results: {
      speed: 0,
      accuracy: 0,
      spendTime: '',
    }
  },
  {
    id: 3,
    title: 'Стандартный урок',
    lessonNumber: 1,
    progress: 50,
    stars: 2,
    totalStars: 32,
    activeExercise: 3,
    exercisesCount: 4,
    results: {
      speed: 0,
      accuracy: 0,
      spendTime: '',
    }
  },{
    id: 4,
    title: 'Урок кодинга',
    lessonNumber: 1,
    progress: 70,
    stars: 2,
    totalStars: 32,
    activeExercise: 4,
    exercisesCount: 4,
    results: {
      speed: 0,
      accuracy: 0,
      spendTime: '',
    }
  },
  {
    id: 5,
    title: 'Тестовый урок',
    lessonNumber: 1,
    progress: 0,
    type: 'test',
    timeTest: '1:00',
    activeExercise: 5,
    exercisesCount: 4,
    results: {
      speed: 56,
      accuracy: 90,
      spendTime: '90',
    }
  }
];

export const TESTS_WORDS: Test[] = [
  {
    id: 1,
    activeTest: 1,
    title: '10 слов',
    type: 'word'
  },
  {
    id: 2,
    activeTest: 2,
    title: '20 слов',
    type: 'word'
  },
  {
    id: 3,
    activeTest: 3,
    title: '50 слов',
    type: 'word'
  },
  {
    id: 4,
    activeTest: 4,
    title: '100 слов',
    type: 'word'
  }
];

export const TESTS_TIME: Test[] = [
  {
    id: 1,
    activeTest: 1,
    title: '15 секунд',
    type:'time'
  },
  {
    id: 2,
    activeTest: 2,
    title: '30 секунд',
    type:'time'
  },
  {
    id: 3,
    activeTest: 3,
    title: '60 секунд',
    type:'time'
  },
  {
    id: 4,
    activeTest: 4,
    title: '120 секунд',
    type:'time'
  }
];

export type Block = {
  id: number,
  name: string,
  lessons: Lesson[]
}

export type Education = {
  basic: {
    progress: number
    blocks: Block[]
  }
}
export interface ICourse {
  result: IMainProgressData
  education: Education
}

export const course: ICourse = {
  result: {
    progress: 0,
    rate: 0,
    accuracy: 0,
    spendTime: '0',
  },
  education: {
    basic: {
      progress: 0,
      blocks: [
        {
          id: 1,
          name: 'Блок',
          lessons: LESSONS,
        }
      ],
    }
  }
};
const exercises = [
  {
    id: 1,
    title: 'Название задания',
    exerciseType: 'new letter',
    exerciseLetter: 'a'
  },
  {
    id: 2,
    title: 'Название задания',
    exerciseType: 'new letter',
    exerciseLetter: 'b'
  }
];

export const TEST_LETTER:Letters[] = [
  {
    id: 1,
    words: ['The life story of American physicist Robert', 'Oppenheimer, who led the first development ', 'of nuclear weapons.'],
    time:15
  },
  {
    id: 2,
    words: ['The life story of American physicist Robert', 'Oppenheimer, who led the first development ', 'of nuclear weapons.'],
    time:30
  },
  {
    id: 3,
    words: ['The life story of American physicist Robert', 'Oppenheimer, who led the first development ', 'of nuclear weapons.'],
    time:60
  },
  {
    id: 3,
    words: ['The life story of American physicist Robert', 'Oppenheimer, who led the first development ', 'of nuclear weapons.'],
    time:120
  },
]


export type Tests = {
  id: number,
  name: string,
  tests: Test[]
}

export type EducationTest = {
  time: {
    progress: number
    blocks: Tests[]
  }
  word: {
    progress: number
    blocks: Tests[]
  }
}
export interface ITest {
  result: IMainProgressData
  educations: EducationTest
}

export const test: ITest = {
  result: {
    progress: 0,
    rate: 0,
    accuracy: 0,
    spendTime: '0',
  },
  educations: {
    time: {
      progress: 0,
      blocks: [
        {
          id: 1,
          name: 'Тесты на время',
          tests: TESTS_TIME,
        }
      ],
    },
    word: {
      progress: 0,
      blocks: [
        {
          id: 1,
          name: 'Тесты на слова',
          tests: TESTS_WORDS,
        }
      ],
    }
  }
};

export const WORDS: Word[] = [
  {
    id: 1,
    words: [ 'When painting a picture of spring nature', 'Fet uses a one-part composition' ]
  },
  {
    id: 2,
    words: [ 'It all starts with an everyday, everyday', 'picture, which the poet describes in', 'broad strokes: the first stanza of the', 'poem creates the background and sets' ]
  },
  {
    id: 3,
    words: [ 'This is a lyrical poem: the description', 'of nature is given through the eyes of', 'a lyrical hero, we see his worldview.', 'This poetic sketch shows how subtly', 'the poet could see the beautiful in the', 'most ordinary things. The images of the lyrical', 'hero and the author in the work are', 'fused together.' ]
  },
  {
    id: 4,
    words: [ 'This is a lyrical poem: the description', 'of nature is given through the eyes of', 'a lyrical hero, we see his worldview.', 'This poetic sketch shows how subtly', 'the poet could see the beautiful in the', 'most ordinary things. The images of the lyrical', 'hero and the author in the work are', 'fused together.', 'When painting a picture of spring nature', ' Fet uses a one-part composition.' ]
  }
];