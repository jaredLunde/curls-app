import React from 'react'
import ReactDOM from 'react-dom'
import {Row, Col, Type, H1, P, Box, A, NavBar, Button, maxZIndex} from 'styled-curls'
import {Hero, StickyHeader} from '~/ui'


function InstallPre (props) {
  return Type({
    color: 'grey',
    face: 'mono',
    ...props
  })
}


export default function (props) {
  return (
    <>
      {StickyHeader()}

      <Hero>
        {H1({
          md: true,
          center: true,
          color: 'white',
          children: 'A lightweight, unopinionated CSS-in-JS UI component framework'
        })}

        {P({color: 'white', face: 'mono', children: 'written with emotion.js'})}

        {Box({
          bg: 'white',
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
                    {InstallPre({...props, children: 'npm i curls'})}
                    {InstallPre({...props, children: 'yarn add curls'})}
                  </div>
                )
              })
            )
          }
        })}
      </Hero>
    </>
  )
}
