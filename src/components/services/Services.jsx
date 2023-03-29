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
        <h1 className="service-title">
          <b>Services We </b>Offer To Our Clients
        </h1>
        <div className="service-boxs">
          <div className="service-box">
            <img
              src={s1}
              type="image/webp"
              className="service-img"
              loading="lazy"
            />
            <div className="blackk">
              <h1 className="blackk-h1">Custom Ai Art</h1>
              <p className="blackk-p">
                Artwork that is created or enhanced using artificial
                intelligence algorithms and techniques, resulting in unique and
                often unexpected visual outputs.
              </p>
            </div>
          </div>
          <div className="service-box">
            <img src={s2} className="service-img" loading="lazy" />
            <div className="blackk">
              <h1 className="blackk-h1">Ad Generation</h1>
              <p className="blackk-p">
                The process of creating and delivering targeted advertising
                content through the use of various data inputs and algorithms to
                achieve specific marketing objectives.
              </p>
            </div>
          </div>
          <div className="service-box">
            <img src={s3} className="service-img" />
            <div className="blackk">
              <h1 className="blackk-h1">Copywriting</h1>
              <p className="blackk-p">
                Copywriting is the art of persuading people to do something by
                using written words. It is effective and can raise brand
                awareness, increase engagement, and ultimately drive sales and
                revenue.
              </p>
            </div>
          </div>
          <div className="service-box">
            <img src={s4} className="service-img" loading="lazy" />
            <div className="blackk">
              <h1 className="blackk-h1">Digital Marketing</h1>
              <p className="blackk-p">
                The technique of advertising products, services, or brands using
                different online channels such as social media, email, search
                engines, and websites is known as digital marketing.
              </p>
            </div>
          </div>
          <div className="service-box">
            <img src={s5} className="service-img" loading="lazy" />
            <div className="blackk">
              <h1 className="blackk-h1">Professional Decision Making</h1>
              <p className="blackk-p">
                In a professional situation, decision making entails analysing
                choices and selecting the best course of action. Making educated
                judgements that match with an organization's aims and values
                necessitates a combination of critical thinking abilities,
                knowledge, and experience.
              </p>
            </div>
          </div>
          <div className="service-box">
            <img src={s6} className="service-img" loading="lazy" />
            <div className="blackk">
              <h1 className="blackk-h1">Product Photography</h1>
              <p className="blackk-p">
                Product photography is the practise of obtaining high-quality
                photos of items for marketing and promotional reasons. To
                attract and engage potential customers, it is necessary to pay
                attention to detail and have the capacity to graphically
                demonstrate a product's features and benefits.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
