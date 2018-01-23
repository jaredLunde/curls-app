import React from 'react'
import {css} from 'emotion'
import {Drop, Button, Type, Row, Box, injectRem, maxZIndex} from 'styled-curls'
import * as theme from '~/theme'


const themingCSS = css`top: 0; right: 0; left: 0; ${maxZIndex}`


function ThemeButton (props) {
  return <Button
    p='r0 2'
    br={0}
    bg='transparent'
    bw='r1'
    {...props}
  />
}


let currentFontSize = parseInt(theme.cookies.fontSize.get() || 100)

function changeRem (by = 12) {
  currentFontSize += by
  theme.cookies.fontSize.set(currentFontSize)
  injectRem(`${currentFontSize}%`)
}


function getTypeFace (face) {
  return {type: {defaultProps: {face}}}
}


function ButtonGroup (props) {
  return <Row bg='asideBg' bw={1} br={1} m='l3' w='auto' wrap='no' {...props}/>
}


export default function Theming (props) {
  function setTheme (nextTheme) {
    return function () {
      theme.cookies.theme.set(nextTheme)
      props.setTheme(theme[nextTheme])

      const face = theme.cookies.typeFace.get()
      if (face) {
        props.setTheme(getTypeFace(face))
      }
    }
  }

  function setTypeFace (nextFace) {
    return function () {
      theme.cookies.typeFace.set(nextFace)
      props.setTheme(getTypeFace(nextFace))
    }
  }

  return (
    <Drop fromTop>
      {function ({className, isVisible, toggle}) {
        const slideClassName = className

        return (
          <Box flex row wrap='no' p='2' pos='absolute' className={themingCSS}>
            <Row
              fluid
              row='reverse'
              touchScrolling
              ov='autoX'
              wrap='no'
              className={slideClassName}
            >
              <ButtonGroup>
                <ThemeButton onClick={setTheme('main')}>
                  <Type>
                    Stone
                  </Type>
                </ThemeButton>

                <ThemeButton onClick={setTheme('sepia')}>
                  <Type ellipsis>
                    Yellow Shift
                  </Type>
                </ThemeButton>

                <ThemeButton bw={0} onClick={setTheme('night')}>
                  <Type>
                    Night
                  </Type>
                </ThemeButton>
              </ButtonGroup>

              <ButtonGroup align='end'>
                <ThemeButton onClick={() => changeRem(-12)}>
                  <Type>
                    Aa
                  </Type>
                </ThemeButton>

                <ThemeButton bw={0} onClick={() => changeRem()}>
                  <Type md>
                    Aa
                  </Type>
                </ThemeButton>
              </ButtonGroup>

              <ButtonGroup>
                <ThemeButton onClick={setTypeFace('mono')}>
                  <Type face='mono'>
                    Mono
                  </Type>
                </ThemeButton>

                <ThemeButton bw={0} onClick={setTypeFace('system')}>
                  <Type face='system'>
                    System
                  </Type>
                </ThemeButton>
              </ButtonGroup>
            </Row>

            <ThemeButton fixed bw={0} onClick={toggle}>
              <Type md>
                ✎ Aa
              </Type>
            </ThemeButton>
          </Box>
        )
      }}
    </Drop>
  )
}
