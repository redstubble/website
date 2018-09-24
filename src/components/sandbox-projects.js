import React from 'react';
import PreviewItem from '../components/menuPreviewItem';
import PageType from '../utils/pageType'
import { Grid, Container } from 'semantic-ui-react'
const img = require('../images/sandbox-projects/d3.png');


class sandBoxProjects extends React.Component {
    state = {
        projects: []
    }

    projects = () => ([{
        name: 'D3',
        imgSrc: img,
        pageLink: 'project/d3-examples',
    }]);

    componentDidMount() {
        this.setState({
            projects: this.projects()
        })
    }

    render () {
        let content = null;
        if (this.state.projects.length > 0)
        {
            content = this.projects().map(p => (
                <PreviewItem
                    ButtonTitle={p.name}
                    ImgSrc={p.imgSrc}
                    PageLink={p.pageLink}
                    type={PageType['projects']}
                    key={p.name}
                  />
                ))
        }
        return  (
            <Container style={{ margin: '20px 0' }}>
            <h3 style={{textAlign:'center'}}>SandBox</h3>
            <Grid centered>{content}</Grid>
          </Container>
        )       
    }
}

export default sandBoxProjects;
