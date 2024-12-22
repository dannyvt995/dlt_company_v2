
import PageNotFound from "@/components/PageNotFound/page";
import { listServicesData } from "@/contrast/page";
import sGallery from "../../../components/GallerySection/style.module.css";
import s from "./style.module.css";
import Image from "next/image";

import Link from "next/link";
import SliderRelatedService from "@/components/SliderRelatedService";

export default async function Page({ params }) {
  const { slug } = params; // Extract the 'slug' parameter from the route
  const subImagesPath = [];
  const subImagesPathOrtherServices = [];
  const subIsMutil = [];
  // Find the service that matches the slug
  const service = listServicesData.find(
    (service) => service.url.replace("/", "") === slug
  );
  const otherServices = listServicesData.filter(
    (service) => service.url.replace("/", "") !== slug
  );

  for (let m = 0; m < subImagesPathOrtherServices.length; m++) {}
  if (typeof service.subImgCount === "number") {
    for (let i = 0; i < service.subImgCount; i++) {
      subImagesPath.push(`${service.path}sub${i + 1}.jpg`);
    }
  }

  if (Array.isArray(service.subImgCount) && Array.isArray(service.isMutil)) {
    for (let y = 0; y < service.isMutil.length; y++) {
      subIsMutil.push(service.isMutil[y]);
    }
    for (let i = 0; i < service.subImgCount.length; i++) {
      subImagesPath.push(`${service.path}${service.isMutil[i]}/main.jpg`);
    }
  }

  if (!service) {
    return <PageNotFound />;
  }

  return (
    <>
      <section className="section_about-product">
        <div className="padding-global">
          <div className="container-medium">
            <div className="about-product_wrapper">
              <div className="about-product_left">
                <div className="label">
                  <div className="text-styles-label">Our services</div>
                </div>
                <h2 className="text-styles-h2">
                  <span style={{ color: "var(--yellow)" }}>{service.name}</span>
                </h2>
              </div>
              <div className="about-product_right">
                <div className="text-styles-content">{service.des}</div>
                {subIsMutil.length > 0 ? (
                  <ul className="subonSlugStyle text-styles-content">
                    {subIsMutil.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className={`${sGallery.container} ${s.more}`}>
            {subImagesPath.length > 0 &&
              subImagesPath.map((subimage, i) => (
                <TemplateBlockImg
                  key={`subdImg-${i}`}
                  path={subimage}
                  alt={`${service.name}_${i}`}
                  title={`${service.name}`}
                />
              ))}
          </div>
        </div>
      </section>
      <section className="section_about-product" style={{paddingTop:"0 !important"}}>
        <div className="padding-global" style={{paddingTop:"0 !important"}}>
          <div className="container-medium">
            <div className="about-product_wrapper">
              <div className="about-product_left">
                <div className="label">
                  <div className="text-styles-label">Our Services</div>
                </div>
                <h2 className="text-styles-h2">
                  <span style={{ color: "var(--yellow)" }}>
                    Related Services
                  </span>
                </h2>
              </div>
              <div className="about-product_right">
                <div className="text-styles-content">
                Explore other services that might suit your needs
                Browse through our variety of services designed to meet different needs and help you find the perfect solution for your project.
                </div>
              </div>
            </div>
          </div>
          <div className={` ${s.more}`}>
            <SliderRelatedService data={otherServices}/>
         
          </div>
        </div>
      </section>
    </>
  );
}
const TemplateBlockImg = (params) => {
  return (
    <div key={params.key} className={params.class ? params.class : ""}>
      <Image
        src={params.path}
        alt={params.alt}
        width={0}
        height={0}
        sizes="100vw"
        loading="lazy"
      />
      <span className="text-styles-content">{params.title}</span>
    </div>
  );
};
