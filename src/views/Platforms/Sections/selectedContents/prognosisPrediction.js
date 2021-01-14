import React from "react";

import "../../Platforms.css";

export default function PrognosisPrediction(props) {
  return (
    <div className="rhexiumContentsDetailContent">
      <div className="platformExplain">
        <span className="textF16 FontB tcgreen1">
          Optimize treatment strategies
        </span>
        <span className="textF16 FontL tcb">
          based on the predicted prognosis risk
        </span>
      </div>
      <div className="platformExplain">
        <span className="textF16 FontB tcgreen1">
          Preventive treatment strategies
        </span>
        <span className="textF16 FontL tcb">against recurrence</span>
      </div>
    </div>
  );
}
