import React from 'react'
import {css} from 'emotion'
import {Button, A, Link, Type, NavBar, maxZIndex} from 'styled-curls'
import {Inject} from 'react-cake'
import {Icon, MainSideBar, HamburgerMenu} from '~/ui'
import {home, curlsRepo} from '~/sitemap'


const logoCSS = css`
  position: absolute;
  top: 8px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 64px;
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
      sticky: true,
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
                p: 'x5 b5',
                sticky: false
              })
            }
          })}

          {Link({
            className: logoCSS,
            color: 'darkestGrey',
            md: true,
            ultraHeavy: true,
            to: home(),
            rel: 'home',
            children: Icon({name: 'logo', size: 'x2'})
          })}

          {NavBar({
            nodeType: 'div',
            justify: 'end',
            bs: 0,
            fluid: true,
            children: (
              <>
                {A({
                  href: curlsRepo(),
                  rel: 'external',
                  p: 3,
                  md: true,
                  color: 'grey',
                  children: Icon({
                    name: 'gitHub',
                    size: 'md',
                    title: 'View Source on GitHub'
                  })
                })}
              </>
            )
          })}
        </>
      )
    })
  }
}
