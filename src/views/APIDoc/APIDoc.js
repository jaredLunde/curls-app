import React from 'react'
import ReactDOM from 'react-dom'
import {css} from 'emotion'
import Loadable from 'react-loadable'
import {Type, Row, Col, Card, Box, H1, BreakPoint} from 'styled-curls'
import Markdown from 'react-markdown'
import {Hero, StickyHeader, MainSideBar} from '~/ui'


function InstallPre (props) {
  return Type({
    color: 'grey',
    face: 'mono',
    ...props
  })
}

const minHeightVP = css`min-height: 100vh;`


function Doc ({match, docs, ...props}) {
  const {componentName} = match.params

  return Box({
    flex: true,
    justify: 'center',
    p: 3,
    children: (
      <div>
        {Card({
          bg: 'darkestGrey',
          bs: 2,
          br: 1,
          p: 4,
          grow: true,
          style: {maxWidth: 1280},
          children: (
            <>
              {H1({
                xl: true,
                regular: true,
                color: 'white',
                children: componentName
              })}

              {Type({
                nodeType: 'div',
                color: 'white',
                children: <Markdown source={docs && docs.description}/>
              })}
            </>
          )
        })}
      </div>
    )
  })
}


export default function APIDocs (props) {
  const componentName = props.match.params.componentName
  const LoadableDoc = Loadable({
    loader: () => import(`styled-curls/es/${componentName}/docs`),
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
