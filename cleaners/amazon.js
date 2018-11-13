class Amazon
{
  refs(url)
  {
    const u = new URL(url)

    u.pathname = u.pathname.split('/').reduce((list, item) => {
      if (! item.startsWith('ref=')) {
        list.push(item)
      }

      return list
    }, []).join('/')

    Util.removeSearchParams(u, ['ref', 'ref_'])

    return u.href
  }

  aisn(url)
  {
    const AISN = new RegExp(/B\d{2}\w{7}|\d{9}(?:X|\d)/)
      , u = new URL(url)
      , aisn = u.pathname.match(AISN)

    if (aisn.length === 0) {
      return
    }

    u.pathname = `/dp/${aisn[0]}`
    u.search = ''

    return u.href
  }

  redirect(url)
  {
    const u = new URL(url)

    if (! u.searchParams.has('url')) {
      return
    }

    const redirect = new URL(u.searchParams.get('url'), u)
    redirect.search = ''

    return redirect.href
  }

  node(url)
  {
    const u = new URL(url)

    if (u.searchParams.has('node')) {
      u.search = 'node=' + u.searchParams.get('node')
    }

    if (u.searchParams.has('nodeId')) {
      u.search = 'nodeId=' + u.searchParams.get('nodeId')
    }

    u.search = u.searchParams.toString()

    return u.href
  }
}
