class Massdrop
{
  general(url)
  {
    const u = new URL(url)
      , evilParams = [
          'referer',
        ]

    Util.removeSearchParams(u, evilParams)

    return u.href
  }
}
