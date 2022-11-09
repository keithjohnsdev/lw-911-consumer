import Container from "./Shared/Container";
import { NavLink, useNavigate } from "react-router-dom";
import BlueGradientBtn, { RedGradientBtn } from "./Shared/Buttons";
const Telemedicine = (props) => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="telemedicine">
        <img className="iphone-frame" src={require("../theme/assets/iphone-frame.png")} alt="iphone frame"/>
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
            <img
              className="telemedicine-call"
              src={require("../theme/assets/telemedicine-call.png")}
              alt="telemedicine call"
            />
          </div>
          <div className="footer">
            <BlueGradientBtn>Share Profile</BlueGradientBtn>
            <RedGradientBtn onClick={()=>navigate("/dashboard")}>End Call</RedGradientBtn>
          </div>
        </div>
    </Container>
  );
};

export default Telemedicine;
