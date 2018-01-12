import {Box} from 'styled-curls'


export default function (props) {
  return Box({
    flex: true,
    column: true,
    p: 2,
    align: 'center',
    justify: 'center',
    ...props,
    children: function (boxProps) {
      boxProps.inputID = `curls-control--${boxProps.name}`
      return props.children(boxProps)
    }
  })
}
