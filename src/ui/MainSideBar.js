import React from 'react'
import {css} from 'emotion'
import {H2, Divider,  NavLink, colorize} from 'styled-curls'
import {semiBold} from 'styled-curls/es/Type/CSS'
import SideBar from './SideBar'
import * as theme from '~/theme'
import {
  apiDoc,
  basics,
  cssComponents,
  gridComponents,
  guides,
  uiComponents,
  animationComponents,
  theming,
  utilityComponents,
  utils
} from '~/sitemap'


function Heading (props) {
  return H2({
    sm: true,
    m: 'b2',
    ultraHeavy: true,
    ellipsis: true,
    color: 'darkGrey',
    ...props
  })
}

const SideBarDivider = Divider({m: 'y3', bg: 'translucentLight'})

function getLinks (componentNames, sitemap = apiDoc) {
  return componentNames.map(
    function (componentName) {
      return (
        <li key={componentName}>
          {NavLink({
            w: '100%',
            d: 'block',
            color: 'darkGrey',
            p: 'y2 l3',
            activeClassName: css`color: ${theme.main.colors['darkPink']}!important;`,
            ellipsis: true,
            to: sitemap({componentName}),
            children: componentName
          })}
        </li>
      )
    }
  )
}


function Section (heading, components, sitemap) {
  return (
    <section>
      {Heading({children: heading})}
      <ul>
        {getLinks(components, sitemap)}
      </ul>
    </section>
  )
}

export default function (props = {}) {
  return SideBar({
    ...props,
    children: (
      <>
        {Section('Getting Started', basics, guides)}
        {SideBarDivider}

        {Section('Base Components', cssComponents)}
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
