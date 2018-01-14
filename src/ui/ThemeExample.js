import React from 'react'
import Markdown from 'react-markdown'
import {H2, Box} from 'styled-curls'
import {markdown} from '~/styles'
import CodeBlock from './CodeBlock'


export default function ({defaultTheme}) {
  return (
    <>
      {H2({p: 3, md: true, ultraHeavy: true, children: 'Default Theme'})}

      {defaultTheme.details && (
        Box({
          p: 'x3',
          className: markdown,
          children: <Markdown source={defaultTheme.details}/>
        })
      )}

      {defaultTheme.example && CodeBlock({
        language: 'js',
        children: defaultTheme.example.trim()
      })}
    </>
  )
}
