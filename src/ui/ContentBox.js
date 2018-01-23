import React from 'react'
import {Box, H2} from 'styled-curls'


export default function (props) {
  return (
    <Box br='t1' bw={1} {...props}>
      {({className, heading, children}) => (
        <div className={className}>
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
    </Box>
  )
}
