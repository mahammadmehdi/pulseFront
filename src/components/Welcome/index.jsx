import React from "react";
import "./index.scss";

function Welcome() {
  return (
    <div className="welcome">
      <div className="welcomeAll">
        <div className="icon"><i className="fa-solid fa-bacon"></i></div>
        <div className="head">
          <div className="borderLeft"></div>
          <h3 className="main">WELCOME</h3>
          <div className="borderRight"></div>
        </div>
        <div className="cards">
          <div className="card">
            <div className="time">2002</div>
            <div className="desc">In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</div>
          </div>
          <div className="card">
            <div className="time">2010</div>
            <div className="desc">Stpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium.</div>
          </div>
          <div className="card">
            <div className="time">2018</div>
            <div className="desc">In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.

</div>
          </div>
        </div>
        <div className="signature">
            <img src="https://preview.colorlib.com/theme/pulse/img/sign.png.webp" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
