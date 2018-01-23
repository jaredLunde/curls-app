import Cookies from 'js-cookie'

export * as main from './main'
export * as night from './night'
export * as sepia from './sepia'
export const cookies = {
  fontSize: {
    get: () => Cookies.get('fontSize'),
    set: val => Cookies.set('fontSize', val),
  },
  theme: {
    get: () => Cookies.get('theme'),
    set: val => Cookies.set('theme', val),
  },
  typeFace: {
    get: () => Cookies.get('typeFace'),
    set: val => Cookies.set('typeFace', val),
  }
}
