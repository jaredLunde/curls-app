import React from 'react'
import Highlight from 'react-highlight.js'
import {Type} from 'styled-curls'


export default function ({language = 'js', ...props}) {
  return Type({
    nodeType: 'div',
    face: 'mono',
    bw: 'y1',
    bc: 'translucentLight',
    bg: 'black',
    ...props,
    children: (
      <Highlight language={language}>
        {props.children}
      </Highlight>
    )
  })
}
