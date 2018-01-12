import {Type} from 'styled-curls'


export default function ({name, inputID, ...props}) {
  return Type({
    nodeType: 'label',
    htmlFor: inputID,
    // face: 'mono',
    children: name,
    bold: true,
    ellipsis: true,
    m: 't1',
    xs: true,
    color: 'darkestGrey',
    ...props
  })
}
