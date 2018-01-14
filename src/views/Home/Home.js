import React from 'react'
import ReactDOM from 'react-dom'
import {css} from 'emotion'
import {Row, Col, Divider, BreakPoint, Type, H1, H2, P, Box, A, NavBar, Button, maxZIndex} from 'styled-curls'
import {Hero, StickyHeader, MainSideBar} from '~/ui'
import {ScrollToTop} from '~/components'


function InstallPre (props) {
  return Type({
    color: 'grey',
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
                      color: 'white',
                      children: 'A lightweight, unopinionated CSS-in-JS UI component framework'
                    })}

                    {P({
                      m: 't2',
                      color: 'white',
                      face: 'mono',
                      children: (
                        <>
                          written with
                          {A({
                            bg: 'darkPink',
                            p: 'x2 b1',
                            br: 1,
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
                      bg: 'white',
                      p: 'x3 y2',
                      m: 't4 x1 b5',
                      br: '2',
                      children: function (props) {
                        return (
                          Box({
                            flex: true,
                            row: true,
                            children: (
                              <div>
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
