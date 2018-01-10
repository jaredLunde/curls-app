export default function (icon) {
  return function ({color, ...svgProps}) {
    return icon({pathStyle: {fill: color}, ...svgProps})
  }
}
