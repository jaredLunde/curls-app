import React from 'react'
import Markdown from 'react-markdown'
import {H2, Type} from 'styled-curls'
import {markdown} from '~/styles'
import CodeBlock from './CodeBlock'
import ContentBox from './ContentBox'


export default function ({defaultTheme}) {
  return (
    <ContentBox m='t4' heading='Theme'>
      {defaultTheme.details && (
        <Type d='block' p='2 t3' bw='t1' bg='asideBg' color='primaryText' className={markdown}>
          <Markdown source={defaultTheme.details}/>
        </Type>
      )}

      {defaultTheme.example && CodeBlock({
        language: 'js',
        children: defaultTheme.example.trim()
      })}
    </ContentBox>
  )
}
