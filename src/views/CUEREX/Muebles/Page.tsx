import "./scss/index.scss";

import * as React from "react";

import exterior from '../../../images/exterior-small.jpg';
import exteriorH from '../../../images/Exterior.jpg';
import hogar from '../../../images/hogar-small.jpg';
import hogarH from '../../../images/Hogar.jpg';
import hotelH from '../../../images/Hotel.jpg';
import hoteleria from '../../../images/hoteleria-small.jpg';
import headerbg from '../../../images/mueblesbg-small.jpg';
import oficina from '../../../images/oficina-small.jpg';
import oficinaH from '../../../images/Oficina.jpg';




class Page extends React.Component<{}, { currentImage: any }> {

  constructor(props) {
    super(props);
    this.state = { currentImage: headerbg };
  }

  handleClick(image) {
    this.setState(() => ({ currentImage: image }));
  }

  render() {
    return (<main className=" colections animated fadeIn  h-100">
      <div className="row top pt-4 pb-4 justify-content-end text-md-right" style={{ backgroundImage: `url(${this.state.currentImage})` }}>
        <div className="col-sm-6 p-3 mt-5 mb-5 ttop">
          <div className="content">

          </div>
        </div>
      </div>
      <div className="row colects">
        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3 colection" onClick={() => this.handleClick(hogarH)} style={{ backgroundImage: `url(${hogar})` }}>
          <div className="content h-100">
            <span className="w-100 text-center my-auto">HOGAR</span>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3 colection h-100" onClick={() => this.handleClick(oficinaH)} style={{ backgroundImage: `url(${oficina})` }}>
          <div className="content">
            <span className="w-100 text-center my-auto">OFICINA</span>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3 colection" onClick={() => this.handleClick(hotelH)} style={{ backgroundImage: `url(${hoteleria})` }}>
          <div className="content">
            <span className="w-100 text-center my-auto">HOTELERIA</span>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3 colection" onClick={() => this.handleClick(exteriorH)} style={{ backgroundImage: `url(${exterior})` }}>
          <div className="content">
            <span className="w-100 text-center my-auto">EXTERIOR</span>
          </div>
        </div>
      </div>
    </main>);
  }
}

export default Page;
