
export function quote (val) {
  val = isNaN(val) || typeof val === 'boolean' ? val : parseInt(val)

  switch (typeof val) {
    case 'string':
      return `='${val}'`
    case 'boolean':
      return ''
    default:
      return `={${val}}`
  }
}


function stringifyReplacer (key, val) {
  if (key === 'children') {
    return '{{children}}'
  }
  else {
    return isNaN(val) || typeof val === 'boolean' ? val : parseInt(val)
  }
}


const functionDivChild = `function ({className}) {
    return <div className={className}/>
  }`


function whichChildren (type, children, style = 'jsx') {
  switch (type) {
    case 'Component':
      return style === 'jsx' ? `{${functionDivChild}}` : functionDivChild
    case 'UIComponent':
      if (typeof children === 'string') {
        if (style === 'func') {
          return `'${children}'`
        }
        else {
          return children
        }
      }
      else {
        return null
      }
    default:
      return null
  }

}


const replaceKeysRe = /"([\w]+)":/g
const quoteReplaceRe = /"/g


export default function (name, type, state, isFunctional) {
  const children = state.children

  if (isFunctional) {
    delete state.children
    state.children = children  // puts children at the end of the object

    const obj = (
      JSON
      .stringify(state, stringifyReplacer, 2)
      .replace('"{{children}}"', whichChildren(type, children, 'func'))
      .replace(replaceKeysRe, '$1:')
      .replace(quoteReplaceRe, "'")
    )

    return `${name}(${obj})`
  } else {
    let stringState = ''

    Object.keys(state).filter(key => key !== 'children').forEach(
      function (key) {
        const val = state[key]
        if (val === void 0) return;
        stringState += `  ${key}${quote(val)}\n`
      }
    )
    const _c = whichChildren(type, children, 'jsx')
    return `<${name}${stringState ? '\n' : ''}${stringState}>\n  ${_c}\n</${name}>`
  }
}
