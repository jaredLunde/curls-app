import React from 'react'
import {css} from 'emotion'
import {Button, A, Link, Type, NavBar, maxZIndex} from 'styled-curls'
import Inject from 'react-cake'
import {Icon, MainSideBar, HamburgerMenu} from '~/ui'
import {home, curlsRepo} from '~/sitemap'


const logoCSS = css`
  position: absolute;
  top: 6px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 60px;
`


export default class StickyHeader extends React.PureComponent {
  componentDidUpdate () {
    if (this.hideHamburgerMenu) {
      this.hideHamburgerMenu()
    }
  }

  render () {
    const {componentName, ...props} = this.props

    return NavBar({
      nodeType: 'header',
      id: 'sticky-header',
      pos: 'sticky',
      className: maxZIndex,
      ...props,
      children: (
        <>
          {HamburgerMenu({
            children: ({hide}) => {
              this.hideHamburgerMenu = hide

              return MainSideBar({
                w: '100%',
                h: 'auto',
                p: 'x4 b4',
                bw: 0,
                bg: 'accent',
                pos: 'relative'
              })
            }
          })}

          {Link({
            className: logoCSS,
            to: home(),
            rel: 'home',
            children: Icon({name: 'logo', size: 'x30'})
          })}

          {NavBar({
            nodeType: 'div',
            justify: 'end',
            sh: 0,
            bw: 0,
            fluid: true,
            bg: 'transparent',
            children: A({
              href: curlsRepo(),
              rel: 'external',
              p: 'x3 y2',
              children: Icon({
                name: 'gitHub',
                size: '26',
                title: 'View Source on GitHub'
              })
            })
          })}
        </>
      )
    })
  }
}
