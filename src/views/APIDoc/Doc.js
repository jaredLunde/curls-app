import React from 'react'
import {css} from 'emotion'
import Markdown from 'react-markdown'
import {Box, Card, H1, Divider, Type, Button, Drop, Overlay, defaultColors} from 'styled-curls'
import {overflowX, markdown} from '~/styles'
import {Styles} from '~/components'
import {Preview, PropDefinitions, ThemeExample} from '~/ui'
import {benchmark} from '~/utils'
import memoize from 'memoize-two-args'
import memoizeB from 'lru-memoize-map'


const cardCSS = css`
  ${overflowX};
  max-width: 800px;
`


export default function Doc ({match, docs, ...props}) {
  const {componentName} = match.params
  return !docs ? null : (
    <Box flex justify='center' p='3 t4'>
      {({className}) => (
        <div className={className}>
          <Box className={cardCSS} grow p='t2'>
            {(boxProps) => (
              <div {...boxProps}>
                <H1 xl ultraHeavy face='mono' color='emphasisText' p='b3'>
                  {componentName}
                </H1>

                <Type d='block' color='primaryText' p='b3' className={markdown}>
                  <Markdown source={docs && docs.description} {...props}/>
                </Type>

                {PropDefinitions(docs)}

                {docs.defaultTheme && ThemeExample(docs)}

                <Preview {...docs} componentName={componentName}/>
              </div>
            )}
          </Box>
        </div>
      )}
    </Box>
  )
}
