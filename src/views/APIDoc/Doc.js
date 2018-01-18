import React from 'react'
import {css} from 'emotion'
import Markdown from 'react-markdown'
import {Box, Card, H1, Divider, Type, Button, Drop, Overlay, defaultColors} from 'styled-curls'
import {overflowX, markdown} from '~/styles'
import {Styles} from '~/components'
import {Preview, PropDefinitions, ThemeExample} from '~/ui'


const cardCSS = css`
  ${overflowX};
  max-width: 800px;
`


export default function Doc ({match, docs, ...props}) {
  const {componentName} = match.params
  console.log('[Docs]', docs)

  return !docs ? null : Box({
    flex: true,
    justify: 'center',
    p: 3,
    children:  ({className}) => (
      <div className={className}>
        {Box({
          className: cardCSS,
          grow: true,
          children: (boxProps) => (
            <div {...boxProps}>
              {H1({
                color: 'emphasisText',
                p: 't2 b3',
                xl: true,
                ultraHeavy: true,
                children: componentName
              })}

              {Box({
                p: 'b3',
                className: markdown,
                children: props => <Markdown source={docs && docs.description} {...props}/>
              })}

              {PropDefinitions(docs)}

              {docs.defaultTheme && ThemeExample(docs)}

              <Preview {...docs} componentName={componentName}/>
            </div>
          )
        })}
      </div>
    )
  })
}
