import React from "react"
import {render} from 'react-dom'
import DirectFunction from './DirectFunction'
import Functional from './Functional'


function run (Type, iterations) {
  let runTime = 0
  const injections = document.getElementById('bench')

  for (let x = 0; x < iterations; x++) {
    const prevTime = performance.now()
    render(Type(), injections)
    runTime += performance.now() - prevTime
  }

  return runTime / iterations
}


export default function (count = 1000) {
  console.log(`Running %c${count} %ctimes ...`, 'font-weight: bold', 'font-weight: normal');

  const fc = run(Functional, count)
  console.log(`[Stateless Functional Mounted] ${fc}ms %c${Math.round((1-fc/fc)*100)}% %c`, 'color:green', 'color:black');

  const dfc = run(DirectFunction, count)
  console.log(`[Stateless Functional Direct Call] ${dfc}ms %c${Math.round((1-dfc/fc)*100)}% %c`, 'color:green', 'color:black');

  console.log(`%c🎉`, 'font-size: 36px')
}
