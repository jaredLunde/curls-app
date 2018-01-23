import React from 'react'
import {Box} from 'styled-curls'


export default function (props) {
  return (
    <Box flex grow column p='x1 y2' bw='b1' align='center' justify='center' {...props}>
      {function (boxProps) {
        boxProps.inputID = `curls-control--${boxProps.name}`
        return props.children(boxProps)
      }}
    </Box>
  )
}
