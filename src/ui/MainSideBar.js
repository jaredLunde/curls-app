import React from 'react'
import {css} from 'emotion'
import {H2, Divider, A, Link, NavLink, GridBox, BasicBox, colorize} from 'styled-curls'
import {semiBold} from 'styled-curls/es/Type/CSS'
import SideBar from './SideBar'
import * as theme from '~/theme'
import {
  apiDoc,
  basics,
  cssComponents,
  curlsRepo,
  gridComponents,
  guides,
  uiComponents,
  animationComponents,
  theming,
  utilityComponents,
  utils,
  home
} from '~/sitemap'
import Icon from './Icon'


function Heading (props) {
  return (
    <H2 sm ultraHeavy ellipsis color='emphasisText' m='b2' face='mono' {...props}>
      {props.children}
    </H2>
  )
}

const SideBarDivider = Divider({m: 'y3'})

const activeClassName = css`color: ${theme.main.colors['darkPink']}!important;`
function getLinks (componentNames, sitemap = apiDoc, transform) {
  return componentNames.map(
    function (componentName) {
      return (
        <li key={componentName}>
          <NavLink
            w='100%'
            d='block'
            color='primaryLink'
            p='y2 l3'
            activeClassName={activeClassName}
            ellipsis
            to={sitemap({componentName: transform ? transform(componentName) : componentName})}
          >
            {componentName}
          </NavLink>
        </li>
      )
    }
  )
}


function Section (heading, components, sitemap, transform) {
  return (
    <BasicBox w='100%'>
      {({className}) => (
        <section className={className}>
          {Heading({children: heading})}

          <ul>
            {getLinks(components, sitemap, transform)}
          </ul>
        </section>
      )}
    </BasicBox>
  )
}

export default function (props = {}) {
  return SideBar({
    ...props,
    children: (
      <>
        <GridBox sm={0} m='t3 b4' row>
          {function (p) {
            return (
              <div {...p}>
                <Link to={home()}>
                  <Icon name='logo' size='x30' color='primaryLink'/>
                </Link>
              </div>
            )
          }}
        </GridBox>

        {Section('Getting Started', basics, guides, n => n.toLowerCase().replace(/\s/g, '-'))}
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
