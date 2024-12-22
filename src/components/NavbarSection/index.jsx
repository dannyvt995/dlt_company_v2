"use client"
import { navbarContrast } from '@/contrast/page'
import gsap from 'gsap'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React,{useEffect, useState, useRef} from 'react'
import BackgroundGrid from '../BackgroundGrid'
import { useRouter } from 'next/navigation'

export default function NavbarSection() {
  const router = useRouter()
  const navbarMobiModal = useRef(null)
  const buttonOpen = useRef(null)
  const buttonClose = useRef(null)
  const pathName = usePathname()

  const handleOpenMenu = () => {
    buttonClose.current.style.display = 'flex'
    gsap.timeline().set(buttonOpen.current,{
      opacity:0
    }).to(navbarMobiModal.current,{
      y:"100vh",
      duration:1,
      ease:'power3.out'
    })
  }
  const handleCloseMenu = () => {
    buttonClose.current.style.display = 'none'
    gsap.timeline().set(buttonOpen.current,{
      opacity:1
    }).to(navbarMobiModal.current,{
      y:"0vh",
      duration:1,
      ease:'power3.out'
    })
  }
  const handleButtonModalClick = () => {
    router.push('/contact-us')
    handleCloseMenu()
  }
  return (
    <nav  className="header-wrapper">
      <div className="container-medium">
        <div className="header">
          <div className="header_left">
            <Link href="/" aria-current="page" className="header_logo w-inline-block w--current">
              <img src={`logo_clear.png`} loading="lazy" alt="Benetics logo" className="image scaleYLogo" />
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
             {/*  <a href="/" target="_blank" className="small-button is-primal btn-demo mobile-hide w-inline-block">
                <div className="text-styles-small-button">Let in touch</div>
              </a> */}
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
          <BackgroundGrid/>
          <div className="mobile-menu_buttons-wrap">
            <span  onClick={() => handleButtonModalClick()} className="button is-primal btn-demo w-inline-block">
              <div className="text-styles-button" >Get in touch</div>
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}
