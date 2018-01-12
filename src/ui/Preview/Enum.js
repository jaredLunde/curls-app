import React from 'react'
import {Input} from 'styled-curls'
import Control from './Control'
import ControlLabel from './ControlLabel'

export default function ({name, key, enumVals, onChange, defaultValue = ''}) {
  return Control({
    name,
    children: function ({inputID, className}) {
      return (
        <div className={className} key={key}>
          <select name={name} id={inputID} onChange={onChange} defaultValue={defaultValue}>
            <option value=""/>
            {enumVals.map(v => <option key={v} value={v}>{v}</option>)}
          </select>

          {ControlLabel({name, inputID})}
        </div>
      )
    }
  })
}
