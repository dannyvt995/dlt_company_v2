import { listServicesData } from "@/contrast/page";
import React from "react";
import Plus from "../Icon/Plus";
import s from "./style.module.css";
import Image from "next/image";

const randomClassesBlockType = [`${s.default}`,`${s.wide}`, `${s.big}`]; //"tall"
const TemplateBlockImg = (params) => {
  return (
    <div key={params.key} className={params.class ? params.class : ""}>
      <Image src={params.path} alt={params.alt} width={0} height={0} sizes="100vw" loading="lazy"/>
      <span>{params.title}</span>
    </div>
  );
};
export default function GallerySection() {
  return (
    <>
      <div className="padding-global is-hero">
        <div className="container-medium">
          <div className="about-hero_wrapper">
            <div className="about-hero_title">
              <h1 className="text-styles-h1">
                <span style={{ color: "var(--yellow)" }}>Let's explore</span>
                <br />
                Our Galery
              </h1>
              <div className="about-hero_desc">
                <div className="text-styles-content">
                  Explore our gallery showcasing a range of completed projects,
                  from buildings to pavement designs. Each project highlights
                  our commitment to quality and craftsmanship.
                </div>
              </div>
            </div>
            <div className={s.container}>
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
                  <>
                    <TemplateBlockImg
                        key={`mainImg-${index}`}
                        path={`${typeService.path}${typeService.mainImg}`}
                        alt={`${typeService.name}`}
                        title={typeService.name}
                    />
                    {subImagesPath.length > 0 &&
                      subImagesPath.map((subimage, i) => (
                        <TemplateBlockImg
                            key={`subImg-${i}`}
                            path={subimage}
                            alt={`${typeService.name}_${i}`}
                            title={`${typeService.name}`}
                        />
                      ))}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
