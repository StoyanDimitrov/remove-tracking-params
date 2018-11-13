class Mysupermarket
{
  general(url)
  {
    const u = new URL(url)
      , evilParams = [
          'AllowHijack',
          'AST',
          'banner',
        ]

    Util.removeSearchParams(u, evilParams)

    return u.href
  }
}
