"use client";
import React, { useState } from "react";
import { navbarContrast, listServicesData } from "@/contrast/page";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function FooterSection() {
  const [formDataFooter, setFormDataFooter] = useState({
    name: "unset",
    phone: "unset",
    email: "",
    typeService: "unset",
  });
  const [isSubmittingFooter, setIsSubmittingFooter] = useState(false);
  const handleSubmitFooter = (e) => {
    e.preventDefault();
    setIsSubmittingFooter(true);
   goToSendMailFooter(formDataFooter);
  };
  const handleChangeFooter = (e) => {
    const { name, value } = e.target;
    setFormDataFooter({
      ...formDataFooter,
      [name]: value,
    });
  };
  const goToSendMailFooter = async () => {
    const promise = fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataFooter),
    }).then((response) => {
      if (!response.ok) {
        throw new Error("An error occurred, please try again");
      }
      return response;
    });

    toast.promise(promise, {
      pending: "Sending information...",
      success: "We have received the information! 🎉",
      error: "An error occurred, please try again",
    }, { containerId: "footer-toast" });

    promise.then(() => {
      setFormDataFooter({
        name: "",
        phone: "",
        email: "",
        typeService: "",
      });

      setIsSubmittingFooter(false);
    });
  };
  return (
    <>
      {isSubmittingFooter && <div className="submitScene"></div>}

      <ToastContainer
       containerId="footer-toast" 
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          position: "fixed",
          zIndex: 9999,
        }}
      />
      <footer className="footer_wrapper">
        <div className="padding-global is-footer">
          <div className="container-medium">
            <div className="footer">
              <div className="footer_content">
                <div className="footer_content-left">
                  <div className="footer_contacts">
                    <a
                      href="/en"
                      aria-current="page"
                      className="footer_logo w-inline-block w--current"
                    >
                      <img
                        src={`logo_clear.png`}
                        loading="lazy"
                        alt=""
                        className="image scaleYLogo"
                      />
                    </a>
                    <div className="footer_contacts-desc">
                      <div
                        data-country="worldwide"
                        className="text-styles-text"
                      >
                        <span className="text-weight-bold text-color-black">
                          DLT Technical Services
                        </span>
                        <br />
                        PO BOX 260, BRAYBROOK,
                        <br />
                        VIC 3019
                        <br />
                        +61 400 526 898
                        <br />
                        admin@dlttechnicalservices.com.au
                      </div>
                    </div>
                  </div>
                  <div className="footer_links-wrapper">
                    <div className="footer_links-wrap">
                      <div className="footer_links-title">
                        <div className="text-styles-category">
                          <span style={{ color: "var(--yellow)" }}>Menu</span>
                        </div>
                      </div>

                      {navbarContrast.listItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.link}
                          className={
                            index === 0
                              ? `text-styles-text link w--current`
                              : `text-styles-text link`
                          }
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <div className="footer_links-wrap features">
                      <div className="footer_links-title">
                        <div className="text-styles-category">
                          <span style={{ color: "var(--yellow)" }}>
                            SERVICES AREAS
                          </span>
                        </div>
                      </div>
                      <div className="footer_features-collection-list-wrapper w-dyn-list">
                        <div
                          role="list"
                          className="footer_features-collection-list w-dyn-items"
                        >
                          {listServicesData.map((item, index) => (
                            <div
                              key={index}
                              role="listitem"
                              className="footer_features-collection-item w-dyn-item"
                            >
                              <Link
                                key={index}
                                href={`/our-service${item.url}`}
                                className="text-styles-text link"
                              >
                                {item.name}
                              </Link>
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
                    <div className="text-styles-category">
                      <span style={{ color: "var(--yellow)" }}>
                        get in touch
                      </span>
                    </div>
                  </div>
                  <div className="footer_content-newsletter-form-blockl w-form">
                    <form
                      id="email-form"
                      name="email-form"
                      data-name="Email Form"
                      method="get"
                      className="footer_content-newsletter-form"
                      data-wf-page-id="664c608e027269fcd33e7018"
                      data-wf-element-id="d26d7ba6-564c-4a10-2fa0-cdf5501d1cd0"
                    >
                      <input
                        placeholder=""
                        type="text"
                        name="email"
                        value={formDataFooter.email}
                        onChange={handleChangeFooter}
                        className="footer_content-newsletter-field w-input"
                      />

                      <button
                        onClick={(e) => handleSubmitFooter(e)}
                        className="footer_content-newsletter-button w-button"
                      >
                        Sends
                      </button>

                      {/* <div className='this_map'>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25225.771449196087!2d144.8332644525979!3d-37.784850139663995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65dc0ad1b7959%3A0x1c045678462e3ae0!2sBraybrook%20VIC%203019%2C%20Australia!5e0!3m2!1sen!2s!4v1734845731726!5m2!1sen!2s" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div> */}
                      <div className="footer_content-newsletter-label">
                        <div className="text-styles-desc">
                          For any query, we will contact you soon
                        </div>
                      </div>
                    </form>
                    <div className="footer_content-newsletter-s w-form-done">
                      <div className="text-styles-content">
                        Confirm your sign-up: Please check your email inbox{" "}
                      </div>
                    </div>
                    <div className="footer_content-newsletter-e w-form-fail"></div>
                  </div>
                </div>
              </div>
              <div className="live-div"></div>
              <div className="footer_label">
                <div className="text-styles-text text-color-gray">
                  © 2024 DLT Technical Services. All Rights Reserved
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
