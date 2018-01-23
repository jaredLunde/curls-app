import React from 'react'
import {Input} from 'styled-curls'
import Control from './Control'
import ControlLabel from './ControlLabel'

export default function ({name, onChange, defaultValue = ''}) {
  return Control({
    name,
    children: function ({inputID, className}) {
      return (
        <div className={className}>
          {Input({
            name,
            id: inputID,
            type: 'ontouchstart' in window ? 'number' : 'text',
            onChange,
            w: 70,
            defaultValue
          })}

          {ControlLabel({name, inputID})}
        </div>
      )
    }
  })
}
