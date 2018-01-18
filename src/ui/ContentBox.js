import React from 'react'
import {Box, H2} from 'styled-curls'


export default function (props) {
  return Box({
    br: 't1',
    bw: 1,
    ...props,
    children: ({className, heading, children}) => (
      <div className={className}>
        {H2({
          br: 't1',
          color: 'emphasisText',
          p: '2',
          bg: 'asideHeaderBg',
          md: true,
          ultraHeavy: true,
          children: heading
        })}

        {props.children}
      </div>
    )
  })
}
