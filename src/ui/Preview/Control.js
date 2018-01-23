import React from 'react'
import {FlexBox} from 'styled-curls'


export default function (props) {
  return (
    <FlexBox flex grow column p='x1 y2' bw='b1' align='center' justify='center' {...props}>
      {function (boxProps) {
        boxProps.inputID = `curls-control--${boxProps.name}`
        return props.children(boxProps)
      }}
    </FlexBox>
  )
}
