import React from 'react'
import ReactDOM from 'react-dom'
import {css, injectGlobal} from 'emotion'
import Loadable from 'react-loadable'
import {ThemeConsumer, Drop, injectRem, Type, A, Divider, Button, Flex, Grid, GridBox, BasicBox, Row, Col, Card, Box, H1, BreakPoint} from 'styled-curls'
import {benchmark} from '~/utils'
import bench from '../../bench'
import {Hero, StickyHeader, MainSideBar, Theming} from '~/ui'
import {ScrollToTop} from '~/components'
import {minHeightVP, minWidth0} from '~/styles'
import * as theme from '~/theme'
import Doc from './Doc'

const docAliases = {
  BasicBox: 'Box/docs/BasicBox',
  GridBox: 'Box/docs/GridBox',
  A: 'Link/docs/A',
  NavLink: 'Link/docs/NavLink',
  H1: 'Type/docs/H1',
  H2: 'Type/docs/H2',
  H3: 'Type/docs/H3',
  H4: 'Type/docs/H4',
  H5: 'Type/docs/H5',
  H6: 'Type/docs/H6',
  P: 'Type/docs/P',
  injectTheme: 'theming/docs/injectTheme',
  replaceTheme: 'theming/docs/replaceTheme',
  injectRem: 'theming/docs/injectRem',
  defaultColors: 'theming/docs/defaultColors',
  defaultHoverColors: 'theming/docs/defaultHoverColors',
  defaultActiveColors: 'theming/docs/defaultActiveColors',
  defaultTypeFaces: 'theming/docs/defaultTypeFaces',
  colorize: 'utils/docs/colorize',
  createComponent: 'utils/docs/createComponent',
  createNode: 'utils/docs/createNode',
  directionalScale: 'utils/docs/directionalScale',
  mergeTheme: 'utils/docs/mergeTheme',
  supportsCSS: 'utils/docs/supportsCSS',
  withHoverQuery: 'utils/docs/withHoverQuery',
}


function aliasDocPath (componentName) {
  if (docAliases[componentName]) {
    return docAliases[componentName]
  }

  return `${componentName}/docs`
}


export default function APIDocs (props) {
  const componentName = props.match.params.componentName
  const LoadableDoc = Loadable({
    loader: () => import(`styled-curls/es/${aliasDocPath(componentName)}`),
    loading: function (loadingProps) {
      return Doc({...props, ...loadingProps})
    },
    render (docs, loadableProps) {
      console.log('[Loaded API docs]', docs, props)
      return Doc({docs, ...props, ...loadableProps})
    }
  })

  return (
    <ScrollToTop>
      <Row wrap='no'>
        <BreakPoint sm>
          {function ({matchesAny}) {
            return !matchesAny && MainSideBar()
          }}
        </BreakPoint>

        <Box fluid className={[minWidth0, minHeightVP]}>
          {function ({className}) {
            return (
              <div className={className}>
                <BreakPoint sm>
                  {function ({matchesAny}) {
                    return matchesAny && <StickyHeader componentName={componentName}/>
                  }}
                </BreakPoint>

                <Box pos='relative'>
                  {function ({className}) {
                    return (
                      <main className={className}>
                        <Theming {...props}/>
                        <LoadableDoc/>
                      </main>
                    )
                  }}
                </Box>
              </div>
            )
          }}
        </Box>
      </Row>
    </ScrollToTop>
  )
}
