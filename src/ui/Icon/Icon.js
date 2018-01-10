import React from 'react'
import {Box, createComponent, getTheme} from 'styled-curls'
import invariant from 'invariant'
import {camelToPascal} from '~/utils'
import * as icons from './icons'
import * as CSS from './CSS'
import * as defaultTheme from './defaultTheme'
import propTypes from './propTypes'


const themePath = 'icon'
const SFC = createComponent({
  name: 'Icon',
  CSS,
  defaultTheme,
  propTypes,
  themePath
})

export default function Icon (props) {
  const SVG = icons[camelToPascal(props.name)]
  const theme = getTheme(defaultTheme, props.theme, themePath)
  
  if (typeof process !== void 0 && process.env.NODE_ENV !== 'production') {
    invariant(
      SVG,
      `An icon named '${camelToPascal(name)}' was not found.`
    )
  }

  return Box({
    ...props,
    children: function (sfcProps) {
      return SFC({
        size: theme.defaultSize,
        ...sfcProps,
        children: function (svgProps) {
          return SVG({
            'aria-labelledby': 'title',
            role: 'img',
            ...svgProps,
            color: theme.colors[props.color || theme.defaultColor],
            title: svgProps.title || name,
          })
        }
      })
    }
  })
}
