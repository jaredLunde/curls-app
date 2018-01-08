import React from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import {injectGlobal} from 'emotion'
import {injectTheme} from 'styled-curls'
import * as theme from './theme'
import * as sitemap from './sitemap'
import {Home, APIDoc} from './views'


console.log('[injectTheme]', theme)
injectTheme(theme.main)
injectGlobal`
  pre {
    font-family: Inconsolata, monospace;
  }
`

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={sitemap.home()} component={Home}/>
      <Route
        exact
        path={sitemap.apiDoc({componentName: ':componentName'})}
        component={APIDoc}
      />
      {/**404 route*/}
    </Switch>
  </BrowserRouter>
)
