import Question from './base'
import MultipleChoiceQuestion from './multiple-choice'
import SingleChoiceQuestion from './single-choice'

export default class ObjectiveQuestion extends Question {
  static get Title () {
    return '客观题'
  }

  constructor (attrs) {
    super(attrs)

    this.title = attrs.title || ObjectiveQuestion.Title

    this.groupSize = attrs.groupSize || 5

    this.subquestions = {
      singleChoice: new SingleChoiceQuestion(attrs.singleChoice),
      multipleChoice: new MultipleChoiceQuestion(attrs.multipleChoice)
    }
  }

  get totalScore () {
    return Object.values(this.subquestions).reduce((acc, question) => {
      return acc + question.totalScore
    }, 0)
  }

  get serialNumberSet () {
    return new Set([
      ...this.subquestions.singleChoice.serialNumberSet,
      ...this.subquestions.multipleChoice.serialNumberSet
    ])
  }

  toJSON () {
    return {
      title: this.title,
      type: this.constructor.name,
      serialNumber: this.serialNumber,
      groupSize: this.groupSize,
      subscriptions: {
        singleChoice: this.subquestions.singleChoice.toJSON(),
        multipleChoice: this.subquestions.multipleChoice.toJSON()
      }
    }
  }
}
