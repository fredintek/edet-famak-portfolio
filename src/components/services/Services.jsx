import React from "react";
import "./Services.css";
import ServiceText from "./serviceText";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <ServiceText />
            <ServiceText />
            <ServiceText />
            <ServiceText />
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <ServiceText />
            <ServiceText />
            <ServiceText />
            <ServiceText />
            <ServiceText />
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Freelancing</h3>
          </div>

          <ul className="service__list">
            <ServiceText />
            <ServiceText />
            <ServiceText />
            <ServiceText />
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
