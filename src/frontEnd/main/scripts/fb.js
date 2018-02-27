const fbInitEvent = new Event('FBInit')

window.fbAsyncInit = function () {
  // eslint-disable-next-line no-undef
  FB.init({
    appId: '126508851392364',
    cookie: true,
    xfbml: true,
    version: 'v2.10'
  })
  // eslint-disable-next-line no-undef
  FB.AppEvents.logPageView()

  window.dispatchEvent(fbInitEvent)
};

(function (d, s, id) {
  var js
  var fjs = d.getElementsByTagName(s)[0]
  if (d.getElementById(id)) { return }
  js = d.createElement(s); js.id = id
  js.src = 'https://connect.facebook.net/en_US/sdk.js'
  fjs.parentNode.insertBefore(js, fjs)
}(document, 'script', 'facebook-jssdk'))

// Custom utility functions

const awaitFB = new Promise((resolve, reject) => {
  try {
    // eslint-disable-next-line no-unused-vars
    window.addEventListener('FBInit', (event) => {
      resolve(true)
    })
  } catch (e) {
    reject(e.message)
  }
})

const getAuthStatus = async () => {
  await awaitFB

  const authStatus = await new Promise((resolve, reject) => {
    try {
      // eslint-disable-next-line no-undef
      FB.getLoginStatus(resolve)
    } catch (e) {
      reject(e.message)
    }
  })

  return authStatus
}

const checkAuthentication = (authStatus) => {
  const isAuthenticated = authStatus && authStatus.status === 'connected'

  return isAuthenticated
}

// TODO: do this with RxJX
const awaitFBReAuth = async () => {
  await awaitFB

  const reAuthStatus = await new Promise((resolve, reject) => {
    try {
      const callback = authStatus => {
        const isAuthenticated = checkAuthentication(authStatus)

        if (isAuthenticated) {
          // eslint-disable-next-line no-undef
          FB.Event.unsubscribe('auth.statusChange', callback)
          resolve(authStatus)
        }
      }
      // eslint-disable-next-line no-undef
      FB.Event.subscribe('auth.statusChange', callback)
    } catch (e) {
      reject(e)
    }
  })

  return reAuthStatus
}

const awaitFBAuth = async () => {
  await awaitFB

  const authStatus = await getAuthStatus()
  const isAuthenticated = checkAuthentication(authStatus)

  if (isAuthenticated) {
    return authStatus
  } else {
    const reAuthStatus = await awaitFBReAuth()

    return reAuthStatus
  }
}

export const getAuthKey = async () => {
  const authStatus = await awaitFBAuth()

  return authStatus.authResponse.accessToken
}

export const fbAPI = async (query) => {
  await awaitFBAuth()

  const response = await new Promise((resolve, reject) => {
    try {
      // eslint-disable-next-line no-undef
      FB.api(query, resolve)
    } catch (e) {
      reject(e)
    }
  })

  return response
}

// TODO: do this with RxJX
export const streamAuthStatus = async (onLogin, onLogout) => {
  await awaitFB

  const _callback = (authStatus) => {
    if (authStatus.status) {
      const isAuthenticated = checkAuthentication(authStatus)

      if (isAuthenticated) {
        onLogin()
      } else {
        onLogout()
      }
    }
  }
  // eslint-disable-next-line no-undef
  FB.Event.subscribe('auth.statusChange', _callback)

  const authStatus = await getAuthStatus()
  _callback(authStatus)
}
