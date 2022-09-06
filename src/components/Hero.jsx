import React from 'react';


const Hero = ({ title }) => {

  return (
    <section className="hero hero-slide-1">
      <div className="hero-container">
        <article className="hero-container__text-box">
          <h1>{title}</h1>
          <p>
            ¡La mente muy clara y la cerveza muy fría! Vení a conocer las
            mejores cervezas del inframundo.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Hero;
