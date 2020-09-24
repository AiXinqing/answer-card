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

// 只有符合 compare 条件的答题卡尺寸才能使用对应的 range
const SHEET_NUMBER_RANGES = [
  {
    range: [4, 9],
    compare ({ size, column }) {
      return (size === SHEET_SIZE.A3) && (column === SHEET_COLUMN[SHEET_SIZE.A3][1])
    }
  },
  {
    range: [4, 12],
    compare ({ size, column }) {
      return (size !== SHEET_SIZE.A3) || (column !== SHEET_COLUMN[SHEET_SIZE.A3][1])
    }
  },
  {
    // 默认的考号范围，该值一定要放最后，以确保前面的匹配不到的时候才会使用该值
    range: [4, 12],
    compare () {
      return true
    }
  }
]

export default class AnswerSheet {
  static get AllowedSheetSize () {
    return Object.values(SHEET_SIZE)
  }

  constructor (attrs = {}) {
    const settings = attrs.settings || {}
    this.title = attrs.title || ''
    this.settings = {}
    this.student = new Student(attrs.student, this)

    this.updateSettings({
      size: this.constructor.AllowedSheetSize.includes(settings.size)
        ? settings.size
        : SHEET_SIZE.A3,
      column: settings.column
    })

    this.setSheetNumberLength(attrs.sheetNumberLength || 12)
  }

  // 准考证号的范围
  get sheetNumberRange () {
    return SHEET_NUMBER_RANGES.find(range => range.compare(this.settings)).range
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
    this.setSheetNumberLength(this.sheetNumberLength)
  }

  // 设置准考证号的长度
  setSheetNumberLength (length) {
    const [min, max] = this.sheetNumberRange
    this.sheetNumberLength = Math.min(Math.max(min, length), max)
  }

  toJSON () {
    return {
      ...this,
      student: this.student.toJSON()
    }
  }
}
