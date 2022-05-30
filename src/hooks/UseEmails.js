import { emailAPI } from "../shared/services";
import { useNavigate } from "react-router-dom";

const UseEmails = () => {

  const { send } = emailAPI;
  let navigate = useNavigate();

  const sendEmail = (data) => {
    send(data);
    navigate("/", { replace: true });
  }

  return {
    sendEmail,
  };
}

export default UseEmails;
