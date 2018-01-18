import React from 'react'
import Markdown from 'react-markdown'
import {H2, Box} from 'styled-curls'
import {markdown} from '~/styles'
import CodeBlock from './CodeBlock'
import ContentBox from './ContentBox'


export default function ({defaultTheme}) {
  return ContentBox({
    m: 't4',
    heading: 'Theme',
    children: (
      <>
        {defaultTheme.details && (
          Box({
            p: '2 t3',
            bw: 't1',
            bg: 'asideBg',
            className: markdown,
            children: ({className}) => <Markdown source={defaultTheme.details} className={className}/>
          })
        )}

        {defaultTheme.example && CodeBlock({
          language: 'js',
          children: defaultTheme.example.trim()
        })}
      </>
    )
  })
}
