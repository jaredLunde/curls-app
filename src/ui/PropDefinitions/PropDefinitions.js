import React from 'react'
import {Row, Flex, Box, Type, H2, H3, P, Divider} from 'styled-curls'
import Markdown from 'react-markdown'
import ContentBox from '../ContentBox'
import {markdown} from '~/styles'


function PropType ({type, enumVals}) {
  let types = enumVals === void 0 ? type : [...enumVals]

  if (enumVals) {
    if (type.includes('bool')) {
      types.unshift('true')
    }

    types = types.join(' | ')
  }

  return (
    <Type regular color='accentText' face='mono'>
      {Array.isArray(types) ? types.join('|') : types}
    </Type>
  )
}


function PropDefinition (propName, prop) {
  return (
    <Box key={propName} p='x2 t3 b1' bw='t1' bg='asideBg'>
      <H3 sm bold d='inlineBlock' m='r2 b2' face='mono' color='emphasisText'>
        {propName}
      </H3>

      <Type color='emphasisText'>
        {"{"}
        {PropType(prop)}
        {"}"}
      </Type>

      <P nodeType='div' color='accentText' className={markdown}>
        <Markdown source={prop.description}/>
      </P>
    </Box>
  )
}


export default function ({propTypes}) {
  const children = []

  for (let propName in propTypes) {
    const prop = propTypes[propName]
    children.push(PropDefinition(propName, prop))
  }

  return (
    <ContentBox heading='Props'>
      {children}
    </ContentBox>
  )
}
