import React from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import {injectGlobal} from 'emotion'
import {injectTheme, theme as curlsTheme} from 'styled-curls'
import * as theme from './theme'
import * as sitemap from './sitemap'
import {Home, APIDoc} from './views'
import {version} from '../package.json'


console.log(`%c➰`, 'font-size: 72px;')
console.log(`%cCurls v${version}`, 'font-size: 24px;')
console.log('[🎉 injectTheme]', theme)
injectTheme(theme.main)


injectGlobal`
  html {
    font-size: 100%;
  }

  body {
    &:before {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: .24;
      z-index: -1;
      background: url(https://t3.ftcdn.net/jpg/01/40/95/78/240_F_140957895_zs38qBJzRRqgTYmTBvc3PGFaukfY2eLr.jpg) repeat 0/64px 64px;
    }

    background: ${theme.main.body.backgroundColor};
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
    word-wrap: normal;
    word-break: keep-all;
    -webkit-overflow-scrolling: touch;
  }

  code {
    word-wrap: break-word;
  }

  pre {
    overflow-x: auto;
  }

  .hljs {
    background: transparent;
  }

  select {
    font-size: 1rem;
    height: 2.25rem;
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
