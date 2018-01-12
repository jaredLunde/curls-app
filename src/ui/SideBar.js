import {css, cx} from 'emotion'
import {Col, maxZIndex} from 'styled-curls'
import {overflowY, minHeightVP} from '../styles'

const sideBarCSS = css`
  ${maxZIndex};
  ${overflowY};
  ${minHeightVP};
`

export default function (props) {
  return Col({
    h: '100vh',
    fixed: true,
    p: '3 b5',
    bg: 'darkestGrey',
    bs: 4,
    touchScrolling: true,
    grow: false,
    nodeType: 'nav',
    sticky: true,
    ...props,
    className: cx(sideBarCSS, props.className)
  })
}
