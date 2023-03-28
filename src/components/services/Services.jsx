import React from "react";
import "./services.css";
import Transition from "../transition/Transition";
import gsap from "gsap";
import s1 from "../../assets/ART.webp";
import s2 from "../../assets/add.webp";
import s3 from "../../assets/copy.webp";
import s4 from "../../assets/dm.webp";
import s5 from "../../assets/pd.webp";
import s6 from "../../assets/pp.webp";

export default function Services() {
  return (
    <div className="services-s">
      <section className="services">
        <h1 className="service-title">services</h1>
        <div className="service-boxs">
          <div className="service-box">
            <img src={s1} className="service-img" loading="lazy" />
            <div className="blackk" />
          </div>
          <div className="service-box">
            <img src={s2} className="service-img" loading="lazy" />
            <div className="blackk" />
          </div>
          <div className="service-box">
            <img src={s3} className="service-img" loading="lazy" />
            <div className="blackk" />
          </div>
          <div className="service-box">
            <img src={s4} className="service-img" loading="lazy" />
            <div className="blackk" />
          </div>
          <div className="service-box">
            <img src={s5} className="service-img" loading="lazy" />
            <div className="blackk" />
          </div>
          <div className="service-box">
            <img src={s6} className="service-img" loading="lazy" />
            <div className="blackk" />
          </div>
        </div>
      </section>
    </div>
  );
}
