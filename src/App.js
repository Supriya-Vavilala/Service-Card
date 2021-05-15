import React from "react";
import image from "./image.png";
import Details from "./Details";
import Read from "./Readmore";
import Dialogue from "./Dialogue";
import "./index.css";

function App() {
  return (
    <>
      <div className="card">
        <div className="col-sm-9">
          <div>
            <button class="Subscribe" onClick={Dialogue}>
              SUBSCRIBE
            </button>
          </div>
          <h2 className="card-title">Prognos for AIRCRAFT</h2>
          <button class="button1">Flight Operations</button>
          <button class="button2">Maintenance</button>
          <button class="button3">Automation</button>
          <button class="button4">Fleet Data</button>
          <br />
          <button class="button5">Decoding Flight Data</button>
          <button class="button6">Acars Report</button>
          <br />
          <h5 className="Airfrance-Industries">Airfrance Industries</h5>
          <hr
            style={{
              color: "black",
              backgroundColor: "black",

              width: 900,
            }}
          />
          <p className="card-text">
            <small className="text-muted">
              It is now possible to predict a future breakdown or to schedule a
              maintenance operation beforehand thanks to the PROGNOS® solution.
              Tested and approved on our own fleets, the know-how gained is now
              being offered and easily implemented to our customers.
            </small>
          </p>
        </div>
        <div className="col-sm-3">
          <div className="prognos">
            <img src={image}></img>
          </div>
        </div>
      </div>
      <div className="row">
        <img src="https://source.unsplash.com/user/erondu/" />
        <img src="https://source.unsplash.com/user/erondu/" />
      </div>
      <div>
        <Details />
      </div>
      <div>
        <Read />
      </div>
    </>
  );
}

export default App;
