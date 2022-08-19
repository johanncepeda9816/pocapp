import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Auth_error, Internal_error } from "../../../commons/constants/Alerts";
import useStorage from "../../../commons/hooks/useStorage";
import { IAuthData } from "../../../commons/types/CommonTypes";

export default function useAuth() {
  const [loading, setLoading] = useState<boolean>(false);
  const [userAuth, setUserAuth] = useState<IAuthData>({
    isAuth: false,
    username: "",
  });

  const { getStorageData, storeData } = useStorage();

  useEffect(() => {
    let isMounted = false;
    let user = getStorageData("userAuth");
    if (user) setUserAuth(user);
    return () => {
      isMounted = true;
    };
  }, []);

  const loginWithUsernameAndPassword = (username: string, password: string) => {
    try {
      setLoading(true);
      if (username === "admin" && password === "admin") {
        let userDto = {
          username: username,
          isAuth: true,
        };
        setUserAuth(userDto);
        storeData("userAuth", userDto);
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
