import React from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import {injectGlobal} from 'emotion'
import {injectTheme} from 'styled-curls'
import * as theme from './theme'
import * as sitemap from './sitemap'
import {Home, APIDoc} from './views'
import {version} from '../package.json';
import bench from './bench'


console.log(`%c➰`, 'font-size: 72px;')
console.log(`%cCurls v${version}`, 'font-size: 24px;')
bench(1)
console.log('[injectTheme]', theme)
injectTheme(theme.main)
injectGlobal`
  pre {
    font-family: Inconsolata, monospace;
  }
`

export default function () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={sitemap.home()} component={Home}/>
        <Route
          exact
          path={sitemap.apiDoc({componentName: ':componentName'})}
          component={APIDoc}
        />
        {/**404 route*/}
        <Route component={Home}/>
      </Switch>
    </BrowserRouter>
  )
}
