import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import styles from './CareerItem.module.css'

const CareerItem = ({ occupation, company, startDate, endDate }) => {
  const formatDate = (date) =>
    format(parseISO(date), 'MMM yyyy', { locale: ptBR })

  const getPeriodDate = () => {
    if (!endDate) return `${formatDate(startDate)} - Present`

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

export default CareerItem
