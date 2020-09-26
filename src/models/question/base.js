export default class Question {
  static get Title () {
    return ''
  }

  constructor (attrs) {
    this.serialNumber = attrs.serialNumber || 1
    this.subquestions = []
  }

  get totalScore () {
    if (this.subquestions.length) {
      return this.subquestions.reduce((acc, question) => {
        return acc + question.totalScore
      }, 0)
    }
    return this.score || 0
  }
}
