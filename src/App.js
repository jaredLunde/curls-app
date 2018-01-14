import React from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import {injectGlobal} from 'emotion'
import {injectTheme, defaultColors} from 'styled-curls'
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
  html {
    font-size: 100%;
  }
  body {
    background: ${theme.main.colors.pink};
  }

  p {
    margin-bottom: 1rem;
  }

  @font-face{
    font-family: 'Fira Code';
    src: url('/assets/typeFaces/eot/FiraCode-Regular.eot');
    src: url('/assets/typeFaces/eot/FiraCode-Regular.eot') format('embedded-opentype'),
         url('/assets/typeFaces/woff2/FiraCode-Regular.woff2') format('woff2'),
         url('/assets/typeFaces/woff/FiraCode-Regular.woff') format('woff'),
         url('/assets/typeFaces/ttf/FiraCode-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face{
    font-family: 'Fira Code';
    src: url('/assets/typeFaces/eot/FiraCode-Bold.eot');
    src: url('/assets/typeFaces/eot/FiraCode-Bold.eot') format('embedded-opentype'),
         url('/assets/typeFaces/woff2/FiraCode-Bold.woff2') format('woff2'),
         url('/assets/typeFaces/woff/FiraCode-Bold.woff') format('woff'),
         url('/assets/typeFaces/ttf/FiraCode-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  pre,
  code {
    font-family: "Fira Code", monospace;
    white-space: pre;
    word-wrap:normal;
    word-break:keep-all;
    -webkit-overflow-scrolling: touch;
  }

  pre {
    overflow-x: auto;
  }

  .hljs {
    background: transparent;
  }

  select {
    font-size: 1rem;
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
