import {Box} from 'styled-curls'


export default function (props) {
  return Box({
    flex: true,
    column: true,
    p: 'x1 y2',
    bw: 'b1',
    grow: 1,
    align: 'center',
    justify: 'center',
    ...props,
    children: function (boxProps) {
      boxProps.inputID = `curls-control--${boxProps.name}`
      return props.children(boxProps)
    }
  })
}
