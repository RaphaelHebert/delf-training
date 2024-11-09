export function capitalizeFirstLetter(val: string): string {
  const lowerVal = val.toLowerCase()
  return String(lowerVal).charAt(0).toUpperCase() + String(lowerVal).slice(1)
}
