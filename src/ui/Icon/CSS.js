import {css} from 'emotion'


function sizeCSS (value, height) {
  return css`
    width: ${value}rem;
    height: ${height || value}rem;
  `
}


export function size (value, theme) {
  if (theme.scale[value] !== void 0) {
    value = theme.scale[value]

    return sizeCSS(value)
  }

  const intSize = parseInt(value)
  if (!isNaN(intSize)) {
    return sizeCSS(intSize)
  } else {
    let [width, height] = value.split('x')
    width = width && parseFloat(width)
    height = height && parseFloat(height)

    return sizeCSS(width, height)
  }
}


function createSizeFunc (value, theme) {
  return function (_, theme) {
    return size(value, theme)
  }
}

export const xxs = createSizeFunc('xxs')
export const xs = createSizeFunc('xs')
export const sm = createSizeFunc('sm')
export const md = createSizeFunc('md')
export const lg = createSizeFunc('lg')
export const xl = createSizeFunc('xl')
export const xxl = createSizeFunc('xxl')
