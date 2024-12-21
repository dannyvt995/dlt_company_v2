"use client"
import { navbarContrast } from '@/contrast/page'
import gsap from 'gsap'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React,{useEffect, useState, useRef} from 'react'

export default function NavbarSection() {
  const [isOpenMenu,setIsOpenMenu] = useState(false)
  const navbarMobiModal = useRef(null)
  const buttonOpen = useRef(null)
  const buttonClose = useRef(null)
  const pathName = usePathname()

  const handleOpenMenu = () => {
    buttonClose.current.style.display = 'flex'
    gsap.timeline().to(navbarMobiModal.current,{
      y:"100vh",
      duration:1
    }).to(buttonOpen.current,{
      opacity:0
    },"<")
  }
  const handleCloseMenu = () => {
    buttonClose.current.style.display = 'none'
    gsap.timeline().to(navbarMobiModal.current,{
      y:"0vh",
      duration:1
    }).to(buttonOpen.current,{
      opacity:1
    },"<")
  }
  return (
    <nav  className="header-wrapper">
      <div className="container-medium">
        <div className="header">
          <div className="header_left">
            <Link href="/" aria-current="page" className="header_logo w-inline-block w--current">
              <img src="logo_clear.png" loading="lazy" alt="Benetics logo" className="image scaleYLogo" />
            </Link>
            <ul className="header_nav">
              {navbarContrast.listItems.map((item,index) => (
                <li key={index}>
                  <Link href={item.link} className={item.link === pathName ? `header_nav-link w-inline-block w--current` : `header_nav-link w-inline-block`}>
                    <div className="text-styles-text">{item.name}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="header_right-wrap">
            <div className="header_right">
              <a href="/" target="_blank" className="small-button is-primal btn-demo mobile-hide w-inline-block">
                <div className="text-styles-small-button">Let in touch</div>
              </a>
            </div>
            <div className="header-btn-wrap">
              <div  className="header_menu-btn">
                <div  className="text-styles-text" ref={buttonOpen} onClick={() => handleOpenMenu()}>Menu</div>
                <div  className="header_menu-btn-close"  ref={buttonClose} onClick={() => handleCloseMenu()}>
                  <div className="text-styles-text">Close</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-menu" ref={navbarMobiModal}>
          <div className="mobile-menu_links-wrap">
              {navbarContrast.listItems.map((item,index) => (
         
                 <Link onClick={() => handleCloseMenu()} key={index} href={item.link} aria-current="page" className={item.link === pathName ? "text-styles-h2 w--current" : "text-styles-h2"}>{item.name}</Link>
              ))}
           
       
          </div>
          <div className="mobile-menu_buttons-wrap">
            <a href="/contact-us" target="_blank" className="button is-primal btn-demo w-inline-block">
              <div className="text-styles-button">Book a demo</div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
