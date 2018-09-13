import React, {Component} from 'react'
import { connect } from 'react-redux'
import NavItems from './header-nav-items-presenter'
import { red, blue, orange } from '../../utils/colors'
import PageType from '../../utils/pageType'


class NavItemsContainer extends Component {
  state = {
      index: {
        Projects: {
          title: 'Projects',
          color: red,
          pageType: PageType.projects,
        },
        Experience: {
          title: 'Experience',
          color: blue,
          pageType: PageType.experiences,
        },
        Resume: {
          title: 'Resume',
          color: orange,
          pageType: PageType.resume,
        }
    },
    post: {
        Post: {
            color: blue,
        }
      },
  }

  getNavItems = (page, post) => {
      if (this.props.post) {
          return {
              ...this.state.post,
              Post : {
                ...this.state.post.Post,
                'title' : this.props.post,
                'pageType' : this.props.page
            }
          }
      }
      return this.state.index
  }





  render() {
    const Items = this.getNavItems(this.props.page, this.props.post);
    return (
    <NavItems items={Items} />
    )
  }
}


const mapStateToProps = state => {
    return {
      page: state.page,
      post: state.post
    }
  }
  
  export default connect(
    mapStateToProps,
    null
  )(NavItemsContainer) // passes dispatch to component.