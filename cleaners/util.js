class Util
{
  /**
   * @param search string
   *
   * @return Map
   */
  static parseSearchString(search)
  {
    var initialValue = new Map()

    if (! search
      || search.indexOf('?') !== 0
    ) {
      return initialValue
    }

    search = search.slice(1)

    if (search.length === 0) {
      return initialValue
    }

    return search.split('&').reduce((items, item) => {
      let param = item.split('=')

      items.set(param[0], param[1])

      return items
    }, initialValue)
  }


  /**
   * @param url URL
   * @param evilParams array
   */
  static removeSearchParams(url, evilParams)
  {
    let searchParams = Util.parseSearchString(url.search)

    evilParams.map((evilParam) => {
      searchParams.delete(evilParam)
    })

    url.search = Util.getSearch(searchParams)
  }


  removePathParams(url, evilParams)
  {
  }


  /**
   * Overcomes the problem of URLSearchParams encoding
   * the parameter values and adds unnecessary equal signs
   * if value is empty
   *
   * @param params object
   *
   * @return string
   */
  static getSearch(params)
  {
    let search = []

    for (let pair of params) {
      let item = pair[0]
      if (pair[1]) {
        item += '=' + pair[1]
      }

      search.push(item)
    }

    return search.join('&')
  }
}
