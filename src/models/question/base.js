export default class Question {
  static get Title () {
    return ''
  }

  constructor (attrs, sheet) {
    this.serialNumber = attrs.serialNumber || 0
    this.title = attrs.title || this.constructor.Title
    this.subquestions = []
    this.sheet = sheet
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

  isSerialNumberValid (number) {
    return !this.serialNumberSet.has(number)
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
