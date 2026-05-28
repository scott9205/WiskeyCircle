import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export function formatDate(date: string | Date, format = 'MMM D, YYYY'): string {
  return dayjs(date).format(format)
}

export function formatRelative(date: string | Date): string {
  return dayjs(date).fromNow()
}

export function formatCurrency(amount: number, currency = 'GBP', locale = 'en-GB'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount)
}

export function formatAbv(abv: number): string {
  return `${abv.toFixed(1)}% ABV`
}

export function formatRating(rating: number): string {
  return rating.toFixed(1)
}
