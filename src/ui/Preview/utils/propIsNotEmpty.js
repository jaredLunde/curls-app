export default function (val) {
  return (
    (val !== void 0 && val !== null && val !== false)
    || (typeof val === 'string' && val.length > 0)
  )
}
