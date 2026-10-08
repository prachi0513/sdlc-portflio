export function formatDate(date: string): string {
  const [year, month] = date.split('-')
  if (!month) return year
  const monthName = new Date(Number(year), Number(month) - 1).toLocaleString(
    'en-US',
    { month: 'short' },
  )
  return `${monthName} ${year}`
}

export function formatRange(entry: { start: string; end: string }): string {
  const end = entry.end === 'present' ? 'Present' : formatDate(entry.end)
  return `${formatDate(entry.start)} – ${end}`
}
