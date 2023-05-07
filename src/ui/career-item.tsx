import { format, parseISO } from 'date-fns'
import { enUS } from 'date-fns/locale'

import styles from './career-item.module.css'

type CareerItemProps = {
  occupation: string
  company: string
  startDate: string
  endDate?: string
}

export const CareerItem = ({
  occupation,
  company,
  startDate,
  endDate,
}: CareerItemProps) => {
  const formatDate = (date: string) =>
    format(parseISO(date), 'MMM yyyy', { locale: enUS })

  const getPeriodDate = () => {
    if (!endDate) return `${formatDate(startDate)} - present`

    return `${formatDate(startDate)} - ${formatDate(endDate)}`
  }

  return (
    <section className={styles.career__section}>
      <h2 className={styles.career__occupation}>{occupation}</h2>
      <span className={styles.career__details}>
        {company} • {getPeriodDate()}
      </span>
    </section>
  )
}
