import React from 'react'
import { navbarContrast, typeServices } from '@/contrast/page'
import Link from 'next/link'

export default function FooterSection() {
  return (
    <footer className="footer_wrapper">
      <div className="padding-global is-footer">
        <div className="container-medium">
          <div className="footer">
            <div className="footer_content">
              <div className="footer_content-left">
                <div className="footer_contacts">
                  <a href="/en" aria-current="page" className="footer_logo w-inline-block w--current">
                    <img src="logo_clear.png" loading="lazy" alt="" className="image scaleYLogo" />
                  </a>
                  <div className="footer_contacts-desc">
                    <div data-country="worldwide" className="text-styles-text">
                      <span className="text-weight-bold text-color-black">DLT Technical Services</span>
                      <br />
                      PO BOX 260, BRAYBROOK,<br />
                      VIC 3019<br />+61 400 526 898
                      <br/>admin@dlttechnicalservices.com.au
                    </div>
                   
                  </div>
                </div>
                <div className="footer_links-wrapper">
                  <div className="footer_links-wrap">
                    <div className="footer_links-title">
                      <div className="text-styles-category">Menu</div>
                    </div>
                    
                    {navbarContrast.listItems.map((item,index) => (
                      <Link key={index} href={item.link} className={index === 0 ? `text-styles-text link w--current` : `text-styles-text link`}>
                        {item.name}
                      </Link>
                     
                    ))}
                  </div>
                  <div className="footer_links-wrap features">
                    <div className="footer_links-title">
                      <div className="text-styles-category">SERVICES AREAS</div>
                    </div>
                    <div className="footer_features-collection-list-wrapper w-dyn-list">
                      <div role="list" className="footer_features-collection-list w-dyn-items">
                        {typeServices.map((item,index) => (
                          <div role="listitem" className="footer_features-collection-item w-dyn-item">
                              <Link key={index} href="/" className="text-styles-text link">{item}</Link>
                          </div>
                        ))}
                        
                      </div>
                    </div>
                  </div>
                {/*   <div className="footer_links-wrap">
                    <div className="footer_links-title">
                      <div className="text-styles-category">Legal</div>
                    </div>
                    
                    <a href="/en/legal/terms-of-use" className="text-styles-text link">Terms of use</a>
                    <a href="/en/legal/privacy-notice" className="text-styles-text link">Privacy notice</a>
                  </div> */}
                </div>
              </div>
              <div className="footer_content-right">
                <div className="footer_content-right-title">
                  <div className="text-styles-category">Get In Touch</div>
                </div>
                <div className="footer_content-newsletter-form-blockl w-form">
                  <form id="email-form" name="email-form" data-name="Email Form" method="get" className="footer_content-newsletter-form" data-wf-page-id="664c608e027269fcd33e7018" data-wf-element-id="d26d7ba6-564c-4a10-2fa0-cdf5501d1cd0">
                    <input className="footer_content-newsletter-field w-input" maxLength="256" name="Email" data-name="Email" placeholder="Email" type="email" id="Email-4" required="" />
                    <input type="submit" data-wait="Please wait..." className="footer_content-newsletter-button w-button" value="Confirm" />
                    <div className="footer_content-newsletter-label">
                    <div className="text-styles-desc">For any query, we will contact you soon</div>                  
                    </div>
                  </form>
                  <div className="footer_content-newsletter-s w-form-done">
                    <div className="text-styles-content">Confirm your sign-up: Please check your email inbox </div>
                  </div>
                  <div className="footer_content-newsletter-e w-form-fail"></div>
                </div>
              </div>
            </div>
            <div className="live-div"></div>
            <div className="footer_label">
              <div className="text-styles-text text-color-gray">© 2024 "DLT Technical Services. All Rights Reserved</div>
             
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  )
}
