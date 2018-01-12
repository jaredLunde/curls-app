import React from 'react'
import {withRouter} from 'react-router-dom'


class ScrollToTop extends React.Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }

  componentDidUpdate (prevProps) {
    console.log('pp loc', prevProps.location)
    console.log('p loc', this.props.location)
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render () {
    return this.props.children
  }
}


export default withRouter(ScrollToTop)
