import React from 'react'
import styled from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'
import { orange, blue } from '../utils/colors'

const LineBreak = styled.div`
  width: 100%;
  border-top-width: 2px;
  border-top-style: solid;
  border-top-color: ${orange};
  transform: skew(1.5deg, -1.5deg);
`

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    return (
      <div>
      <Header />
      <div style={{ margin: '15px 0' }}>
        <LineBreak />
        {children}
        <LineBreak
          style={{ borderTopColor: blue, transform: 'skew(-1.5deg, 1.5deg)' }}
        />
      </div>
      <Footer />
      </div>
    )
  }
}

export default Template
