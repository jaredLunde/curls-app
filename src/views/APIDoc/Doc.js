import React from 'react'
import {css} from 'emotion'
import Markdown from 'react-markdown'
import {Box, P, H1} from 'styled-curls'
import {overflowX, markdown} from '~/styles'
import {Styles} from '~/components'
import {Preview, PropDefinitions, ThemeExample} from '~/ui'


const cardCSS = css`
  ${overflowX};
  max-width: 800px;
`


export default function Doc ({match, docs, ...props}) {
  const {componentName} = match.params
  return !docs ? null : (
    <Box flex justify='center' p='3 t4'>
      <Box className={cardCSS} grow p='t2'>
        <H1 xl ultraHeavy face='mono' color='emphasisText' p='b3'>
          {componentName}
        </H1>

        <P nodeType='div' m={0} d='block' color='primaryText' p='b3' className={markdown}>
          <Markdown source={docs && docs.description} {...props}/>
        </P>

        {PropDefinitions(docs)}

        {docs.defaultTheme && ThemeExample(docs)}

        <Preview {...docs} componentName={componentName}/>
      </Box>
    </Box>
  )
}
