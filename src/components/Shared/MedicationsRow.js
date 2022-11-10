import { Container3 } from "./Container";
import { useState } from "react";

const MedicationsRow = (props) => {
  const metric = props.metric;
  const index = props.index;
  const [highlightMetric, setHighlightMetric] = useState(false);

  return (
    <div className="patient-data-row" onClick={() => setHighlightMetric(current => !current)}>
      <Container3>
        <div className="row-content">
          <div className="metric-title">
            <p className={highlightMetric ? "title red" : "title"}>{metric.title}</p>
            {metric.lastReading && (
              <p className="subtitle">{`Last Reading: ${metric.lastReading}`}</p>
            )}
          </div>
          <div className="metric-value">
          <p className={highlightMetric ? "red" : ""}>{metric.dosage}</p>
          </div>
        </div>
      </Container3>
    </div>
  );
};

export default MedicationsRow;
