import Question from './base'
import Choice from './choice'

export default class SingleChoiceQuestion extends Question {
  static get Title () {
    return '单选题'
  }

  constructor (attrs) {
    super(attrs)
    this.title = attrs.title || SingleChoiceQuestion.Title
    this.groupSize = 5
    this.groups = attrs.groups || []

    this.buildSubquestions(attrs)
  }

  buildSubquestions ({ groups, subquestions }) {
    if (groups && groups.length) {
      this.subquestions = this.buildSubquestionsFromGroups(groups)
    } else {
      this.subquestions = subquestions.map(this.buildSubquestion)
    }
  }

  buildSubquestionsFromGroups (groups) {
    return groups.reduce((acc, group) => {
      return acc.concat(
        Array.from({ length: (group.endNumber - group.startNumber + 1) })
          .map((_, index) => {
            return this.buildSubquestion({
              serialNumber: group.startNumber + index,
              score: group.score,
              optionLength: group.optionLength
            })
          })
      )
    }, [])
  }

  updateGroups (groups) {
    this.buildSubquestions({
      groups
    })
  }

  buildSubquestion (attrs) {
    return new Choice(attrs)
  }
}
