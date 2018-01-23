import React from 'react'
import {Box} from 'styled-curls'
import Bool from './Bool'
import Enum from './Enum'
import NumberControl from './NumberControl'
import TextNumber from './TextNumber'
import Text from './Text'


function getControl (name, prop, onChange) {
  let Component

  switch (prop.type) {
    case 'string':
      if (prop.enumVals === void 0) {
        Component = Text
      } else {
        Component = Enum
      }
      break;
    case 'bool':
      Component = Bool
      break;
    case 'number':
      Component = NumberControl
      break;
    default:
      if (prop.type.includes('bool')) {
        if (prop.type.includes('string')) {
          if (prop.enumVals === void 0) {
            Component = Text
          } else {
            Component = Enum
          }
        }
        else if (prop.type.includes('number')) {
          Component = NumberControl
        }
      }
      else if (prop.type.includes('number')) {
        if (prop.type.includes('string')) {
          Component = TextNumber
        }
      }
      break;
  }

  if (Component) {
    return <Component key={name} name={name} onChange={onChange} {...prop}/>
  }
}


function getControls(propTypes, handleChange) {
  const controls = []

  for (let name in propTypes) {
    const control = getControl(name, propTypes[name], handleChange)

    if (control !== void 0) {
      controls.push(control)
    }
  }

  return controls
}


export default function Controls ({propTypes, onChange, ...props}) {
  return (
    <Box flex wrap bg='asideBg' bw='t1' justify='center' {...props}>
      {getControls(propTypes, onChange)}
    </Box>
  )
}
