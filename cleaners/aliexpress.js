class AliExpress
{
  general(url)
  {
    const u = new URL(url)
      , evilParams = [
          'cpt',
          'initiative_id',
          'isViewCP',
          'origin',
          'pvid',
          'scm',
          'sk',
          'spm',
          'terminal_id',
          'trace',
          'tracelog',
          'traffic_analysisId',
          'ws_ab_test',
        ]
      , evilParamsStartWith = [
          'aff_',
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
