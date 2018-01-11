import React from 'react'
import {css} from 'emotion'
import {H2, Divider,  NavLink, colorize} from 'styled-curls'
import {semiBold} from 'styled-curls/es/Type/CSS'
import SideBar from './SideBar'
import * as theme from '~/theme'
import {
  apiDoc,
  cssComponents,
  gridComponents,
  uiComponents,
  animationComponents,
  theming,
  utilityComponents,
  utils
} from '~/sitemap'


function Heading (props) {
  return H2({
    md: true,
    m: 'b2',
    ultraHeavy: true,
    ellipsis: true,
    color: 'white',
    ...props
  })
}

const SideBarDivider = Divider({m: 'y3', bg: 'grey'})

function getLinks (componentNames) {
  return componentNames.map(
    function (componentName) {
      return (
        <li key={componentName}>
          {NavLink({
            db: true,
            color: 'white',
            p: 'y2',
            activeClassName: css`color: ${theme.main.colors['pink']}!important;`,
            ellipsis: true,
            to: apiDoc({componentName}),
            children: componentName
          })}
        </li>
      )
    }
  )
}


function Section (heading, components) {
  return (
    <section>
      {Heading({children: heading})}
      <ul>
        {getLinks(components)}
      </ul>
    </section>
  )
}

export default function (props = {}) {
  return SideBar({
    ...props,
    children: (
      <>
        {Section('CSS Components', cssComponents)}
        {SideBarDivider}

        {Section('Grid Components', gridComponents)}
        {SideBarDivider}

        {Section('UI Components', uiComponents)}
        {SideBarDivider}

        {Section('Theming', theming)}
        {SideBarDivider}

        {Section('Animation', animationComponents)}
        {SideBarDivider}

        {Section('Utility Components', utilityComponents)}
        {SideBarDivider}

        {Section('Utils', utils)}
      </>
    )
  })
}
