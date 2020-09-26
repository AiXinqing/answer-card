import MultipleChoiceQuestion from './multiple-choice'
import SingleChoiceQuestion from './single-choice'

export const SUPPORTED_QUESTION = {
  objectiveQuestions: [
    SingleChoiceQuestion,
    MultipleChoiceQuestion
  ],
  subjectiveQuestions: []
}

export const QUESTION_NUMBERS = [
  '一', '二', '三', '四', '五',
  '六', '七', '八', '九', '十'
]
