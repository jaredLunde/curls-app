import React from 'react'
import {Toggle} from 'react-cake'
import {FlexBox, H2, Row, Type, Button} from 'styled-curls'


export default function (props) {
  return (
    <Toggle initialValue={false} propName='collapsed'>
      {function ({toggle, collapsed}) {
        return (
          <FlexBox br='t1' bw={1} {...props}>
            {({heading, ...flexProps}) => (
              <div {...flexProps}>
                <Row align='center' p={2} br='t1' bg='asideHeaderBg'>
                  <Button
                    flex
                    grow
                    justify='start'
                    p={2}
                    bg='transparent'
                    bw={0}
                    onClick={toggle}
                  >
                    <Type xxs m='r3' d='block'>
                      {collapsed ? '▲' : '▼'}
                    </Type>
                    <H2 sm ultraHeavy color='emphasisText' face='mono'>
                      {heading}
                    </H2>
                  </Button>
                </Row>
                {!collapsed && props.children}
              </div>
            )}
          </FlexBox>
        )
      }}
    </Toggle>
  )
}
