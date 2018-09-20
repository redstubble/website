import React from 'react';
import PreviewItem from '../components/menuPreviewItem'


class sandBoxProjects extends React.Component {

    projects = () => ([{
        name: 'd3-sandbox',
        imgSrc: '../images/sandbox-projects/d3.png',
        pageLink: 'd3-examples',
    }])

    render () {
        return
            this.projects.map(p => (
                <PreviewItem
                ButtonTitle={p.name}
                ImgSrc={p.imgSrc}
                PageLink={p.pageLink}
                type={PageType['projects']}
                key={p.name}
              />
            ))
    }
}

export default sandBoxProjects;
