import React from 'react'
import ReactDOM from 'react-dom'
import {css} from 'emotion'
import {Hero, Row, Col, Type, H1, P, Box, A, NavBar, Button, maxZIndex} from 'styled-curls'
import {home, github} from '../sitemap'


const logoCSS = css`transform: rotate(30deg);`


export default function (props) {
  return (
    <>
      {NavBar({
        pos: 'sticky',
        className: maxZIndex,
        children: (
          <>
            {A({
              bold: true,
              p: 3,
              href: home(),
              children: (
                <>
                  {Type({d: 'inlineBlock', className: logoCSS, children: '➰'})}
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
                    href: github({repo: 'jaredlunde/styled-curls'}),
                    p: 3,
                    children: 'Docs'
                  })}

                  {A({
                    href: github({repo: 'jaredlunde/styled-curls'}),
                    p: 3,
                    children: 'Source'
                  })}
                </>
              )
            })}
          </>
        )
      })}

      {Hero({
        bg: 'pink',
        p: 'x3',
        children: (
          <>
            {H1({
              md: true,
              center: true,
              color: 'white',
              children: 'A lightweight, unopinionated CSS-in-JS UI component framework'
            })}

            {P({color: 'white', face: 'mono', children: 'written with emotion.js'})}

            {Box({
              bg: 'lightestGrey',
              p: 'x3 y2',
              m: 't3 x1 b5',
              br: '2',
              children: function (props) {
                return (
                  Box({
                    flex: true,
                    row: true,
                    children: (
                      <div>
                        <pre className={props.className}>
                          npm i curls
                        </pre>
                        <pre className={props.className}>
                          yarn add curls
                        </pre>
                      </div>
                    )
                  })
                )
              }
            })}
          </>
        )
      })}
    </>
  )
}
