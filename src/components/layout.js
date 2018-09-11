import React from 'react'
import { Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'
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
      <div
      // style={{
      //   marginLeft: 'auto',
      //   marginRight: 'auto',
      //   maxWidth: rhythm(24),
      //   padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      // }}
    >
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
