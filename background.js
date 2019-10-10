'use strict'

const AMZN_ALL_URLS = [
      '*',
    ]
  , AMZN_AISN_URLS = [
      'gp/product/*',
      '*/dp/*',
      'd/*',
      'dp/*',
    ]
  , AMZN_REDIRECT_URLS = [
      'gp/slredirect/*',
    ]
  , AMZN_NODE_URLS = [
      '*&node=*',
      '*&nodeId=*',
    ]

// Cleaner::general
browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    const cleaner = new Cleaner()
      , cleaned = cleaner.general(details.url)

    if (cleaned === details.url) {
      return
    }

console.log('Cleaner::general\n\t%s\n\t%s', cleaned, details.url)
    return {
      redirectUrl: cleaned
    }
  },
  {
    urls: ['*://*/*'],
    types: ['main_frame']
  },
  ['blocking']
)

// Amazon::refs
browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    const amzn = new Amazon()
      , cleaned = amzn.refs(details.url)

    if (cleaned === details.url) {
      return
    }

console.log('Amazon::refs\n\t%s\n\t%s', cleaned, details.url)
    return {
      redirectUrl: cleaned
    }
  },
  {
    urls: getAmazonMatches(AMZN_ALL_URLS),
    types: ['main_frame']
  },
  ['blocking']
)

// Amazon::aisn
browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    const amzn = new Amazon()
      , cleaned = amzn.aisn(details.url)

    if (cleaned === details.url) {
      return
    }

console.log('Amazon::aisn\n\t%s\n\t%s', cleaned, details.url)
    return {
      redirectUrl: cleaned
    }
  },
  {
    urls: getAmazonMatches(AMZN_AISN_URLS),
    types: ['main_frame']
  },
  ['blocking']
)

// Amazon::node
browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    const amzn = new Amazon()
      , cleaned = amzn.node(details.url)

    if (cleaned === details.url) {
      return
    }

console.log('Amazon::node\n\t%s\n\t%s', cleaned, details.url)
    return {
      redirectUrl: cleaned
    }
  },
  {
    urls: getAmazonMatches(AMZN_NODE_URLS),
    types: ['main_frame']
  },
  ['blocking']
)

// Amazon::redirect
browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    const amzn = new Amazon()
      , cleaned = amzn.redirect(details.url)

    if (cleaned === details.url) {
      return
    }

console.log('Amazon::redirect:\n\t%s\n\t%s', cleaned, details.url)
    return {
      redirectUrl: cleaned
    }
  },
  {
    urls: getAmazonMatches(AMZN_REDIRECT_URLS),
    types: ['main_frame']
  },
  ['blocking']
)


// AliExpress::item
browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    const ali = new AliExpress()
      , cleaned = ali.item(details.url)

    if (cleaned === details.url) {
      return
    }

console.log('AliExpress::item\n\t%s\n\t%s', cleaned, details.url)
    return {
      redirectUrl: cleaned
    }
  },
  {
    urls: [
      '*://*.aliexpress.com/item/*.html*',
      '*://*.aliexpress.com/store/product/*.html*',
    ],
    types:['main_frame'],
  },
  ['blocking']
)


// AliExpress::general
browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    const ali = new AliExpress()
      , cleaned = ali.general(details.url)

    if (cleaned === details.url) {
      return
    }

console.log('AliExpress::general\n\t%s\n\t%s', cleaned, details.url)
    return {
      redirectUrl: cleaned
    }
  },
  {
    urls: [
      '*://*.aliexpress.com/*',
    ],
    types:['main_frame'],
  },
  ['blocking']
)

// Massdrop::general
browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    const md = new Massdrop()
      , cleaned = md.general(details.url)

    if (cleaned === details.url) {
      return
    }

console.log('Massdrop::general\n\t%s\n\t%s', cleaned, details.url)
    return {
      redirectUrl: cleaned
    }
  },
  {
    urls: [
      '*://*.massdrop.com/*',
    ],
    types:['main_frame'],
  },
  ['blocking']
)

// Sitepoint::general
browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    const sp = new Sitepoint()
      , cleaned = sp.general(details.url)

    if (cleaned === details.url) {
      return
    }

console.log('Sitepoint::general\n\t%s\n\t%s', cleaned, details.url)
    return {
      redirectUrl: cleaned
    }
  },
  {
    urls: [
      '*://*.sitepoint.com/*',
    ],
    types:['main_frame'],
  },
  ['blocking']
)

// BalkanAuction::general
browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    const ba = new BalkanAuction()
      , cleaned = ba.general(details.url)

    if (cleaned === details.url) {
      return
    }

console.log('BalkanAuction::general\n\t%s\n\t%s', cleaned, details.url)
    return {
      redirectUrl: cleaned
    }
  },
  {
    urls: [
      '*://*.balkan.auction/goto.php?*',
    ],
    types:['main_frame'],
  },
  ['blocking']
)

// Mysupermarket:general
browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    const ba = new Mysupermarket()
      , cleaned = ba.general(details.url)

    if (cleaned === details.url) {
      return
    }

console.log('Mysupermarket::general\n\t%s\n\t%s', cleaned, details.url)
    return {
      redirectUrl: cleaned
    }
  },
  {
    urls: [
      '*://*.mysupermarket.co.uk/shelf/*',
    ],
    types:['main_frame'],
  },
  ['blocking']
)

// Instagram:general
browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    const ba = new Instagram()
      , cleaned = ba.general(details.url)

    if (cleaned === details.url) {
      return
    }

console.log('Instagram::general\n\t%s\n\t%s', cleaned, details.url)
    return {
      redirectUrl: cleaned
    }
  },
  {
    urls: [
      '*://*.instagram.com/*',
    ],
    types:['main_frame'],
  },
  ['blocking']
)

// GitHub:general
browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    const ba = new GitHub()
      , cleaned = ba.general(details.url)

    if (cleaned === details.url) {
      return
    }

console.log('GitHub::general\n\t%s\n\t%s', cleaned, details.url)
    return {
      redirectUrl: cleaned
    }
  },
  {
    urls: [
      '*://*.github.com/*',
    ],
    types:['main_frame'],
  },
  ['blocking']
)

function getAmazonMatches(paths)
{
  const tlds = [
        'com.au/',
        'com.br/',
        'ca/',
        'cn/',
        'fr/',
        'de/',
        'in/',
        'it/',
        'co.jp/',
        'com.mx/',
        'nl/',
        'es/',
        'com.tr/',
        'co.uk/',
        'com/',
      ]

  return paths.reduce((list, path) => {
    return list.concat(tlds.map((tld) => {
      return `*://*.amazon.${tld}${path}`
    }))
  }, [])
}
