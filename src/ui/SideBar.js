import {css, cx} from 'emotion'
import {NavBar, maxZIndex} from 'styled-curls'
import {overflowY, minHeightVP} from '../styles'

const sideBarCSS = css`
  ${overflowY};
  ${minHeightVP};
  z-index: 1;
`

export default function (props) {
  return NavBar({
    column: true,
    h: '100vh',
    fixed: true,
    p: '3 b5',
    bw: 'y1 r1',
    align: 'start',
    // sh: 16,
    touchScrolling: true,
    grow: false,
    nodeType: 'nav',
    pos: 'sticky',
    ...props,
    className: cx(sideBarCSS, props.className)
  })
}
