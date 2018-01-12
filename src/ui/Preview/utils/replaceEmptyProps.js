import propIsNotEmpty from './propIsNotEmpty'


export default function (state) {
  return function (prevState) {
    const nextState = {...prevState}

    Object.keys(state).forEach(
      function (key) {
        const val = state[key]

        if (propIsNotEmpty(val)) {
          nextState[key] = val
        } else {
          nextState[key] = void 0
        }
      }
    )

    return nextState
  }
}
