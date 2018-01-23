import React from 'react'
import {Col, Box, Row, A, BreakPoint} from 'styled-curls'
import Toggle from 'react-cake/es/Toggle'
import {minWidth0} from '~/styles'


const toggleCodeStyle = [{name: 'turnOnA', value: 'A'}, {name: 'turnOnB', value: 'B'}]


function Heading (props) {
  return <A
    p='x3 y3'
    xxs
    ultraHeavy
    d='inlineBlock'
    color='white'
    {...props}
  />
}


function ToggleableView ({
  controls = toggleCodeStyle,
  initialValue,
  componentA,
  componentB,
  headingA,
  headingB
}) {
  const viewAValue = controls[0].value
  initialValue = initialValue === void 0 ? controls[0].value : initialValue

  return (
    <Toggle controls={controls} initialValue={initialValue}>
      {function ({turnOnA, turnOnB, value}) {
        return (
          <>
            <Row wrap={false} bg='black'>
              {Heading({
                onClick: turnOnA,
                role: 'button',
                color: value === viewAValue ? 'white' : 'lightGrey',
                children: headingA
              })}

              {Heading({
                onClick: turnOnB,
                role: 'button',
                color: value === viewAValue ? 'lightGrey' : 'white',
                children: headingB
              })}
            </Row>

            {value === viewAValue ? componentA : componentB}
          </>
        )
      }}
    </Toggle>
  )
}


function FlatViewCol (props) {
  return <Col flex column xxl={8} className={minWidth0} {...props}/>
}


function FlatView ({componentA, componentB, headingA, headingB}) {
  return (
    <Row>
      <Row bg='black'>
        <FlatViewCol>
          {Heading({nodeType: 'span', children: headingA})}
          {componentA}
        </FlatViewCol>

        <FlatViewCol bw='l1' bc='darkGrey'>
          {Heading({nodeType: 'span', children: headingB})}
          {componentB}
        </FlatViewCol>
      </Row>
    </Row>
  )
}


export default function ToggleCodeView (props) {
  return (
    <BreakPoint md={true}>
      {function ({matchesAll}) {
        return matchesAll ? ToggleableView(props) : FlatView(props)
      }}
    </BreakPoint>
  )
}
