// https://stackoverflow.com/a/16112771
export default function (selectors, sheet) {
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

          if (rule.selectorText && rule.selectorText.indexOf(selector) !== -1) {
            rules = rules.concat(
              rule.parentStyleSheet.ownerNode.innerText
                .replace(rule.selectorText, '')
                .split('')
                .slice(1, -1)
                .join('')
                .split(';')
                .filter(rule => rule)
                .map(rule => `${rule.trim()};`)
            )
          }
        }
      }
  }

  return rules
}
