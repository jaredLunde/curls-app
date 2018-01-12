import React from 'react'
import {ViewportSize, compose} from 'react-cake'
import {getStyle, getMediaStyle, kebabToCamel} from '~/utils'
import {sheet} from 'emotion'


function getComputedStyles (element, styles, isMediaQuery) {
  let output = []
  const seen = []
  const computedStyles = window.getComputedStyle(element, null)

  if (Array.isArray(styles)) {
    for (let x = 0; x < styles.length; x++) {
      const style = styles[x]

      if (typeof style === 'string') {
        const [property, value] = style.split(':').map(v => v.trim())
        const camelProperty = kebabToCamel(property)
        const computedValue = computedStyles[camelProperty]
        // console.log('Property:', property, '| Value:', value)
        if (seen.indexOf(property) === -1 && computedValue !== void 0) {
          seen.push(property)
          output.push(`${property}: ${isMediaQuery ? value : computedValue + ';'}`)
        }
      }
      else {
        output.push(getComputedStyles(element, style, isMediaQuery))
      }
    }
  } else {
    output = {}

    for (let selector in styles) {
      if (selector.indexOf('@media') > -1) {
        if (window.matchMedia(selector.replace('@media', '').trim()).matches) {
          output[selector] = getComputedStyles(element, styles[selector], true)
        }
      }
      else {
        output[selector] = getComputedStyles(element, styles[selector], isMediaQuery)
      }
    }
  }

  return output
}


class Styles extends React.PureComponent {
  setElementRef = el => {
    if (el !== this.element) {
      this.element = el
      this.forceUpdate()
    }
  }

  render () {
    const elementRef = this.setElementRef
    let styles = null
    let classNames = null
    let computedStyles = null

    if (this.element) {
      classNames = this.element.className.split(' ').filter(cn => cn.length).map(cn => `.${cn}`)
      styles = getStyle(classNames, sheet)
      styles = [...styles, ...getMediaStyle(classNames, sheet)]
      console.log('Styles:', styles)
      computedStyles = getComputedStyles(this.element, styles)
    }

    // TODO: Merge with computedStyles
    return this.props.children({elementRef, classNames, styles, computedStyles})
  }
}


export default compose([ViewportSize, Styles])
