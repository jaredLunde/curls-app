import cssbeautify from 'cssbeautify'


export default function formatStyles (styles) {
  let output = ''

  if (Array.isArray(styles)) {
    for (let x = 0; x < styles.length; x++) {
      const style = styles[x]
      if (typeof style === 'string') {
        output += style
      }
      else {
        output += formatStyles(style)
      }
    }
  }
  else {
    for (let selector in styles) {
      output += `${selector} {${formatStyles(styles[selector])}}`
    }
  }

  return cssbeautify(output, {indent: '  '})
}
