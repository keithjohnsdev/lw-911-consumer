import Container from "./Shared/Container";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import CollapsingDiv from "./Shared/CollapsingDiv";
import {
  mockVitalsData,
  mockMedicationsData,
  mockInsuranceData,
} from "../graphql/mockData";
import VitalsRow from "./Shared/VitalsRow";
import MedicationsRow from "./Shared/MedicationsRow";

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
          <CollapsingDiv title="PERSONAL INFO" height="0" collapsed={true} svgPath="M19.4419 0C14.9208 0 11.2558 4.12316 11.2558 9.2093C11.2558 14.2954 14.9208 18.4186 19.4419 18.4186C23.9629 18.4186 27.6279 14.2954 27.6279 9.2093C27.6279 4.12316 23.9629 0 19.4419 0ZM19.4419 22.5116C8.67107 22.5116 0 31.1827 0 41.9535V44H38.8837V41.9535C38.8837 31.1827 30.2127 22.5116 19.4419 22.5116Z">
          </CollapsingDiv>
          <CollapsingDiv
            title={`VITALS (${vitalsData.length})`}
            height={`${vitalsData.length === 0 ? 70 : vitalsData.length * 70}`}
            svgPath="M31.6667 6.66667H5C4.40439 6.66667 3.85419 6.34896 3.55657 5.83333C3.25895 5.3177 3.25895 4.68229 3.55657 4.16667C3.85419 3.65105 4.40441 3.33333 5 3.33333H31.6667C32.2623 3.33333 32.8125 3.01563 33.1101 2.5C33.4077 1.98437 33.4077 1.34895 33.1101 0.833333C32.8125 0.317714 32.2623 0 31.6667 0H5C3.67371 0 2.40219 0.526781 1.46429 1.46429C0.526781 2.40216 0 3.67371 0 5V45C0 46.3263 0.526781 47.5978 1.46429 48.5357C2.40216 49.4732 3.67371 50 5 50H28.3333C29.6596 50 30.9311 49.4732 31.8691 48.5357C32.8066 47.5978 33.3333 46.3263 33.3333 45V8.33333C33.3333 7.89137 33.1577 7.46726 32.8452 7.15476C32.5327 6.84227 32.1086 6.66667 31.6667 6.66667ZM26.6667 30H21.6667C21.4725 29.9944 21.2805 29.955 21.1001 29.8832H20.9502C20.8013 29.8199 20.6656 29.7295 20.5499 29.6168C20.4249 29.4978 20.3233 29.3564 20.25 29.2001L18.9502 26.6666L16.6667 37.0333C16.6369 37.1069 16.6038 37.1795 16.5666 37.2498C16.5666 37.2498 16.5666 37.3997 16.4833 37.4831C16.4144 37.5943 16.3304 37.6955 16.2333 37.7833C16.1931 37.8368 16.1484 37.8867 16.1001 37.9332C15.9442 38.0679 15.7627 38.1698 15.5666 38.233C15.3821 38.2874 15.192 38.3208 15 38.3331H14.6332C14.4375 38.2892 14.2511 38.21 14.0833 38.0999C13.9308 37.986 13.801 37.8447 13.7002 37.6832C13.6942 37.6278 13.6942 37.572 13.7002 37.5165C13.6492 37.4425 13.6049 37.3644 13.5666 37.2833L10.4665 28.3331H6.66671C6.0711 28.3331 5.5209 28.0154 5.22328 27.4998C4.92566 26.9841 4.92566 26.3487 5.22328 25.8331C5.5209 25.3175 6.07111 24.9998 6.66671 24.9998H11.6667C11.7828 24.9841 11.9007 24.9841 12.0168 24.9998C12.1131 25.0198 12.208 25.0477 12.2999 25.0831C12.3962 25.1326 12.4859 25.1943 12.5666 25.2665C12.6552 25.3126 12.734 25.3748 12.7999 25.4499C12.8706 25.5221 12.9271 25.6069 12.9666 25.6999C13.0376 25.7937 13.099 25.8941 13.15 25.9998L14.5834 30.2996L16.6667 21.2996C16.7099 21.1857 16.7597 21.0741 16.8167 20.9662C16.8606 20.8795 16.9108 20.7958 16.9666 20.7162C17.0362 20.6359 17.1146 20.563 17.2002 20.4997C17.2757 20.4242 17.3598 20.3572 17.4502 20.2996C17.5216 20.2873 17.5949 20.2873 17.6667 20.2996L18.0001 20.2162H18.65C18.7556 20.2467 18.8568 20.2914 18.9502 20.3498C19.0443 20.3896 19.1336 20.4402 19.2166 20.4997C19.2932 20.5678 19.3654 20.64 19.4335 20.7162C19.509 20.7984 19.5759 20.8877 19.6332 20.983L22.7002 26.6664H26.6667C27.2623 26.6664 27.8125 26.9841 28.1101 27.4997C28.4077 28.0154 28.4077 28.6508 28.1101 29.1664C27.8125 29.682 27.2623 29.9997 26.6667 29.9997V30Z"
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
            svgPath="M40.1141 3.8086C37.6598 1.36919 34.3399 0 30.8795 0C27.4191 0 24.0993 1.36919 21.6449 3.8086L3.6387 21.7686C-1.45304 26.8603 -1.08274 35.0997 4.00901 40.1914C6.46333 42.6308 9.78317 44 13.2436 44C16.704 44 20.0238 42.6308 22.4781 40.1914L40.1141 22.2314C41.3317 21.0262 42.2982 19.5916 42.9579 18.0105C43.6176 16.4294 43.9572 14.7332 43.9572 13.02C43.9572 11.3068 43.6176 9.61063 42.9579 8.02953C42.2982 6.44843 41.3317 5.01379 40.1141 3.8086ZM27.2922 26.5826L17.2475 16.5842C17.0404 16.3778 16.876 16.1325 16.7639 15.8625C16.6518 15.5924 16.594 15.3029 16.594 15.0104C16.594 14.718 16.6518 14.4285 16.7639 14.1584C16.876 13.8883 17.0404 13.643 17.2475 13.4366L24.1445 6.58591C27.8476 2.88283 34.004 2.79025 37.6145 6.58591C39.3064 8.33668 40.2404 10.6834 40.2144 13.118C40.1884 15.5525 39.2045 17.8787 37.4756 19.593L30.4861 26.5826C30.0613 27.0037 29.4873 27.2401 28.8891 27.2401C28.2909 27.2401 27.7169 27.0037 27.2922 26.5826Z"
          >
            <div className="patient-data-rows">
              {medicationsData.map((metric, index) => {
                return (
                  <MedicationsRow
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
            title={`INSURANCES (${insuranceData.length})`}
            collapsed={true}
            height="0"
            svgPath="M18.7791 0.36425C13.2749 3.44014 7.93255 4.89713 1.78078 5.54469C0.809444 5.70658 0 6.51602 0 7.64924V24.1619C0 37.7605 9.06577 41.3221 18.6172 47.6357C19.2648 48.1214 20.2361 48.1214 20.8836 47.6357C30.4351 41.3221 39.5008 37.7605 39.5008 24.1619V7.64924C39.5008 6.51602 38.6914 5.70658 37.7201 5.54469C31.5683 4.89713 26.226 3.44014 20.7218 0.36425C20.0742 -0.121417 19.4266 -0.121417 18.7791 0.36425ZM16.3508 27.0759L26.0641 17.2007C27.8449 15.5818 30.4351 18.0101 28.6543 19.7909L17.6459 30.7993C16.8364 31.6088 15.7032 31.6088 15.0557 30.9612L10.8465 26.7521C9.22766 24.9713 11.656 22.543 13.4368 24.1619L16.3508 27.0759Z"
          >
            <div className="patient-data-rows"></div>
          </CollapsingDiv>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
