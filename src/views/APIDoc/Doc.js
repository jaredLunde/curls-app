import React from 'react'
import {css} from 'emotion'
import Markdown from 'react-markdown'
import {Box, P, H1, Avatar} from 'styled-curls'
import {overflowX, markdown} from '~/styles'
import {Styles} from '~/components'
import {Preview, PropDefinitions, ThemeExample, CodeBlock, ContentBox} from '~/ui'


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

        {docs.usage && CodeBlock({
          language: docs.type === 'Component' || docs.type === 'UIComponent' ? 'html' : 'js',
          m: 'b4',
          br: 1,
          children: docs.usage.trim()
        })}

        {PropDefinitions(docs)}

        {docs.defaultCSS && ContentBox({
          m:  't4',
          heading: 'Styles',
          children: (
            <>
              <P nodeType='div' p='2 t3' m={0} bw='t1' bg='asideBg'>
                <Markdown>
                  These are the default CSS styles applied to each component.
                  The difference between this and `defaultProps` in the theme
                  is that `defaultProps` are reserved for dynamic styles depending
                  on scales and color definitions. These are static, but they
                  may still be overridden using the `props` on the component
                  or `defaultProps` in the theme.
                </Markdown>

              </P>

              {CodeBlock({
                language: 'css',
                children: `.css-__ {\n  ${docs.defaultCSS.trim()}\n}`
              })}
            </>
          )
        })}

        {docs.defaultTheme && ThemeExample(docs)}

        {docs.type !== 'Function' && (
          <Preview {...docs} componentName={componentName}/>
        )}
      </Box>
    </Box>
  )
}
