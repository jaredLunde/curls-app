export default function (fn, iterations = 1000) {
  let total = 0.0

  for (let i = 0; i < iterations; i++) {
    const start = performance.now()
    fn()
    total += performance.now() - start
  }

  console.log('------------------------------------')
  console.log('%cFunction', 'font-weight: 700', fn)
  console.log('%cIterations/s:', 'font-weight: 700; color: green',
              1000.0 / (total / iterations))
}
