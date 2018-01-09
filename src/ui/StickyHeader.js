import React from 'react'
import {css} from 'emotion'
import {A, Type, NavBar, maxZIndex} from 'styled-curls'
import {home, curlsRepo} from '~/sitemap'


const logoCSS = css`transform: rotate(30deg);`


export default function (props = {}) {
  return NavBar({
    sticky: true,
    id: 'sticky-header',
    className: maxZIndex,
    ...props,
    children: (
      <>
        {A({
          bold: true,
          p: 3,
          href: home(),
          children: (
            <>
              {Type({dib: true, className: logoCSS, children: '➰'})}
              Curls
            </>
          )
        })}

        {NavBar({
          nodeType: 'div',
          justify: 'right',
          bs: 0,
          fluid: true,
          children: (
            <>
              {A({
                href: curlsRepo(),
                p: 3,
                children: 'Docs'
              })}

              {A({
                href: curlsRepo(),
                p: 3,
                children: 'Source'
              })}
            </>
          )
        })}
      </>
    )
  })

}
