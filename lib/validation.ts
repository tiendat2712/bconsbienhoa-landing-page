/**
 * Validation & Sanitization Utilities for Real Estate Contact Forms
 * Supports Bilingual (Vietnamese & English) Error Messages
 */

export type ValidationLocale = 'vi' | 'en'

// Vietnamese Name Regex (Only Vietnamese letters, Latin letters and spaces)
const VIETNAMESE_NAME_REGEX =
  /^[a-zA-ZàáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÈÉẺẼẸÊỀẾỂỄỆĐÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỮỰỲÝỶỸỴ\s]+$/

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
 * Validate Vietnamese Phone Number with i18n
 */
export function validatePhone(
  raw: string,
  locale: ValidationLocale = 'vi'
): { isValid: boolean; error?: string; sanitized: string } {
  const isEn = locale === 'en'

  if (!raw || raw.trim() === '') {
    return {
      isValid: false,
      error: isEn ? 'Please enter your phone number' : 'Vui lòng nhập số điện thoại',
      sanitized: '',
    }
  }

  const sanitized = sanitizePhone(raw)

  if (!sanitized || sanitized.length === 0) {
    return {
      isValid: false,
      error: isEn
        ? 'Invalid phone number. Please enter digits only'
        : 'Số điện thoại không hợp lệ. Vui lòng chỉ nhập số',
      sanitized,
    }
  }

  // 1. Must start with 0 or +84 normalized
  if (!sanitized.startsWith('0')) {
    return {
      isValid: false,
      error: isEn
        ? 'Phone number must start with 0 (or +84), e.g., 0901 234 567'
        : 'Số điện thoại phải bắt đầu bằng số 0 (hoặc +84), ví dụ: 09xx xxx xxx',
      sanitized,
    }
  }

  // 2. Old 11-digit prefixes converted to 10
  if (sanitized.startsWith('01')) {
    return {
      isValid: false,
      error: isEn
        ? 'Old 11-digit prefixes have converted to 10 digits. Please enter a valid 10-digit number'
        : 'Các đầu số 11 số cũ (012x, 016x, 018x, 019x) đã chuyển đổi sang 10 số. Vui lòng nhập số 10 chữ số hiện tại',
      sanitized,
    }
  }

  // 3. Length check: too long
  if (sanitized.length > 10) {
    return {
      isValid: false,
      error: isEn
        ? `Phone number is too long (${sanitized.length} digits). Must be exactly 10 digits`
        : `Số điện thoại quá dài (${sanitized.length} số). Số di động bắt buộc đúng 10 chữ số`,
      sanitized,
    }
  }

  // 4. Length check: too short
  if (sanitized.length < 10) {
    return {
      isValid: false,
      error: isEn
        ? `Phone number is incomplete (${sanitized.length}/10 digits). Please enter 10 digits`
        : `Số điện thoại còn thiếu (${sanitized.length}/10 số). Vui lòng nhập đủ 10 chữ số`,
      sanitized,
    }
  }

  // 5. Valid carrier prefix (03, 05, 07, 08, 09)
  if (!VIETNAMESE_PHONE_REGEX.test(sanitized)) {
    return {
      isValid: false,
      error: isEn
        ? 'Invalid carrier prefix. Vietnam mobile numbers must start with 03, 05, 07, 08, or 09'
        : 'Đầu số không hợp lệ. Số di động phải bắt đầu bằng (03, 05, 07, 08, 09)',
      sanitized,
    }
  }

  return { isValid: true, sanitized }
}

/**
 * Validate Full Name with i18n
 */
export function validateName(
  name: string,
  locale: ValidationLocale = 'vi'
): { isValid: boolean; error?: string; sanitized: string } {
  const isEn = locale === 'en'
  const sanitized = name.trim().replace(/\s+/g, ' ')

  if (!sanitized) {
    return {
      isValid: false,
      error: isEn ? 'Please enter your full name' : 'Vui lòng nhập họ và tên',
      sanitized,
    }
  }

  if (sanitized.length < 2) {
    return {
      isValid: false,
      error: isEn
        ? 'Full name must contain at least 2 characters'
        : 'Họ và tên phải có ít nhất 2 ký tự',
      sanitized,
    }
  }

  if (sanitized.length > 50) {
    return {
      isValid: false,
      error: isEn
        ? 'Full name cannot exceed 50 characters'
        : 'Họ và tên không được vượt quá 50 ký tự',
      sanitized,
    }
  }

  if (!VIETNAMESE_NAME_REGEX.test(sanitized)) {
    return {
      isValid: false,
      error: isEn
        ? 'Full name can only contain letters, no digits or special characters'
        : 'Họ và tên chỉ được chứa chữ cái, không chứa số hoặc ký tự đặc biệt',
      sanitized,
    }
  }

  return { isValid: true, sanitized }
}

/**
 * Validate Unit Type with i18n
 */
export function validateUnitType(
  type: string,
  locale: ValidationLocale = 'vi'
): { isValid: boolean; error?: string } {
  const isEn = locale === 'en'
  if (!type || type.trim() === '') {
    return {
      isValid: false,
      error: isEn ? 'Please select your preferred unit type' : 'Vui lòng chọn loại căn quan tâm',
    }
  }
  return { isValid: true }
}

/**
 * Validate Note with i18n
 */
export function validateNote(
  note?: string,
  locale: ValidationLocale = 'vi'
): { isValid: boolean; error?: string; sanitized: string } {
  const isEn = locale === 'en'
  if (!note) return { isValid: true, sanitized: '' }
  const sanitized = note.trim()
  if (sanitized.length > 500) {
    return {
      isValid: false,
      error: isEn
        ? 'Note cannot exceed 500 characters'
        : 'Ghi chú không được vượt quá 500 ký tự',
      sanitized,
    }
  }
  return { isValid: true, sanitized }
}
