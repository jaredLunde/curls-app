import React from 'react'
import {getStyle, kebabToCamel} from '~/utils'
import {sheet} from 'emotion'


function getComputedStyle (element, styles) {
  const output = []
  const seen = []
  const computedStyles = window.getComputedStyle(element, null)

  for (let x = 0; x < styles.length; x++) {
    const style = styles[x]
    const [property, value] = style.split(':').map(v => v.trim())
    const camelProperty = kebabToCamel(property)
    const computedValue = computedStyles[camelProperty]
    // console.log('Property:', property, '| Value:', value)
    if (seen.indexOf(property) === -1 && computedValue !== void 0) {
      seen.push(property)
      output.push(`${property}: ${computedValue};`)
    }
  }

  return output
}


export default class Style extends React.Component {
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
    let computedStyle = null

    if (this.element) {
      classNames = this.element.className.split(' ').filter(cn => cn.length).map(cn => `.${cn}`)
      styles = getStyle(classNames, sheet)
      computedStyle = getComputedStyle(this.element, styles)
    }

    // TODO: Merge with computedStyles
    return this.props.children({elementRef, classNames, styles, computedStyle})
  }
}
