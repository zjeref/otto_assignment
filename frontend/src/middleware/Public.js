import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { signedIn, user } from "../helpers/global-state";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Public = ({ children }) => {
  const [currentUser, setCurrentUser] = useAtom(user);
  const navigate = useNavigate();

  let headers;
  const token = Cookies.get("authToken");
  useEffect(() => {
    headers = { Authorization: `Bearer ${token}` };
    if (token) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/user/me`, { headers })
        .then((res) => {
          setCurrentUser(res.data);
        })
        .catch((err) => {
          console.error(err);
          
        });
    } else {
    }
    console.log(token);
  }, [token]);

  return <>{children}</>;
};

export default Public;
