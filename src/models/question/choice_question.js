import Question from './base'
import Choice from './choice'

export const TRUSTED_ATTR = {
  group: 'gruop',
  subquestion: 'subquestion'
}

export default class ChoiceQuestion extends Question {
  static get Title () {
    return '选择题'
  }

  constructor (attrs) {
    super(attrs)

    this.title = attrs.title || this.constructor.Title
    this.groups = attrs.groups || []

    this.trustAttr = attrs.trustAttr || TRUSTED_ATTR.group

    this.buildSubquestions(attrs)
  }

  buildSubquestions ({ groups, subquestions }) {
    switch (this.trustAttr) {
      case TRUSTED_ATTR.group: {
        this.subquestions = this.buildSubquestionsFromGroups(groups)
        break
      }
      case TRUSTED_ATTR.subquestion: {
        this.subquestions = subquestions.map(this.buildSubquestion)
        break
      }
      default: {
        this.subquestions = []
      }
    }
  }

  buildSubquestionsFromGroups (groups) {
    this.trustAttr = TRUSTED_ATTR.group
    return groups.reduce((acc, group) => {
      return acc.concat(
        Array.from({ length: group.endNumber - group.startNumber + 1 })
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

  buildSubquestion (attrs) {
    return new Choice(attrs)
  }

  updateGroup (group) {
    const index = this.groups.findIndex(g => g.uuid === group.uuid)
    if (index > -1) {
      this.groups.splice(index, 1, group)
      this.buildSubquestionsFromGroups(this.groups)
    }
  }

  addGroup (group) {
    this.groups.push(group)
    this.buildSubquestionsFromGroups(this.groups)
  }

  removeGroup (group) {
    const index = this.groups.findIndex(g => g.uuid === group.uuid)
    if (index) {
      this.groups.splice(index, 1)
      this.buildSubquestionsFromGroups(this.groups)
    }
  }

  updateSubquestion (subquestion) {
    const index = this.subquestions.findIndex(q => q.serialNumber === subquestion.serialNumber)
    if (index > -1) {
      this.trustAttr = TRUSTED_ATTR.subquestion
      this.subquestions.splice(index, 1, this.buildSubquestion(subquestion))
    }
  }

  removeSubquestion (question) {
    const index = this.subquestions.findIndex(q => q.serialNumber === question.serialNumber)
    if (index > -1) {
      this.trustAttr = TRUSTED_ATTR.subquestion
      this.subquestions.splice(index, 1)
    }
  }

  toJSON () {
    return {
      type: this.constructor.name,
      serialNumber: this.serialNumber,
      title: this.title,
      groups: this.groups,
      trustAttr: this.trustAttr,
      subquestions: this.subquestions.map(item => item.toJSON())
    }
  }
}
