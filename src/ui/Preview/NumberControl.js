import React from 'react'
import {Input} from 'styled-curls'
import Control from './Control'
import ControlLabel from './ControlLabel'

export default function ({name, key, onChange, defaultValue = ''}) {
  return Control({
    name,
    children: function ({inputID, className}) {
      return (
        <div className={className} key={key}>
          {Input({
            name,
            id: inputID,
            type: 'number',
            bg: 'lightestGrey',
            onChange,
            w: 50,
            defaultValue
          })}

          {ControlLabel({name, inputID})}
        </div>
      )
    }
  })
}
