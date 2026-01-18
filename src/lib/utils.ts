/**
 * Utility Functions
 * 
 * Shared utility functions used across the application.
 * No business logic or hardcoded values.
 */

/**
 * Formats a phone number for display
 * @param phone - Phone number string (digits only or with formatting)
 * @returns Formatted phone number string
 */
export function formatPhoneNumber(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  
  // Return original if format doesn't match
  return phone;
}

/**
 * Validates email format
 * @param email - Email string to validate
 * @returns Boolean indicating if email is valid
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
