import Container from "./Shared/Container";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import CollapsingDiv from "./Shared/CollapsingDiv";
import { mockVitalsData, mockMedicationsData, mockInsuranceData } from "../graphql/mockData";
import VitalsRow from "./Shared/VitalsRow";
import { Container3 } from "./Shared/Container";

const Dashboard = (props) => {
  const navigate = useNavigate();
  const vitalsData = mockVitalsData;
  const medicationsData = mockMedicationsData;
  const insuranceData = mockInsuranceData;
  return (
    <Container>
      <div className="dashboard">
        <img
          className="iphone-frame"
          src={require("../theme/assets/iphone-frame.png")}
          alt="iphone frame"
        />
        <div className="header">
          <img
            src={require("../theme/assets/edwin.png")}
            className="profile-pic"
            alt="patient profile"
          />
          <h3>Edwin Rivera</h3>
          <div className="navbar">
            <NavLink
              className={({ isActive }) => (isActive ? "nav active" : "nav")}
              to="/live-map"
            >
              Live Map
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "nav active" : "nav")}
              to="/dashboard"
            >
              Dashboard
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "nav active" : "nav")}
              to="/telemedicine"
            >
              Telemedicine
            </NavLink>
          </div>
        </div>
        <div className="body">
          <CollapsingDiv
            title="PERSONAL INFO"
            height="0"
            collapsed={true}
          ></CollapsingDiv>
          <CollapsingDiv
            title={`VITALS (${vitalsData.length})`}
            height={`${vitalsData.length === 0 ? 70 : vitalsData.length * 70}`}
          >
            <div className="patient-data-rows">
              {vitalsData.map((metric, index) => {
                return (
                  <VitalsRow
                    key={index}
                    metric={metric}
                    index={index}
                    showVitalsModal={props.showVitalsModal}
                  />
                );
              })}
            </div>
          </CollapsingDiv>
          <CollapsingDiv
            title={`MEDICATIONS (${medicationsData.length})`}
            height={`${
              medicationsData.length === 0 ? 70 : medicationsData.length * 70
            }`}
          >
            <div className="patient-data-rows">
              {medicationsData.map((metric, index) => {
                return (
                  <div className="patient-data-row" key={index}>
                    <Container3>
                      <div className="row-content">
                        <div className="metric-title">
                          <p className="title">{metric.title}</p>
                          {metric.lastReading && (
                            <p className="subtitle">{`Last Reading: ${metric.lastReading}`}</p>
                          )}
                        </div>
                        <div className="metric-value">
                          <p>{metric.dosage}</p>
                        </div>
                      </div>
                    </Container3>
                  </div>
                );
              })}
            </div>
          </CollapsingDiv>
          <CollapsingDiv title={`INSURANCES (${insuranceData.length})`} collapsed={true} height="0">
        <div className="patient-data-rows">
        </div>
      </CollapsingDiv>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
