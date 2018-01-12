import React from 'react'
import {Row, Flex, Box, Type, H2, Divider} from 'styled-curls'
import Markdown from 'react-markdown'


function PropType ({type, enumVals}) {
  type = enumVals === void 0 ? type : enumVals.join(' | ')
  return Type({
    regular: true,
    color: 'grey',
    face: 'mono',
    children: Array.isArray(type) ? type.join('|') : type
  })
}


function PropDefinition (propName, prop) {
  return Box({
    m: 't2',
    children: (
      <div key={propName}>
        {Type({
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
        {Divider({m: 'b3'})}
        {H2({
          p: 'b1',
          md: true,
          ultraHeavy: true,
          children: 'Props'
        })}
        {defs}
        {Divider({m: 't3'})}
      </div>
    )
  })
}
