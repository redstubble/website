import React, {Component} from 'react'
import HeaderBanner from './header/header-banner'
import HeaderFade from './header/headerFade'
import NavItems from './header/header-nav-items-container'

class Header extends Component{
  render()  {
    return (
      <div>
      <HeaderBanner />
      <HeaderFade>
      <NavItems />
      </HeaderFade>
    </div>
    )
  }  
}

export default Header