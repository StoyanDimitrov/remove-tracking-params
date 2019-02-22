class Cleaner
{
  general(url)
  {
    const u = new URL(url)
      , evilParamsStartWith = [
          'fb_',
          'utm_',
        ]
      , evilParams = [
          'yclid',
          'fbclid',
        ]

    evilParamsStartWith.map((begining) => {
      for (let key of u.searchParams.keys()) {
        if (! key.startsWith(begining)) {
          continue
        }

        evilParams.push(key)
      }
    })

    Util.removeSearchParams(u, evilParams)

    return u.href
  }
}
