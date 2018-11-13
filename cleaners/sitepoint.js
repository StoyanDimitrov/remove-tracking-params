class Sitepoint
{
  general(url)
  {
    const u = new URL(url)
      , evilParams = [
          'ref_source',
          'ref_medium',
        ]

    Util.removeSearchParams(u, evilParams)

    return u.href
  }
}
