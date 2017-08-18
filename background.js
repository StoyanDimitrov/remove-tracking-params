'use strict'

function isTracking(param)
{
  const settings = '^(utm_|fb_|yclid)'
    , re = new RegExp(settings)

  return re.test(param)
}

function cleanUrl(url)
{
  const u = new URL(url)
    , params = u.search
        .replace('?', '')
        .split('&')
        .reduce((params, param) => {
          if (param && ! isTracking(param)) {
            params.push(param)
          }

          return params
        }, [])

  let search = ''
  if (params.length) {
    search = '?' + params.join('&')
  }

  u.search = search

  return u.href
}

browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    const cleaned = cleanUrl(details.url)

    if (cleaned === details.url) {
      return
    }

    return {
      redirectUrl: cleaned
    }
  },
  {
    urls: ['<all_urls>'],
    types:['main_frame']
  },
  ['blocking']
)
