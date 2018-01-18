import React from 'react'
import ReactDOM from 'react-dom'
import {css} from 'emotion'
import {Row, Col, Divider, Button, BreakPoint, Type, H1, H2, P, Box, A, NavBar, Flex, Grid, maxZIndex} from 'styled-curls'
import {Hero, Icon, StickyHeader, MainSideBar} from '~/ui'
import {ScrollToTop} from '~/components'


function InstallPre (props) {
  return Type({
    color: 'black',
    face: 'mono',
    ...props
  })
}


export default function (props) {
  return (
    <ScrollToTop>
      {Row({
        wrap: 'no',
        children: (
          <>
            {BreakPoint({
              sm: true,
              children: function ({matchesAny}) {
                return !matchesAny && MainSideBar()
              }
            })}

            {Col({
              children: (
                <>
                  <StickyHeader/>
                  <Hero nodeType='main'>
                    {H1({
                      md: true,
                      center: true,
                      color: 'darkestGrey',
                      children: 'A lightweight, unopinionated CSS-in-JS UI component framework'
                    })}

                    {P({
                      m: 't2',
                      color: 'darkestGrey',
                      face: 'mono',
                      children: (
                        <>
                          written with
                          {A({
                            bg: 'pink',
                            p: 'x2 y1',
                            br: 1,
                            bw: 1,
                            m: 'l1',
                            href: 'https://emotion.sh/',
                            color: 'white',
                            face: 'mono',
                            rel: 'external',
                            children: 'emotion.js'
                          })}
                        </>
                      )
                    })}

                    {Box({
                      bg: 'lightestGrey',
                      p: 'x3 y2',
                      m: 't4 x1 b5',
                      bw: 1,
                      br: '2',
                      children: function (props) {
                        return (
                          Box({
                            flex: true,
                            row: true,
                            children: ({className}) => (
                              <div className={className}>
                                {InstallPre({...props, children: 'npm i curls'})}
                                {InstallPre({...props, children: 'yarn add curls'})}
                              </div>
                            )
                          })
                        )
                      }
                    })}
                  </Hero>
                </>
              )
            })}
          </>
        )
      })}
    </ScrollToTop>
  )
}
