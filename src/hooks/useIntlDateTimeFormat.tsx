const useIntlDateTimeFormat = (date: string) => {
  const arrDate = date.split('.')
  const newDate = new Date([arrDate[1], arrDate[0], arrDate[3]].join('.'))

  if (Number.isNaN(newDate.getTime())) {
    return ''
  }

  const formatter = new Intl.DateTimeFormat('es', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return formatter.format(newDate)
}

export default useIntlDateTimeFormat
