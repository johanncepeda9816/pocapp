import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Auth_error, Internal_error } from "../../../commons/constants/Alerts";
import { IAuthData } from "../../../commons/types/CommonTypes";

export default function useAuth() {
  const [loading, setLoading] = useState<boolean>(false);
  const [userAuth, setUserAuth] = useState<IAuthData>({
    isAuth: false,
    username: "",
  });

  useEffect(() => {}, []);

  const loginWithUsernameAndPassword = (username: string, password: string) => {
    try {
      setLoading(true);
      if (username === "admin" && password === "admin") {
        let userDto = {
          username: username,
          isAuth: true,
        };
        setUserAuth(userDto);
        localStorage.setItem("user", JSON.stringify(userDto));
      } else {
        Auth_error();
      }
    } catch (error) {
      Internal_error();
    } finally {
      setLoading(false);
    }
  };

  return { loginWithUsernameAndPassword, userAuth, loading };
}
