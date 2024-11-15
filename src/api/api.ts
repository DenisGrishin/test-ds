// Для того чтобы отправить POST-запрос, необходимо добавить указанное ниже поле в файл db.json.
const URL_MAIN = 'http://localhost:3000/'

const apiJsonServer = (path: string, propMethod: string, body = {}) => {
  return fetch(URL_MAIN + path, {
    method: propMethod,
    headers: {
      'Content-Type': 'application/json',
    },
    body: propMethod !== 'GET' ? JSON.stringify(body) : undefined,
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Сетевая ошибка')
      }

      return res.json()
    })
    .catch((error) => {
      console.error(error)
    })
}

export const getMenuApi = () => {
  return apiJsonServer('menu', 'GET')
}
export const getSectionsApi = () => {
  return apiJsonServer('sections', 'GET')
}
export const getContactsApi = () => {
  return apiJsonServer('contacts', 'GET')
}
export const postEmailApi = (email: string) => {
  return apiJsonServer('userEmail', 'POST', { email })
}
