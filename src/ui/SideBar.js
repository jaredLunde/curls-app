import React from 'react'
import {css, cx} from 'emotion'
import {NavBar, maxZIndex} from 'styled-curls'
import {overflowY, minHeightVP} from '../styles'

const sideBarCSS = css`
  ${overflowY};
  ${minHeightVP};
  z-index: 1;
`

export default function (props) {
  return (
    <NavBar
      nodeType='nav'
      fixed
      column
      h='100vh'
      p='3 b5'
      bw='y1 r1'
      align='start'
      ov='touch autoY'
      grow={false}
      pos='sticky'
      {...props}
      className={cx(sideBarCSS, props.className)}
    >
      {props.children}
    </NavBar>
  )
}
