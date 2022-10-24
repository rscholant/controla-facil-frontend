/**
 * return only digits from string
 * @param value
 * @returns string
 */
export function onlyDigits(value: string) {
  return value.replace(/[^\d]/g, '');
}
