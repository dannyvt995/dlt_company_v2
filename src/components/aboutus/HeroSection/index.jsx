import React from "react";
import s from "./style.module.css";
export default function HeroSection() {
  return (
    <section className="section_about-hero">
        <div className="padding-global-top">
        <div className="container-medium">
        {/*   <div className={s.wrapper}>
            <img
              src="/DLT_Logo_White.png"
              alt=""
              className="about-hero_image"
            />
          </div> */}
          <div className={s.title}>
            <h1 className="text-styles-h1">
              <span style={{ color: "var(--yellow)" }}>Welcome to</span>
              <br />
              DLT Technical Services
            </h1>
          
          </div>
        </div>
      </div>
    </section>
  );
}
