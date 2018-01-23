import React from 'react'
import {Input, CheckBox, Type} from 'styled-curls'
import Icon from '~/ui/Icon'
import Control from './Control'
import ControlLabel from './ControlLabel'


function CheckMark ({isChecked}) {
  return isChecked ? <Icon name='checkMark' color='darkGreen'/> : null
}


export default function ({name, onChange, defaultValue = ''}) {
  return Control({
    name,
    children: function ({inputID, className}) {
      return CheckBox({
        name,
        id: inputID,
        onChange,
        checked: defaultValue || false,
        children: function ({CheckBoxInput, toggle, isChecked}) {
          return (
            <div className={className} onClick={toggle}>
              {CheckBoxInput({w: 36, h: 36, p: 2, br: 1, bg: 'white', children: CheckMark})}
              {ControlLabel({name, inputID})}
            </div>
          )
        }
      })
    }
  })
}
