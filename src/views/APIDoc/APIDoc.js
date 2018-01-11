import React from 'react'
import ReactDOM from 'react-dom'
import {css, sheet} from 'emotion'
import Loadable from 'react-loadable'
import {Type, Row, Col, Card, Box, H1, BreakPoint} from 'styled-curls'
import Markdown from 'react-markdown'
import {Hero, StickyHeader, MainSideBar} from '~/ui'
import {Styles} from '~/components'


function InstallPre (props) {
  return Type({
    color: 'grey',
    face: 'mono',
    ...props
  })
}

const minHeightVP = css`min-height: 100vh;`
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
  getTheme: 'utils/docs/getTheme',
  supportsCSS: 'utils/docs/supportsCSS',
  withHoverQuery: 'utils/docs/withHoverQuery',
}

function aliasDocPath (componentName) {
  if (docAliases[componentName]) {
    return docAliases[componentName]
  }

  return `${componentName}/docs`
}


const cardCSS = css`max-width: 1024px;`


function Doc ({match, docs, ...props}) {
  const {componentName} = match.params
  console.log(sheet)
  return Box({
    flex: true,
    justify: 'center',
    p: 3,
    children: (
      <div>
        <Styles>
          {function ({styles, computedStyle, classNames, elementRef}) {
            console.log('[Class Names]', classNames)
            console.log('[Styles]\n-------------------------\n', styles && styles.join('\n'))
            console.log('[Computed Style]\n-------------------------\n', computedStyle && computedStyle.join('\n'))
            return Card({
              className: cardCSS,
              bg: 'lightestGrey',
              bs: 2,
              br: 1,
              p: 3,
              innerRef: elementRef,
              grow: true,
              children: (
                <>
                  {H1({
                    m: 'b3',
                    lg: true,
                    heavy: true,
                    children: componentName
                  })}

                  {Type({
                    nodeType: 'div',
                    children: <Markdown source={docs && docs.description}/>
                  })}
                </>
              )
            })
          }}
        </Styles>
      </div>
    )
  })
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

  return Row({
    nowrap: true,
    children: (
      <>
        {BreakPoint({
          sm: true,
          children: function ({matchesAny}) {
            return !matchesAny && MainSideBar()
          }
        })}

        {Col({
          nodeType: 'main',
          bg: 'pink',
          className: minHeightVP,
          children: (
            <>
              <StickyHeader componentName={componentName}/>
              <LoadableDoc/>
            </>
          )
        })}
      </>
    )
  })
}
