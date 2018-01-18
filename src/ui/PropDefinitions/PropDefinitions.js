import React from 'react'
import {Row, Flex, Box, Type, H2, H3, Divider} from 'styled-curls'
import Markdown from 'react-markdown'
import ContentBox from '../ContentBox'


function PropType ({type, enumVals}) {
  let types = enumVals === void 0 ? type : [...enumVals]

  if (enumVals) {
    if (type.includes('bool')) {
      types.unshift('true')
    }

    types = types.join(' | ')
  }

  return Type({
    regular: true,
    color: 'accentText',
    face: 'mono',
    children: Array.isArray(types) ? types.join('|') : types
  })
}


function PropDefinition (propName, prop) {
  return Box({
    p: 'x2 t3 b1',
    bw: 't1',
    bg: 'asideBg',
    children: ({className}) => (
      <div key={propName} className={className}>
        {H3({
          sm: true,
          d: 'inlineBlock',
          bold: true,
          m: 'r2 b2',
          face: 'mono',
          color: 'emphasisText',
          children: propName
        })}

        {"{"}{PropType(prop)}{"}"}

        {Type({
          color: 'accentText',
          nodeType: 'div',
          children: <Markdown source={prop.description}/>
        })}
      </div>
    )
  })
}


export default function ({propTypes}) {
  const children = []

  for (let propName in propTypes) {
    const prop = propTypes[propName]
    children.push(PropDefinition(propName, prop))
  }

  return ContentBox({heading: 'Props', children})
}
