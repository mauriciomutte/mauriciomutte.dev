import styles from './CareerItem.module.css'

const CareerItem = ({ occupation, company, startDate, endDate }) => {
  return (
    <section className={styles.career__section}>
      <h2 className={styles.career__occupation}>{occupation}</h2>
      <span className={styles.career__details}>
        {company} • {startDate} - {endDate || 'Presente'}
      </span>
    </section>
  )
}

export default CareerItem
