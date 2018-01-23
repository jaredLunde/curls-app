import React from 'react'
import {Col, Box, Row, A, BreakPoint} from 'styled-curls'
import Toggle from 'react-cake/es/Toggle'
import {minWidth0} from '~/styles'


const toggleCodeStyle = [{name: 'turnOnA', value: 'A'}, {name: 'turnOnB', value: 'B'}]


function Heading (props) {
  return A({
    p: 'x3 y3',
    xxs: true,
    ultraHeavy: true,
    d: 'inlineBlock',
    color: 'white',
    ...props
  })
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
            {Row({
              wrap: false,
              bg: 'black',
              children: (
                <>
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
                </>
              )
            })}

            {value === viewAValue ? componentA : componentB}
          </>
        )
      }}
    </Toggle>
  )
}


function FlatView ({componentA, componentB, headingA, headingB}) {
  return Row({
    align: 'stretch',
    children: (
      <>
        {Row({
          bg: 'black',
          align: 'stretch',
          children: (
            <>
              {Col({
                flex: true,
                column: true,
                xxl: 8,
                className: minWidth0,
                children: (
                  <>
                    {Heading({nodeType: 'span', children: headingA})}
                    {componentA}
                  </>
                )
              })}

              {Col({
                flex: true,
                column: true,
                xxl: 8,
                className: minWidth0,
                bw: 'l1',
                bc: 'darkGrey',
                children: (
                  <>
                    {Heading({nodeType: 'span', children: headingB})}
                    {componentB}
                  </>
                )
              })}
            </>
          )
        })}
      </>
    )
  })
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
