import { pageDataNew } from '@/contrast/page'
import React from 'react'

export default function AdvantageSection() {
    return (
        <section  className="section_legal">
         
                <div className="container-small">
                    <div className="legal-wrapper">
                      {/*   <div className="legal_title">
                            <h1 className="text-styles-h2">DLT Technical Services</h1>
                            <div className="text-styles-content text-width-bold"></div>
                        </div> */}
                        <div className="legal_content">
                            <div className="legal_content-container">
                                <div className="legal_content-title">
                                    <div className="text-styles-h3">Introduction</div>
                                </div>
                                <div className="text-styles-text text-color-gray">
                                    {pageDataNew.aboutus.intro.map((item, i) => (
                                        <p>{item}</p>
                                    ))}

                                </div>
                            </div>
                            <div className="legal_content-container">
                                <div className="legal_content-title">
                                    <div className="text-styles-h3" >Relationships</div>
                                </div>
                                <div className="text-styles-text text-color-gray">
                                    <p>We are proud to have relationships with many long-term local suppliers and contractors allowing us to deliver projects with confidence and efficiency. Further, we especially value the relationships with our staff. They are the backbone of DLT Technical Services.</p>
                                </div>
                            </div>
                            <div className="legal_content-container">
                                <div className="legal_content-title">
                                    <div className="text-styles-h3">Environmental sustainability</div>
                                </div>
                                <div className="text-styles-text text-color-gray">
                                    <p>At DLT Technical Services we are committed to delivering projects which have positive outcomes for society and the environment. We pride ourselves in ensuring sustainable design, durability of products, energy efficiency, waste reduction, water conservation and incorporation of sustainable building materials. We often assist with redesigns when we see an opportunity for design improvement. These strategies allow us to support present and future generations.</p>
                                </div>
                            </div>
                            <div className="legal_content-container">
                                <div className="legal_content-title">
                                    <div className="text-styles-h3">OH&S</div>
                                </div>
                                <div className="text-styles-text text-color-gray">
                                    <p>To ensure our employees and subcontractors can continue to do the high-quality work they do, DLT Technical Services strives to ensure a safe and risk averse environment for all.</p>
                                    <p>We go above and beyond to ensure a safe workplace where hazards and risks are analysed and monitored. DLT Technical Services manages risk in the workplace through a cohesive and systematic approach by:</p>
                                    <ul>
                                        <li>Identifying reasonably foreseeable health and safety hazards.</li>
                                        <li>Implementing systems and processes to eliminate, control or minimise hazards.</li>
                                        <li>Maintaining, measuring and reviewing systems.</li>
                                        <li>Implementing systems to control new or persistent risks.</li>
                                        <li>Ensuring emergency plans are in place and made known to all workers.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="legal_content-container">
                                <div className="legal_content-title">
                                    <div className="text-styles-h3">Equality & Inclusiveness</div>
                                </div>
                                <div className="text-styles-text text-color-gray">
                                    {/*  <span className="text-weight-bold text-color-black">Log data:</span> */}
                                    <p>We ensure that all employees and contractors are treated with respect and understanding, regardless of race, ethnicity, gender, sexual orientation, age, socio-economic status, religion, physical ability, or political belief.</p>
                                    <p>We believe that everyone has a role to play in ensuring excellence for our clients.</p>
                                </div>
                            </div>
                            <div className="legal_content-container">
                                <div className="legal_content-title">
                                    <div className="text-styles-h3">Building our next generation</div>
                                </div>
                                <div className="text-styles-text text-color-gray">
                                    <p>We understand that it is our employees that make DLT Technical Services great. We encourage staff to develop their talents so they can reach their individual goals and if possible, exceed them. This is carried out by training to employees with a desire to multi-skill and by placing them on projects which allow them to prosper.</p>
                                    <p>Extremely important to us is the employment of apprentices, graduates and students as this allows us to cement our future as well as theirs.</p>
                                </div>
                                <br/><br/>
                              {/*   <div className="text-styles-text text-color-gray">

                                    <span className="text-weight-bold text-color-black">DLT Technical Services</span>
                                    <br />
                                    PO BOX 260, BRAYBROOK<br />
                                    VIC 3019<br />
                                </div> */}
                            </div>


                        </div>
                    </div>
                </div>
       
        </section>
    )
}
