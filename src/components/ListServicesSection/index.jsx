"use client";
import { listServicesData } from "@/contrast/page";
import React from "react";
import s from "./style.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Link from "next/link";
export const TemplateBlock = (params) => {
  return (
 
  <div className="isItemServicesInfo">
     
      <div className="titleServiceHead">
        <div className="q-wrapper">
          <h3 className="text-styles-h3">{params.name}</h3>
        </div>
      </div>

      <div className="titleServiceBody">
        <div className="text-styles-content">
          {params.des}
          {params.isMutil ? (
            <ul className={s.listChildItem}>
              {params.isMutil?.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>
          ) : (
            <></>
          )}
        </div>
      </div>
      <Link className="button-item-service" href={`/our-service/${params.url}`}>Explore</Link>
    </div>

  
  );
};
export default function ListServicesSection() {
  return (
    <section className="section_about-product">
      <div className="padding-global">
        <div className="container-medium">
          <div className="about-product_wrapper">
            <div className="about-product_left">
              <div className="label">
                <div className="text-styles-label">Our services</div>
              </div>
              <h2 className="text-styles-h2">
                <strong>
                  Let's Explore
                  <br />
                  <span style={{color:'var(--yellow)'}}>Our Services</span>
                </strong>
              </h2>
            </div>
            <div className="about-product_right">
              <div className="text-styles-content">
                From civil construction and material supply to pavement
                imprinting and surface treatment, we deliver superior quality
                and tailored solutions for every project.
              </div>
            </div>
          </div>
          <ul className="listItemServices">
            {listServicesData.map((typeService, index) => {
             
              const subImagesPath = [];
              if (typeof typeService.subImgCount === "number") {
                for (let i = 0; i < typeService.subImgCount; i++) {
                  subImagesPath.push(`${typeService.path}sub${i + 1}.jpg`);
                }
              }

              if (
                Array.isArray(typeService.subImgCount) &&
                Array.isArray(typeService.isMutil)
              ) {
                for (let i = 0; i < typeService.subImgCount.length; i++) {
                  subImagesPath.push(
                    `${typeService.path}${typeService.isMutil[i]}/main.jpg`
                  );
                }
              }

              return (
                
                <li
                  key={index}
                  role="listitem"
                  className="w-dyn-item isItemServices"
                >
                  
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper imgItemService"
                  >
                    {subImagesPath.map((pathImage, indexImage) => (
                      <SwiperSlide key={`imgSlider-${indexImage}`}>
                        <img
                          src={pathImage}
                          alt={indexImage}
                        />
                        {typeService.isMutil ? <span className="tag_sub_slider">{typeService.isMutil[indexImage]}</span> : <></>}
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  
                  <TemplateBlock
                  url={typeService.url}
                    des={typeService.des}
                    name={typeService.name}
                    isMutil={typeService.isMutil}
                  />
                   
                </li>
            
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
