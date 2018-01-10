import React from 'react'
import ReactDOM from 'react-dom'
import {css} from 'emotion'
import {Row, Col, Card, Box, H1, BreakPoint} from 'styled-curls'
import {Hero, StickyHeader, MainSideBar} from '~/ui'


function InstallPre (props) {
  return Type({
    color: 'grey',
    face: 'mono',
    ...props
  })
}

const minHeightVP = css`min-height: 100vh;`

export default function ({match}) {

  return (
    <>
      {Row({
        nowrap: true,
        children: (
          <>
            {BreakPoint({
              sm: true,
              children: function ({matchesAny}) {
                return !matchesAny && MainSideBar()
              }
            })}

            {Col({
              nodeType: 'main',
              bg: 'pink',
              className: minHeightVP,
              children: (
                <>
                  <StickyHeader/>

                  {Box({
                    flex: true,
                    justify: 'center',
                    p: 3,
                    children: (
                      <div>
                        {Card({
                          bg: 'darkestGrey',
                          bs: 2,
                          br: 1,
                          p: 4,
                          grow: true,
                          style: {maxWidth: 1280},
                          children: (
                            <div>
                              <H1 xl regular color='white'>{match.params.componentName}</H1>
                            </div>
                          )
                        })}
                      </div>
                    )
                  })}
                </>
              )
            })}
          </>
        )
      })}
    </>
  )
}
