import MultipleChoiceQuestion from './multiple-choice'
import SingleChoiceQuestion from './single-choice'

export const SUPPORTED_QUESTION = {
  objectiveQuestions: [
    SingleChoiceQuestion,
    MultipleChoiceQuestion
  ],
  subjectiveQuestions: []
}
