import "./scss/index.scss";

import * as React from "react";

import { SocialMediaIcon } from "..";
import { SOCIAL_MEDIA } from "../../core/config";
import Nav from "./Nav";


const Footer: React.FC = () => (
  <div className="footer" id="footer">
    <h6>
      <br />
      <br />
      Urdesa Central, Calle 5ta 610 y Las Monjas <br /> Lunes-viernes 10:00 a 17:00 - +593 (4) 6024678
    </h6>
    <div className="footer__favicons container">
      {SOCIAL_MEDIA.map(medium => (
        <SocialMediaIcon medium={medium} key={medium.ariaLabel} />
      ))}
    </div>
    <Nav />
  </div>
);

export default Footer;
