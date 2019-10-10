class GitHub
{
  general(url)
  {
    const u = new URL(url)
      , evilParams = [
          'email_source',
          'email_token',
        ]

    Util.removeSearchParams(u, evilParams)

    return u.href
  }
}
