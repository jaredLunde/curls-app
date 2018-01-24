import React from 'react'
import {FlexBox, H2} from 'styled-curls'


export default function (props) {
  return (
    <FlexBox br='t1' bw={1} {...props}>
      {({heading, ...flexProps}) => (
        <div {...flexProps}>
          <H2
            sm
            ultraHeavy
            br='t1'
            color='emphasisText'
            p={2}
            face='mono'
            bg='asideHeaderBg'
          >
            {heading}
          </H2>

          {props.children}
        </div>
      )}
    </FlexBox>
  )
}
