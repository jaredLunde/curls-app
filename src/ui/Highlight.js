import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {findDOMNode} from 'react-dom'
import hljs from 'highlight.js/lib/highlight'
import css from 'highlight.js/lib/languages/css'
import xml from 'highlight.js/lib/languages/xml'
import javascript from 'highlight.js/lib/languages/javascript'


hljs.registerLanguage('css', css);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('js', javascript);
hljs.registerLanguage('javascript', javascript);


export default class Highlight extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    language: PropTypes.string,
    style: PropTypes.object
  }

  componentDidMount () {
    hljs.highlightBlock(findDOMNode(this.refs.code))
  }

  componentDidUpdate () {
    hljs.initHighlighting.called = false
    hljs.highlightBlock(findDOMNode(this.refs.code))
  }

  render () {
    const { children, className, language, style } = this.props

    return (
      <pre
        className={className}
        style={style}
      >
        <code
          className={language}
          ref='code'
        >
          {children}
        </code>
      </pre>
    )
  }
}
