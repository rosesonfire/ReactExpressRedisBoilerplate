import registeredPages from './../../registry/pages'

export const fetchPages = async () => {
  const authKey = await window.getAuthKey()
  const response = await fetch('/service/pages', {
    method: 'GET',
    headers: new Headers({
      authentication: authKey
    })
  })

  if (response.status !== 200) {
    throw new Error('Status error ' + response.status)
  }

  const responseIds = await response.json()
  const pages = registeredPages.filter(page => responseIds.includes(page.id))

  return pages
}
