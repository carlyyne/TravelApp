import { parseDate, getLocalTimeZone, DateFormatter } from '@internationalized/date'

const formatter = new DateFormatter('fr-FR', {
  weekday: 'long',
  day: 'numeric',
  month: 'long'
})

export function formatDay(date: string): string {
  const text = formatter.format(parseDate(date).toDate(getLocalTimeZone()))
  return text.charAt(0).toUpperCase() + text.slice(1)
}

// Détermine les jours du voyage
export function getTripDays(startDate: string, endDate: string): string[] {
  let current = parseDate(startDate)
  const end = parseDate(endDate)
  const days: string[] = []

  while (current.compare(end) <= 0) {
    days.push(formatDay(current.toString()))
    current = current.add({ days: 1 })
  }
  return days
}