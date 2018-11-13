class AliExpress
{
  general(url)
  {
    const u = new URL(url)
      , evilParams = [
          'spm',
          'scm',
          'pvid',
          'trace',
          'tracelog',
          'ws_ab_test',
          'traffic_analysisId',
        ]

    Util.removeSearchParams(u, evilParams)

    return u.href
  }

  item(url)
  {
    const u = new URL(url)
    u.search = ''

    return u.href
  }

  store(url)
  {
    //
  }
}
