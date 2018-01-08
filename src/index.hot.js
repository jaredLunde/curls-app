// js
import React from 'react'
import ReactDOM from 'react-dom'
import {hot} from 'react-hot-loader'
import App from './App'


export const root = document.getElementById('⚛️')
const MyApp = hot(module)(App)

ReactDOM.render(<MyApp/>, root)
