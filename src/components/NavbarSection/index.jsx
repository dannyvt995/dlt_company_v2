import { navbarContrast } from '@/contrast/page'
import Link from 'next/link'
import React from 'react'

export default function NavbarSection() {
  return (
    <nav  className="header-wrapper">
      <div className="container-medium">
        <div className="header">
          <div className="header_left">
            <Link href="/" aria-current="page" className="header_logo w-inline-block w--current">
              <img src="logo_clear.png" loading="lazy" alt="Benetics logo" className="image scaleYLogo" />
            </Link>
            <div className="header_nav">
              {navbarContrast.listItems.map((item,index) => (
                <Link href={item.link} className={index === 0 ? `header_nav-link w-inline-block w--current` : `header_nav-link w-inline-block`}>
                  <div className="text-styles-text">{item.name}</div>
                </Link>
              ))}
            </div>
          </div>
          <div className="header_right-wrap">
            <div className="header_right">
              <a href="/" target="_blank" className="small-button is-primal btn-demo mobile-hide w-inline-block">
                <div className="text-styles-small-button">Let in touch</div>
              </a>
            </div>
            <div className="header-btn-wrap">
              <div  className="header_menu-btn">
                <div  className="text-styles-text">Menu</div>
                <div  className="header_menu-btn-close">
                  <div className="text-styles-text">Close</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-menu">
          <div className="mobile-menu_links-wrap">
              {navbarContrast.listItems.map((item,index) => (
         
                 <Link href={item.link} aria-current="page" className={index === 0 ? "text-styles-h2 w--current" : "text-styles-h2"}>{item.name}</Link>
              ))}
           
       
          </div>
          <div className="mobile-menu_buttons-wrap">
            <a href="https://prod-web.beneticsapi.com/" target="_blank" className="button w-inline-block">
              <div className="text-styles-button">Login</div>
            </a>
            <a href="https://calendar.app.google/6Z2v15KWnECsSpqaA" target="_blank" className="button is-primal btn-demo w-inline-block">
              <div className="text-styles-button">Book a demo</div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
