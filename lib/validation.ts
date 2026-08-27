/**
 * Validation & Sanitization Utilities for Real Estate Contact Forms
 */

// Vietnamese Name Regex (Only Vietnamese letters, Latin letters and spaces)
const VIETNAMESE_NAME_REGEX = /^[a-zA-ZàáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÈÉẺẼẸÊỀẾỂỄỆĐÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỮỰỲÝỶỸỴ\s]+$/

// Valid Vietnamese Mobile Phone Regex (10 digits starting with 03, 05, 07, 08, 09)
const VIETNAMESE_PHONE_REGEX = /^(03|05|07|08|09)[0-9]{8}$/

/**
 * Filter phone keystrokes in real-time:
 * Only allows digits (0-9) and '+' only as the first character (for +84 case)
 */
export function filterPhoneInput(val: string): string {
  if (!val) return ''
  // Allow '+' only at index 0, filter out all other non-digits
  if (val.startsWith('+')) {
    return '+' + val.slice(1).replace(/\D/g, '')
  }
  return val.replace(/\D/g, '')
}

/**
 * Sanitize and normalize phone number
 * - Strips whitespace, dots, dashes, parentheses, commas
 * - Converts +84 or 84 prefix to 0
 */
export function sanitizePhone(raw: string): string {
  if (!raw) return ''
  let cleaned = raw.trim().replace(/[\s.\-(),]/g, '')
  // Replace leading +84 or 84 with 0
  if (cleaned.startsWith('+84')) {
    cleaned = '0' + cleaned.slice(3)
  } else if (cleaned.startsWith('84') && cleaned.length > 9) {
    cleaned = '0' + cleaned.slice(2)
  }
  // Keep only digits
  return cleaned.replace(/\D/g, '')
}

/**
 * Validate Vietnamese Phone Number
 */
export function validatePhone(raw: string): { isValid: boolean; error?: string; sanitized: string } {
  if (!raw || raw.trim() === '') {
    return { isValid: false, error: 'Vui lòng nhập số điện thoại', sanitized: '' }
  }

  const sanitized = sanitizePhone(raw)

  if (!sanitized || sanitized.length === 0) {
    return {
      isValid: false,
      error: 'Số điện thoại không hợp lệ. Vui lòng chỉ nhập số',
      sanitized,
    }
  }

  // 1. Phải bắt đầu bằng số 0 (hoặc +84 đã được chuẩn hoá về 0)
  if (!sanitized.startsWith('0')) {
    return {
      isValid: false,
      error: 'Số điện thoại phải bắt đầu bằng số 0 (hoặc +84), ví dụ: 09xx xxx xxx',
      sanitized,
    }
  }

  // 2. Cảnh báo các đầu số 11 số cũ (012x, 016x, 018x, 019x) đã chuyển đổi
  if (sanitized.startsWith('01')) {
    return {
      isValid: false,
      error: 'Các đầu số 11 số cũ (012x, 016x, 018x, 019x) đã chuyển đổi sang 10 số (03x, 07x, 08x). Vui lòng nhập số 10 chữ số hiện tại',
      sanitized,
    }
  }

  // 3. Kiểm tra độ dài quá dài
  if (sanitized.length > 10) {
    return {
      isValid: false,
      error: `Số điện thoại quá dài (${sanitized.length} số). Số di động tại Việt Nam bắt buộc đúng 10 chữ số`,
      sanitized,
    }
  }

  // 4. Kiểm tra độ dài chưa đủ
  if (sanitized.length < 10) {
    return {
      isValid: false,
      error: `Số điện thoại còn thiếu (${sanitized.length}/10 số). Vui lòng nhập đủ 10 chữ số`,
      sanitized,
    }
  }

  // 5. Kiểm tra đầu số di động hợp lệ (03, 05, 07, 08, 09)
  if (!VIETNAMESE_PHONE_REGEX.test(sanitized)) {
    return {
      isValid: false,
      error: 'Đầu số không hợp lệ. Số di động tại Việt Nam phải bắt đầu bằng (03, 05, 07, 08, 09)',
      sanitized,
    }
  }

  return { isValid: true, sanitized }
}

/**
 * Validate Full Name
 */
export function validateName(name: string): { isValid: boolean; error?: string; sanitized: string } {
  const sanitized = name.trim().replace(/\s+/g, ' ')

  if (!sanitized) {
    return { isValid: false, error: 'Vui lòng nhập họ và tên', sanitized }
  }

  if (sanitized.length < 2) {
    return { isValid: false, error: 'Họ và tên phải có ít nhất 2 ký tự', sanitized }
  }

  if (sanitized.length > 50) {
    return { isValid: false, error: 'Họ và tên không được vượt quá 50 ký tự', sanitized }
  }

  if (!VIETNAMESE_NAME_REGEX.test(sanitized)) {
    return {
      isValid: false,
      error: 'Họ và tên chỉ được chứa chữ cái tiếng Việt, không chứa số hoặc ký tự đặc biệt',
      sanitized,
    }
  }

  return { isValid: true, sanitized }
}

/**
 * Validate Unit Type
 */
export function validateUnitType(type: string): { isValid: boolean; error?: string } {
  if (!type || type.trim() === '') {
    return { isValid: false, error: 'Vui lòng chọn loại căn quan tâm' }
  }
  return { isValid: true }
}

/**
 * Validate Note
 */
export function validateNote(note?: string): { isValid: boolean; error?: string; sanitized: string } {
  if (!note) return { isValid: true, sanitized: '' }
  const sanitized = note.trim()
  if (sanitized.length > 500) {
    return { isValid: false, error: 'Ghi chú không được vượt quá 500 ký tự', sanitized }
  }
  return { isValid: true, sanitized }
}
