import React from 'react'
import {css, cx} from 'emotion'
import {Button, BasicBox, defaultColors, getTheme} from 'styled-curls'


const defaultTheme = {
  defaultColor: 'darkerGrey',
  colors: defaultColors
}
const themePath = 'hamburger'
const lineCSS = css`
  width: 24px;
  height: 2px;
  border-radius: 1px;
  margin-top: 2px;
  margin-bottom: 2px;
`

export default function (props) {
  const theme = getTheme(defaultTheme, props.theme, themePath)

  return Button({
    column: true,
    align: 'stretch',
    bg: 'transparent',
    bw: 0,
    br: 0,
    p: '0',
    m: '3',
    pos: 'relative',
    ...props,
    children: BasicBox({
      bg: props.color || theme.defaultColor,
      children: function (boxProps) {
        const {className} = boxProps

        return (
          <>
            <span className={cx(lineCSS, className)}/>
            <span className={cx(lineCSS, className)}/>
            <span className={cx(lineCSS, className)}/>
          </>
        )
      }
    })
  })
}
