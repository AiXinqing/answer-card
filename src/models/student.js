export default class Student {
  static get AllowedInfos () {
    return ['candidateNumber', 'school', 'name', 'class', 'studentNumber']
  }

  constructor (attrs = []) {
    this.constructor.AllowedInfos.forEach((attr) => {
      this[attr] = attrs.includes(attr)
    })
  }

  toJSON () {
    return this.constructor.AllowedInfos.reduce((acc, key) => {
      acc[key] = this[key]
      return acc
    }, {})
  }
}
