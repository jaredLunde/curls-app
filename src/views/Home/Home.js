import React from 'react'
import {css} from 'emotion'
import {Hero, Row, Col, Type, H1, P, Box, FlexBox, Link, A, NavBar, Button, maxZIndex} from 'styled-curls'
import {home, github} from '../../sitemap'


const logoCSS = css`transform: rotate(30deg);`


export default function (props) {
  return (
    <>
      {NavBar({
        sticky: true,
        className: maxZIndex,
        children: (
          <>
            {Link({
              bold: true,
              to: home(),
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
                  <A href={github({repo: 'jaredlunde/styled-curls'})} p={3}>
                    Docs
                  </A>

                  <A href={github({repo: 'jaredlunde/styled-curls'})} p={3}>
                    Source
                  </A>
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
              children: 'A lightweight, unopinionated CSS-in-JS UI component library'
            })}

            {P({color: 'white', face: 'mono', children: 'written with emotion.js'})}

            {FlexBox({
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
