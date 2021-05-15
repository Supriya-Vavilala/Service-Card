import React, { useState } from "react";
import "./index.css";

function Read() {
  const [readMore, setReadMore] = useState(false);
  const extraContent = (
    <div>
      <h5 className="information">Information</h5>
      <div className="info">
        <div>
          <h6 className="Key">Key Values</h6>
          <p className="keyvalues">
            -Reduced flight delays and cancellations
            <br />
            - 30 to 50 flights in advance alert <br />
            - Flight Safety and Operational Reliability
            <br />
            - No unscheduled shop visits or removals through event prediction
            <br />- Costs & time savings
          </p>
        </div>
        <div>
          <h6 className="Type">Types of User</h6>
          <p className="Typevalue">Airline-MRO-Flight </p>
        </div>
        <div>
          <h6 className="Data">Data required</h6>
          <p className="Datavalue">
            Decoded flight data QAR and SAR, Snapshot flight Data - ACARS
            report, Fleet Data
          </p>
        </div>
      </div>
      <h5 className="Documents">Documents</h5>
      <h5 className="Brochure">brochure</h5>
      <h5 className="Terms-Conditions">Terms & Conditions</h5>
    </div>
  );

  const linkName = readMore ? "READ LESS" : "READ MORE";
  return (
    <div className="Read">
      <a
        className="read-more-link"
        onClick={() => {
          setReadMore(!readMore);
        }}
      >
        <h3>{linkName}</h3>
      </a>
      {readMore && extraContent}
    </div>
  );
}

export default Read;
