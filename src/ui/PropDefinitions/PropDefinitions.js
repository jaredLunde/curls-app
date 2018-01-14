import React from 'react'
import {Row, Flex, Box, Type, H2, H3, Divider} from 'styled-curls'
import Markdown from 'react-markdown'


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
    color: 'grey',
    face: 'mono',
    children: Array.isArray(types) ? types.join('|') : types
  })
}


function PropDefinition (propName, prop) {
  return Box({
    m: 't2',
    children: (
      <div key={propName}>
        {H3({
          sm: true,
          d: 'inlineBlock',
          bold: true,
          m: 'r2',
          color: 'black',
          children: propName
        })}

        ({PropType(prop)})

        <Markdown source={prop.description}/>
      </div>
    )
  })
}


export default function ({propTypes}) {
  const defs = []
  for (let propName in propTypes) {
    const prop = propTypes[propName]
    defs.push(PropDefinition(propName, prop))
  }

  return Box({
    p: 'x3',
    children: (
      <div>
        {H2({
          p: 'b1',
          md: true,
          ultraHeavy: true,
          children: 'Props'
        })}

        {defs}
      </div>
    )
  })
}
