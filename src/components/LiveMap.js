import Container from "./Shared/Container";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import BlueGradientBtn from "./Shared/Buttons";

const LiveMap = (props) => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="telemedicine">
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
        <div className="body live-map">
          <img
            className="live-map-img"
            src={require("../theme/assets/live-map.png")}
            alt="telemedicine call"
          />
        </div>
        <div className="footer live-map">
            <BlueGradientBtn>Share Live Location</BlueGradientBtn>
          </div>
      </div>
    </Container>
  );
};

export default LiveMap;
