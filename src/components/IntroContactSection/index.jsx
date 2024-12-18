import React from 'react'

export default function IntroContactSection() {
    return (
        <section  className="section_cta">
            <div className="padding-global">
                <div className="container-medium">
                    <div data-country="worldwide" className="cta-wrapper man">
                        <div className="cta-content">
                            <div className="cta-content-title">
                                <div className="cta-title">
                                    <h2 className="text-styles-h2 text-color-white">Get In Touch</h2>
                                </div>
                                <div className="cta-desc">
                                    <div className="text-styles-content text-color-light-gray">Learn how Benetics can boost your team’s efficiency. Join Antonio for a quick, 30-minute video call.</div>
                                </div>
                            </div>
                            <a href="https://calendar.app.google/6Z2v15KWnECsSpqaA" target="_blank" className="button f-width btn-demo w-inline-block">
                                <div className="text-styles-button">Book a call</div>
                            </a>
                        </div>
                        <img src="https://cdn.prod.website-files.com/664c608e027269fcd33e7008/664f16d7030e35e44219ab7c_cta%20logo.svg" loading="lazy" alt="" className="cta-logo" />
                        <img src="https://cdn.prod.website-files.com/664c608e027269fcd33e7008/666200c32f71a79fa7e30a1d_Antonio.webp" loading="lazy" sizes="(max-width: 479px) 79vw, 31vw" srcSet="https://cdn.prod.website-files.com/664c608e027269fcd33e7008/666200c32f71a79fa7e30a1d_Antonio-p-500.webp 500w, https://cdn.prod.website-files.com/664c608e027269fcd33e7008/666200c32f71a79fa7e30a1d_Antonio-p-800.webp 800w, https://cdn.prod.website-files.com/664c608e027269fcd33e7008/666200c32f71a79fa7e30a1d_Antonio.webp 1206w" alt="A man" className="cta-man-image" />
                    </div>
              
                </div>
            </div>
        </section>
    )
}
