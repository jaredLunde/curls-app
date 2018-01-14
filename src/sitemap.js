import path from 'path'


export function home () {
  return '/'
}


export function guides ({componentName}) {
  return `/${componentName}`
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


export const basics = [
  'Installation',
  'Philosophy',
  'Theming',
]


export const cssComponents = [
  'Flex',
  'BasicBox',
  'Box',
]


export const gridComponents = [
  'Grid',
  'GridBox',
  'Col',
  'Row',
  'BreakPoint',
]


export const uiComponents = [
  'Avatar',
  'Button',
  'Card',
  'CheckBox',
  'Divider',
  'Drawer',
  'Hero',
  'Input',
  'A',
  'Link',
  'NavLink',
  'Modal',
  'NavBar',
  'PopOver',
  'TextArea',
  'Type',
  'H1',
  'H2',
  'H3',
  'H4',
  'H5',
  'H6',
  'P'
]


export const animationComponents = [
  'Transitionable',
  'Fade',
  'Slide',
  'Drop'
]


export const utilityComponents = [
  'FillViewport',
  'MediaQuery',
]


export const utils = [
  'colorize',
  'createComponent',
  'createNode',
  'directionalScale',
  'getTheme',
  'supportsCSS',
  'withHoverQuery'
]


export const theming = [
  'injectTheme',
  'replaceTheme',
  'injectRem',
  'defaultColors',
  'defaultHoverColors',
  'defaultActiveColors',
  'defaultTypeFaces'
]
