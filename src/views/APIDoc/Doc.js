import React from 'react'
import {css} from 'emotion'
import Markdown from 'react-markdown'
import {Box, Card, H1, Divider, defaultColors} from 'styled-curls'
import {overflowX, markdown} from '~/styles'
import {Styles} from '~/components'
import {Preview, PropDefinitions, ThemeExample} from '~/ui'


const cardCSS = css`
  ${overflowX};
  max-width: 1024px;
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
                children: componentName
              })}

              {Box({
                p: 'x3 b3',
                className: markdown,
                children: <Markdown source={docs && docs.description}/>
              })}

              {PropDefinitions(docs)}

              {docs.defaultTheme && ThemeExample(docs)}

              <Preview {...docs} componentName={componentName}/>
            </>
          )
        })}
      </div>
    )
  })
}
