import React from 'react'
import ReactDOM from 'react-dom'
import {css} from 'emotion'
import {Hero, Row, Col, Type, H1, P, Box, A, NavBar, Button, maxZIndex} from 'styled-curls'
import {home, github} from '../sitemap'


const logoCSS = css`transform: rotate(30deg);`


export default function (props) {
  return (
    <>
      <NavBar pos='sticky' className={maxZIndex}>
        <A bold p={3} href={home()}>
          {Type({d: 'inlineBlock', className: logoCSS, children: '➰'})}
          Curls
        </A>

        <NavBar nodeType='div' justify='right' bs={0} fluid={true}>
          <A href={github({repo: 'jaredlunde/styled-curls'})} p={3}>
            Docs
          </A>

          <A href={github({repo: 'jaredlunde/styled-curls'})} p={3}>
            Source
          </A>
        </NavBar>
      </NavBar>

      <Hero bg='pink' p='x3'>
        <H1 md center color='white'>
          A lightweight, unopinionated CSS-in-JS UI component framework
        </H1>

        <P color='white' face='mono'>
          written with emotion.js
        </P>

        <Box bg='lightestGrey' p='x3 y2' m='t3 x1 b5' br='2'>
          {function (props) {
            return (
              <Box flex row>
                {({className}) => (
                  <div className={className}>
                    <pre className={props.className}>
                      npm i curls
                    </pre>
                    <pre className={props.className}>
                      yarn add curls
                    </pre>
                  </div>
                )}
              </Box>
            )
          }}
        </Box>
      </Hero>
    </>
  )
}
