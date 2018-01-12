import getStyle from './getStyle'

const mediaRe = /(.*?){/g
function defaultReplacer (rule, innerText) {
  return (
    innerText
    .replace(mediaRe, '')
    .split('')
    .slice(0, -2)
    .join('')
    .split(';')
    .filter(rule => rule)
    .map(rule => `${rule.trim()};`)
  )
}


// https://stackoverflow.com/a/16112771
export default function (selectors, sheet, replacer = defaultReplacer) {
  const sheets = sheet.tags
  let rules = []

  for (let i = 0, l = sheets.length; i < l; i++) {
      const sheet = sheets[i].sheet
      if (!sheet.cssRules) { continue }

      for (let j = 0, k = sheet.cssRules.length; j < k; j++) {
        for (let x = 0; x < selectors.length; x++) {
          const selector = selectors[x]
          if (!selector) { continue }
          const rule = sheet.cssRules[j]

          if (rule.media) {
            const mediaRules = getStyle([selector], {tags: [{sheet: rule}]}, replacer)

            if (mediaRules.length) {
              rules = rules.concat({[`@media ${rule.media.mediaText}`]: mediaRules})
            }
          }
        }
      }
  }

  return rules
}
