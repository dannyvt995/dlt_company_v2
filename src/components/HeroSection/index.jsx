import React from 'react'
import BackgroundGrid from '../BackgroundGrid'

export default function HeroSection() {
    return (
        <>
            <section className="section_about-hero">
                <div className="padding-global is-hero">
                    <div className="container-medium">
                        <div className="about-hero_wrapper">
                            <div className="about-hero_title">
                                <h1 className="text-styles-h1">
                                    <span style={{ color: "var(--yellow)" }}>Welcome to</span>
                                    <br />
                                    DLT Technical Services
                                </h1>
                                <div className="about-hero_desc">
                                    <div className="text-styles-content">Civil & construction, building,<br/>material supply and surface treatment.</div>
                                </div>
                            </div>
                            <img src="/banner_main.jpg" alt="" className="about-hero_image" />
                        </div>
                    </div>
                    
                </div>
            </section>
        


        </>
    )
}
