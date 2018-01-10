export const baseSize = 24

export const xxs = (2/5) * baseSize
export const xs = (2/4) * baseSize
export const sm = (2/3) * baseSize
export const md = baseSize
export const lg = (3/2) * baseSize
export const xl = (4/2) * baseSize
export const xxl = (6/2) * baseSize

const sizes = {
  xxs,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
}

export const getSize = size => {
  if (size === void 0) {
    return {width: baseSize, height: baseSize}
  }

  if (sizes[size] !== void 0) {
    size = sizes[size]
    return {width: size, height: size}
  }

  const intSize = parseInt(size)
  if (!isNaN(intSize)) {
    return {width: intSize, height: intSize}
  } else {
    let [width, height] = size.split('x')
    width = width && parseInt(width)
    height = height && parseInt(height)

    return {width, height}
  }
}

export default sizes
