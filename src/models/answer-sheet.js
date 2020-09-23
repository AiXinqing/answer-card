import Student from './student'

export const SHEET_SIZE = {
  A3: 'A3',
  A4: 'A4'
}

export const SHEET_SIZE_LABEL = {
  [SHEET_SIZE.A4]: 'A4/B5纸',
  [SHEET_SIZE.A3]: 'A3/B4/8K纸'
}

export const SHEET_COLUMN = {
  [SHEET_SIZE.A3]: [2, 3],
  [SHEET_SIZE.A4]: [1]
}

export default class AnswerSheet {
  static get AllowedSheetSize () {
    return Object.values(SHEET_SIZE)
  }

  constructor (attrs = {}) {
    this.title = attrs.title || ''
    this.settings = {}
    this.studentInfos = new Student(attrs.studentInfos)

    this.updateSettings({
      size: this.constructor.AllowedSheetSize.includes(attrs.settings.size)
        ? attrs.settings.size
        : SHEET_SIZE.A3,
      column: attrs.settings.column
    })
  }

  get ticketNumberRange () {
    return (this.settings.size === SHEET_SIZE.A3) && (this.settings.column === 3)
      ? [4, 9]
      : [4, 12]
  }

  get allowedColumns () {
    return SHEET_COLUMN[this.settings.size]
  }

  updateSettings ({
    size,
    column
  }) {
    if (this.constructor.AllowedSheetSize.includes(size)) {
      if (this.settings.size !== size) {
        this.settings.size = size
        this.settings.column = this.allowedColumns.includes(column)
          ? column
          : this.allowedColumns.includes(this.settings.column)
            ? this.settings.column
            : this.allowedColumns[0]
      }
      if (this.allowedColumns.includes(column)) {
        this.settings.column = column
      }
    }
  }

  toJSON () {
    return {
      ...this,
      studentInfos: this.studentInfos.toJSON()
    }
  }
}
