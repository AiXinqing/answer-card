export default class Question {
  static get Title () {
    return ''
  }

  constructor (attrs) {
    this.serialNumber = attrs.serialNumber || 0
    this.title = attrs.title || this.constructor.Title
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

  get serialNumberSet () {
    return new Set(this.subquestions.map(question => question.serialNumber))
  }

  toJSON () {
    return {
      type: this.constructor.name,
      title: this.title,
      serialNumber: this.serialNumber,
      subquestions: this.subquestions.map(question => question.toJSON())
    }
  }
}
