import path from 'path'


export function home () {
  return '/'
}

export function apiDoc ({componentName}) {
  return `/api/${componentName}`
}


export function github ({repo}) {
  return `https://github.com/${repo}`
}


export function curlsRepo (opt = {}) {
  const {page} = opt
  return github({repo: path.join('jaredlunde/styled-curls', page || '')})
}


export function curlsSrc (opt = {}) {
  const {component} = opt
  return curlsRepo({page: path.join('tree/master/src', component || '')})
}
