import React, { Component } from 'react';
import Link from 'gatsby-link';
import { Document, Page } from 'react-pdf';
import { Grid, Container } from 'semantic-ui-react';
import Resume from '../includes/resume.pdf';

class ResumeViewer extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <Container>
        <Grid centered style={{ margin: '10px', border: 'black 1px solid' }}>
          <Document file={Resume} onLoadSuccess={this.onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
        </Grid>
        <p style={{ border: 'black 1px solid' }}>
          Page {pageNumber} of {numPages}
        </p>
        <div>
          <a href={'../includes/resume.pdf'} download="resume.pdf">
            Click to Download
          </a>
        </div>
      </Container>
    );
  }
}

export default ResumeViewer;
