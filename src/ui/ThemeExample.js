import React from 'react'
import Markdown from 'react-markdown'
import {H2, P} from 'styled-curls'
import {markdown} from '~/styles'
import CodeBlock from './CodeBlock'
import ContentBox from './ContentBox'


export default function ({defaultTheme}) {
  return (
    <ContentBox m='t4' heading='Theme' id='theme-example'>
      {defaultTheme.details && (
        <P nodeType='div' m={0} d='block' p='2 t3' bw='t1' bg='asideBg' color='primaryText' className={markdown}>
          <Markdown source={defaultTheme.details}/>
        </P>
      )}

      {defaultTheme.example && CodeBlock({
        language: 'js',
        children: defaultTheme.example.trim()
      })}
    </ContentBox>
  )
}
