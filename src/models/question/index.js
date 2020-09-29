import JudgmentChoiceQuestion from './judgment-choice'
import MultipleChoiceQuestion from './multiple-choice'
import SingleChoiceQuestion from './single-choice'

export const SUPPORTED_QUESTION = {
  objectiveQuestions: [
    SingleChoiceQuestion,
    MultipleChoiceQuestion,
    JudgmentChoiceQuestion
  ],
  subjectiveQuestions: []
}

export const QUESTION_NUMBERS = [
  '一', '二', '三', '四', '五',
  '六', '七', '八', '九', '十',
  '十一', '十二', '十三', '十四', '十五',
  '十六', '十七', '十八', '十九', '二十',
  '二十一', '二十二', '二十三', '二十四'
]
