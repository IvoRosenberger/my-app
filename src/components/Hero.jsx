import React from 'react';
const Hero = ({ title }) => {

    return (
        <section className="hero hero-slide-1">
            <div className="hero-container">
                <article className="hero-container__text-box">
                    <h1>{title}</h1>
                    <p>
                        Venite a tomarte una birrita al mejor bar de Rosario!
                    </p>
                    <button className="button-primary">Comprar</button>
                </article>
            </div>
        </section>
    );
};

export default Hero;
