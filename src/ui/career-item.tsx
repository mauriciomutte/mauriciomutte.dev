import { format, parseISO } from 'date-fns'
import { enUS } from 'date-fns/locale'

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
    <section className="mb-8">
      <h2 className="text-lg">{occupation}</h2>
      <span className="text-zinc-400 text-sm">
        {company} • {getPeriodDate()}
      </span>
    </section>
  )
}
