import React from 'react'
import Header from './header/header-banner'
import HeaderBanner from './header/header-banner'
import HeaderFade from './header/headerFade'
import NavItems from './header/headerNavItems'

export default () => (
  <div>
    <Header />
    <HeaderFade>
      <NavItems />
    </HeaderFade>
  </div>
)
