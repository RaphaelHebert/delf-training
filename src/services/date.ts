export function formatDate(ms: number) {
  const date = new Date(ms)

  // Get the components of the date
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0') // Month is 0-indexed
  const day = date.getDate().toString().padStart(2, '0')
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const seconds = date.getSeconds().toString().padStart(2, '0')

  // Create a human-readable date and time string
  const humanReadableDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`

  return humanReadableDate
}
