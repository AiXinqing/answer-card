export const STUDENT_INFO = {
  candidateNumber: 'CANDIDATE_NUMBER',
  school: 'SCHOOL',
  name: 'NAME',
  class: 'CLASS',
  studentNumber: 'STUDENT_NUMBER'
}

export const STUDENT_INFO_LABEL = {
  [STUDENT_INFO.candidateNumber]: '考号',
  [STUDENT_INFO.school]: '学校',
  [STUDENT_INFO.name]: '姓名',
  [STUDENT_INFO.class]: '班级',
  [STUDENT_INFO.studentNumber]: '学号'
}

export default class Student {
  constructor (attrs = [], sheet) {
    this.sheet = sheet

    this.updateInfos(attrs)
  }

  updateInfos (attrs = []) {
    Object.values(STUDENT_INFO).forEach((attr) => {
      this[attr] = attrs.includes(attr)
    })
  }

  toJSON () {
    return Object.values(STUDENT_INFO).reduce((acc, key) => {
      if (this[key]) acc.push(key)
      return acc
    }, [])
  }
}
