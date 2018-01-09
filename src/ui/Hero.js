import React from 'react'
import {Hero as CurlsHero} from 'styled-curls'


export default class Hero extends React.Component {
  static defaultProps = {headerID: 'sticky-header'}

  headerEl = null

  componentDidMount () {
    this.headerEl = document.getElementById(this.props.headerID)
    this.forceUpdate()
  }

  render () {
    const {children, headerID, trimFrom, ...props} = this.props
    return CurlsHero({
      bg: 'pink',
      p: 'x3',
      trimHeight: this.headerEl,
      ...props,
      children
    })
  }
}
