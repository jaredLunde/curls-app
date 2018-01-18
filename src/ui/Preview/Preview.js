import React from 'react'
import formToObject from 'object-from-form'
import Toggle from 'react-cake/es/Toggle'
import createOptimized from 'react-cake/es/utils/createOptimized'
import {Grid, Box, Flex, Row, Col, Type, A, BreakPoint, H2} from 'styled-curls'
import {Styles} from '~/components'
import {minWidth0} from '~/styles'
import {formatStyles, stringifyComponent, ignoreEmptyProps, replaceEmptyProps} from './utils'
import CodeBlock from '../CodeBlock'
import Controls from './Controls'
import ToggleCodeView from './ToggleCodeView'
import ContentBox from '../ContentBox'


function renderComponent (Component, props = {}, innerRef) {
  return Box({
    flex: true,
    //p: 3,
    pos: 'relative',
    // bw: 'b1',
    // bc: 'translucentLight',
    bg: 'lightestGrey',
    justify: 'center',
    align: 'center',
    children: ({className}) => (
      <div className={className}>
        {createOptimized(
          Component,
          {...props, innerRef},
          props.children || null
        )}
      </div>
    )
  })
}



function defaultChildren ({innerRef, ...props}) {
  return <div {...props} ref={innerRef}/>
}


export default class Preview extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = this.getInitialState(props)
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState !== this.state) {
      this.forceUpdate() // Updates the <Styles> component
    }
  }

  getInitialState (props) {
    const {propTypes, type} = props
    const objKeys = Object.keys(propTypes)
    const out = {}

    for (let x = 0; x < objKeys.length; x++) {
      const key = objKeys[x]
      out[key] = propTypes[key].defaultValue
    }

    if (type === 'Component') {
      const children = propTypes.children && propTypes.children
      out.children = children && children.example ? children.example : defaultChildren
    }

    return ignoreEmptyProps(out)
  }

  setFormRef = el => this.form = el
  setProps = () => {
    this.setState(replaceEmptyProps(formToObject(this.form)))
  }

  render () {
    const {Component, componentName, propTypes, type} = this.props

    return ContentBox({
      m: 't4',
      heading: 'Test drive',
      children: (
        <>
          <form ref={this.setFormRef}>
            {Controls({propTypes, onChange: this.setProps})}
          </form>


          <Styles>
            {({styles, computedStyles, classNames, elementRef}) => {
              return (
                <>
                  {/** Component render example*/}
                  {renderComponent(Component, this.state, elementRef)}
                  {/** Component output */}
                  {ToggleCodeView({
                    headingA: 'JSX',
                    componentA: CodeBlock({
                      grow: 1,
                      language: 'xml',
                      bw: 'y1',
                      children: stringifyComponent(componentName, type, this.state)
                    }),
                    headingB: 'DIRECT FUNCTION',
                    componentB: this.props.isFunctional && CodeBlock({
                      grow: 1,
                      language: 'js',
                      bw: 'y1',
                      children: stringifyComponent(componentName, type, this.state, true)
                    })
                  })}
                  {/** CSS output */}
                  {styles && ToggleCodeView({
                    headingA: 'EMOTION STYLES',
                    componentA: CodeBlock({
                      grow: 1,
                      bw: 't1',
                      language: 'css',
                      children: formatStyles(styles) || 'null'
                    }),
                    headingB: 'COMPUTED STYLES',
                    componentB: CodeBlock({
                      grow: 1,
                      bw: 't1',
                      language: 'css',
                      children: formatStyles(computedStyles) || 'null'
                    })
                  })}
                </>
              )
            }}
          </Styles>
        </>
      )
    })
  }
}
