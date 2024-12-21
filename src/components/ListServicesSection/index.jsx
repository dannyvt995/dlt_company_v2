import { listServicesData } from "@/contrast/page";
import React from "react";
import Plus from "../Icon/Plus";
import s from './style.module.css'
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
                <strong>Let's Explore<br/>Our Services</strong>
              </h2>
            </div>
            <div className="about-product_right">
              <div className="text-styles-content">
              From civil construction and material supply to pavement imprinting and surface treatment, we deliver superior quality and tailored solutions for every project.
              </div>
            </div>
          
          </div>
          <ul className="listItemServices">
                {listServicesData.map((item,index) => (
                     <li key={index} role="listitem" className="w-dyn-item isItemServices">
                     <div className="imgItemService">
                         <img src={`${item.path}${item.mainImg}`} alt=""/>
                     </div>
                     <div className="isItemServicesInfo">
                       <div className="titleServiceHead">
                         <div className="q-wrapper">
                           <h3 className="text-styles-h3">
                                {item.name}
                           </h3>
                         </div>
                        {/*  <div className="toggle-arrow w-embed"><Plus/></div> */}
                       </div>
                       <div className="titleServiceBody">
                         <div className="text-styles-content">
                          {item.des}
                          {item.isMutil ? 
                          <ul className={s.listChildItem}>
                            {item.isMutil?.map((it,i) => (
                              <li key={i}>{it}</li>
                            ))}
                          </ul> : <></>}
                         </div>
                       </div>
                     </div>
                   </li>
                ))}
             
            </ul>
        </div>
      </div>
    </section>
  );
}
