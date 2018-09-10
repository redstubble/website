import React, { Component } from 'react'
import {
  Grid,
  Container,
  Dimmer,
  Loader,
  Icon,
  Button,
} from 'semantic-ui-react'
import Resume from '../assets/resume.pdf'

const NoDecorationLink = {
  textDecoration: 'none',
  color: 'inherit',
}

class ResumeViewer extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages })
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      try {
        const reactPdf = require('react-pdf')
        const docPdf = require('react-pdf/dist/entry.webpack')
        this.document = docPdf.Document
        this.page = reactPdf.Page
      } catch (e) {
        console.error(e)
      }
    }

    this.setState({
      elWidth: document.getElementById('pdf-container').clientWidth,
    })
  }

  render() {
    const { pageNumber, numPages } = this.state
    if (
      typeof this.page === 'undefined' ||
      typeof this.document === 'undefined' ||
      !this.state.elWidth
    ) {
      return (
        <Dimmer active>
          <Loader content="Loading" />
        </Dimmer>
      )
    }

    const Page = this.page
    const Document = this.document

    return (
      <Container id="pdf-container">
        <Grid centered style={{ margin: '15px 0' }}>
          <Document
            file={Resume}
            loading={
              <Dimmer active>
                <Loader content="Loading" />
              </Dimmer>
            }
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page width={this.state.elWidth} pageNumber={pageNumber} />
          </Document>
          {pageNumber} of {numPages}
        </Grid>
        <p>
          <Button
            onClick={() => {
              if (pageNumber > 1)
                this.setState({
                  pageNumber: pageNumber - 1,
                })
            }}
            labelPosition="left"
            icon
          >
            Last
            <Icon name="left arrow" />
          </Button>
          <Button
            onClick={() => {
              if (pageNumber < numPages)
                this.setState({
                  pageNumber: pageNumber + 1,
                })
            }}
            icon
            labelPosition="right"
          >
            Next
            <Icon name="right arrow" />
          </Button>
        </p>
        <p>
          <a style={NoDecorationLink} href={Resume} download="resume.pdf">
            <Button icon>
              <Icon name="download" />
            </Button>
          </a>
        </p>
        <div style={{ height: '10px' }} />
      </Container>
    )
  }
}

export default ResumeViewer
