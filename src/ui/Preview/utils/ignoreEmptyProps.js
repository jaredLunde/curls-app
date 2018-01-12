import propIsNotEmpty from './propIsNotEmpty'


export default function (state) {
  const nextState = {}

  Object.keys(state).forEach(
    function (key) {
      const val = state[key]
      if (propIsNotEmpty(val)) {
        nextState[key] = val
      }
    }
  )

  return nextState
}
