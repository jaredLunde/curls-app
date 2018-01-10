import {css, cx} from 'emotion'
import {Col, maxZIndex} from 'styled-curls'


const sideBarCSS = css`
  ${maxZIndex};
  overflow-y: auto;
  min-height: 100%;
`

export default function (props) {
  return Col({
    w: 240,
    h: '100vh',
    p: '4 b6',
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
