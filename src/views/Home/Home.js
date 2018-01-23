import React from 'react'
import ReactDOM from 'react-dom'
import {css} from 'emotion'
import {Row, Col, ThemeConsumer, Divider, FlexBox, Button, BreakPoint, Type, H1, H2, P, Box, A, NavBar, Flex, Grid, maxZIndex} from 'styled-curls'
import {Hero, Icon, StickyHeader, MainSideBar, Theming} from '~/ui'
import {ScrollToTop} from '~/components'


function InstallPre (props) {
  return Type({
    color: 'primaryText',
    face: 'mono',
    ...props
  })
}


export default function (props) {
  return (
    <ScrollToTop>
      <Row wrap='no'>
        <BreakPoint sm>
          {function ({matchesAny}) {
            return !matchesAny && MainSideBar()
          }}
        </BreakPoint>

        <Col>
          <BreakPoint sm>
            {function ({matchesAny}) {
              return matchesAny && <StickyHeader/>
            }}
          </BreakPoint>

          <Hero nodeType='main' pos='relative'>
            <Theming {...props}/>

            <H1 md center color='primaryText'>
              A lightweight, unopinionated CSS-in-JS UI component framework
            </H1>

            <P m='t2' color='primaryText' face='mono'>
              written with
              <A
                href='https://emotion.sh/'
                bg='pink'
                p='x2 y1'
                br={1}
                bw={1}
                m='l1'
                color='white'
                face='mono'
                rel='external'

              >
                emotion.js
              </A>
            </P>

            <FlexBox bg='asideHeaderBg' p='x3 y2' m='t4 x1 b5' bw={1} br={2}>
              {function (props) {
                return (
                  <Row justify='center'>
                    {InstallPre({...props, children: 'npm i curls'})}
                    {InstallPre({...props, children: 'yarn add curls'})}
                  </Row>
                )
              }}
            </FlexBox>
          </Hero>
        </Col>
      </Row>
    </ScrollToTop>
  )
}
