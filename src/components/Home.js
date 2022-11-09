import { useNavigate } from "react-router";
import Container from "./Shared/Container";

const Home = (props) => {
    const navigate = useNavigate();
  return (
      <Container>
        <div className="home">
        <img className="iphone-frame" src={require("../theme/assets/iphone-frame.png")} alt="iphone frame"/>
          <div className="notification" onClick={()=> navigate("/telemedicine")}>
            <div className="notification-left">
              <svg
                width="60"
                height="60"
                viewBox="0 0 76 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.254272 29.6383C0.254272 19.3603 0.254272 14.2213 1.96076 10.2956C3.46183 6.84254 5.85701 4.03507 8.80303 2.27562C12.1522 0.275391 16.5365 0.275391 25.3051 0.275391H50.2034C58.972 0.275391 63.3563 0.275391 66.7055 2.27562C69.6515 4.03507 72.0467 6.84254 73.5478 10.2956C75.2543 14.2213 75.2543 19.3603 75.2543 29.6383V45.9125C75.2543 56.1905 75.2543 61.3295 73.5478 65.2551C72.0467 68.7082 69.6515 71.5157 66.7055 73.2752C63.3563 75.2754 58.972 75.2754 50.2034 75.2754H25.3051C16.5365 75.2754 12.1522 75.2754 8.80303 73.2752C5.85701 71.5157 3.46183 68.7082 1.96076 65.2551C0.254272 61.3295 0.254272 56.1905 0.254272 45.9125V29.6383Z"
                  fill="white"
                />
                <path
                  d="M69.3332 37.7752C69.3332 55.2158 55.1948 69.3542 37.7542 69.3542C20.3136 69.3542 6.17526 55.2158 6.17526 37.7752C6.17526 20.3346 20.3136 6.19627 37.7542 6.19627C55.1948 6.19627 69.3332 20.3346 69.3332 37.7752Z"
                  fill="#1B93C5"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M29.0041 23.205C31.2797 21.535 34.3873 22.1588 35.9451 24.5983L45.9575 40.2776L51.5518 31.4531C53.1019 29.008 56.2075 28.3729 58.4884 30.0346C60.7692 31.6964 61.3616 35.0256 59.8115 37.4707L50.2166 52.6057C48.1843 55.8115 43.7796 55.8194 41.7373 52.6211L27.7044 30.6458C26.1466 28.2064 26.7285 24.875 29.0041 23.205ZM45.7413 23.205C43.4657 21.535 40.3581 22.1588 38.8003 24.5983L28.7879 40.2776L23.1936 31.4531C21.6435 29.008 18.5379 28.3729 16.2571 30.0346C13.9762 31.6964 13.3838 35.0256 14.9339 37.4707L24.5288 52.6057C26.5611 55.8115 30.9658 55.8194 33.0081 52.6211L47.041 30.6458C48.5988 28.2064 48.0169 24.875 45.7413 23.205Z"
                  fill="#A4D4E8"
                />
                <path
                  d="M43.4232 36.3093L37.372 26.8332L31.3208 36.3093L37.372 45.7855L43.4232 36.3093Z"
                  fill="#E8F4F9"
                />
              </svg>
            </div>
            <div className="notification-right">
              <p className="notification-title">EMERGENCY</p>
              <p className="notification-text">
                Click for video call to 911 Telemedicine. This alert has been
                sent by a 911 dispatcher that you have contacted.
              </p>
            </div>
          </div>
        </div>
      </Container>
  );
};

export default Home;
