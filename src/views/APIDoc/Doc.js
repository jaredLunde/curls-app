import React from 'react'
import {css} from 'emotion'
import Markdown from 'react-markdown'
import {Box, Card, H1, Type, Divider, defaultColors} from 'styled-curls'
import {overflowX} from '~/styles'
import {Styles} from '~/components'
import {Preview, PropDefinitions} from '~/ui'
import {main} from '~/theme'


const cardCSS = css`
  ${overflowX};
  max-width: 1024px;
`

const markdownCSS = css`
  & a {
    color: ${main.colors.darkPink};
  }
`


export default function Doc ({match, docs, ...props}) {
  const {componentName} = match.params
  console.log('[Docs]', docs)

  return !docs ? null : Box({
    flex: true,
    justify: 'center',
    p: 2,
    children: (
      <div>
        {Card({
          className: cardCSS,
          bs: 2,
          br: 1,
          grow: true,
          children: (
            <>
              {H1({
                p: 3,
                lg: true,
                ultraHeavy: true,
                color: 'darkGrey',
                children: componentName
              })}

              {Type({
                nodeType: 'div',
                p: 'x3 b3',
                className: markdownCSS,
                children: <Markdown source={docs && docs.description}/>
              })}

              {PropDefinitions(docs)}
              <Preview {...docs} componentName={componentName}/>
            </>
          )
        })}
      </div>
    )
  })
}
