import React from 'react'
import {Type} from 'styled-curls'


export default function ({name, inputID, ...props}) {
  return (
    <Type
      nodeType='label'
      htmlFor={inputID}
      xs
      bold
      ellipsis
      m='t1'
      color='primaryText'
      {...props}
    >
      {name}
    </Type>
  )
}
