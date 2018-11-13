class BalkanAuction
{
  general(url)
  {
    const u = new URL(url)

    return u.searchParams.get('target')
  }
}
