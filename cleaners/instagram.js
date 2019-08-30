class Instagram
{
  general(url)
  {
    const u = new URL(url)
      , evilParams = [
          'igshid',
        ]

    Util.removeSearchParams(u, evilParams)

    return u.href
  }
}
