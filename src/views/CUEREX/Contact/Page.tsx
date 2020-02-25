import "./scss/index.scss";

import * as React from "react";

import Carousel from 'nuka-carousel';

import cm from '../../../images/cm-small.jpg';
import ethnik from '../../../images/ethnik-small.jpg';
import lostboy from '../../../images/lostboy-small.jpg';
import muca from '../../../images/muca-small.jpg';

import s1 from '../../../images/slides/s1-small.jpg';
import s2 from '../../../images/slides/s2-small.jpg';
import s3 from '../../../images/slides/s3-small.jpg';
import s4 from '../../../images/slides/s4-small.jpg';
import s5 from '../../../images/slides/s5-small.jpg';
import s6 from '../../../images/slides/s6-small.jpg';
import s7 from '../../../images/slides/s7-small.jpg';
import s8 from '../../../images/slides/s8-small.jpg';
import s9 from '../../../images/slides/s9-small.jpg';

import logoImg from "../../../images/logo-small.png";




const Page: React.FC<{
}> = () => (
  <>
    <div className="home-page">
      <div className="row">
        <Carousel
          autoplay
          autoplayInterval={3500}
          // wrapAround
          slidesToShow={1}
          renderCenterLeftControls={({ previousSlide }) => (
            <button className="sliderbtn" onClick={previousSlide}>
              &lt;
                            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button className="sliderbtn" onClick={nextSlide}>
              &gt;
                            </button>
          )}
        >
          <img className="img-fluid" src={s1} />
          <img className="img-fluid" src={s2} />
          <img className="img-fluid" src={s3} />
          <img className="img-fluid" src={s4} />
          <img className="img-fluid" src={s5} />
          <img className="img-fluid" src={s6} />
          <img className="img-fluid" src={s7} />
          <img className="img-fluid" src={s8} />
          <img className="img-fluid" src={s9} />
        </Carousel>
      </div>
      <div className="row justify-content-center text-center">
        <div className="col-sm-4">
          <img
            className="img-fluid cuerex-logo my-3"
            src={logoImg}
            alt="Cuerex"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3 cinzel text-left text-sm-right">
          <h4>¿QUIÉNES SOMOS?</h4>
        </div>
        <div className="col-sm-7">
          <p>
            Desde el inicio la empresa se comprometió con la excelencia y el
            diseño, siendo un ejemplo de servicio, calidad y eficiencia a
            precio justo, lo cual contribuyó a su desarrollo y expansión,
            convirtiéndose actualmente en la productora de muebles, vestimenta
            y artículos de cuero más reconocida en Ecuador.
                        </p>
          <br />
          <div className="row">
            <div className="col-6 col-sm-3">
              <img className="img-fluid asd" onClick={() => this.handleClick()} src={cm} alt="Cuerex" />
            </div>
            <div className="col-6 col-sm-3">
              <img className="img-fluid asd" onClick={() => this.handleClick()} src={muca} alt="Cuerex" />
            </div>
            <div className="col-6 col-sm-3">
              <img className="img-fluid asd" onClick={() => this.handleClick()} src={ethnik} alt="Cuerex" />
            </div>
            <div className="col-6 col-sm-3">
              <img className="img-fluid asd" onClick={() => this.handleClick()} src={lostboy} alt="Cuerex" />
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  </>
);

export default Page;
