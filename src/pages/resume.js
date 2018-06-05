import React from 'react';
import Link from 'gatsby-link';
import Resume from '../includes/resume.pdf';

export default () => (
  <div>
    <a href={'../includes/resume.pdf'} download="resume.pdf">
      Click to Download My Resume
    </a>
  </div>
);
