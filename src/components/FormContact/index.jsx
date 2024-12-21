"use client";
import { listServicesData } from "@/contrast/page";
import React, { useState } from "react";
import s from "./style.module.css";
export default function FormContact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    typeService: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^[0-9]+$/.test(formData.phone)) {
      newErrors.phone = "Phone must be a valid number";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email must be valid";
    }
    if (!formData.typeService)
      newErrors.typeService = "Please select a service type";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <section className="section_cta">
      <div className="padding-global">
        <div className="container-medium">
          <div data-country="worldwide" className="cta-wrapper man">
            <div className="cta-content">
              <div className="cta-content-title">
                <div className="cta-title">
                  <h2 className="text-styles-h2 text-color-white">
                    Get In Touch
                  </h2>
                </div>
                <div className="cta-desc">
                  <div className="text-styles-content text-color-light-gray">
                  Share your requirements,<br/>and we’ll get back to you promptly.
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmit} className={s.form}>
                <div className={s.field}>
                  <label className={s.label}>
                    Name:
                    <input
                      placeholder="Fill your name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                     {errors.name && <p className={s.err}>**{errors.name}</p>}
                  </label>
                </div>

                <div className={s.field}>
                  <label className={s.label}>
                    Phone:
                    <input
                      placeholder="Fill your phone"
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && <p className={s.err}>**{errors.phone}</p>}
                  </label>
                  
                </div>

                <div className={s.field}>
                  <label className={s.label}>
                    Email:
                    <input
                      placeholder="Fill your email"
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <p className={s.err}>**{errors.email}</p>}
                  </label>
                  
                </div>

                <div className={s.field}>
                  <label className={s.label}>
                    Type of Service:
                    <select
                      name="typeService"
                      value={formData.typeService}
                      onChange={handleChange}
                    >
                      <option value="">Select a service</option>
                      {listServicesData.map((item, index) => (
                        <option key={index} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    {errors.typeService && (
                        <p className={s.err}>**{errors.typeService}</p>
                    )}
                  </label>
                  
                </div>

                <button
                  type="submit"
                  className="button f-width btn-demo w-inline-block"
                >
                  <div className="text-styles-button">Book a call</div>
                </button>
              </form>
            </div>
            <img
              src="https://cdn.prod.website-files.com/664c608e027269fcd33e7008/664f16d7030e35e44219ab7c_cta%20logo.svg"
              loading="lazy"
              alt=""
              className="cta-logo"
            />
            <img
              src="/logo_clear_full.png"
              alt="A man"
              className="cta-man-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
