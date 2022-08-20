import { useEffect, useState } from "react";
import { IBurger } from "../types/IBurger";

export default function useHomeServices() {
  const [loading, setLoading] = useState<boolean>(false);
  const [burgers, setBurgers] = useState<IBurger[]>([]);

  useEffect(() => {
    getBurgerList();
  }, []);

  const getBurgerList = () => {
    setLoading(true);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "0d30ef556dmsh0fa3d5e9e1f1264p10ed43jsn47001823bb7d",
        "X-RapidAPI-Host": "burgers1.p.rapidapi.com",
      },
    };

    fetch("https://burgers1.p.rapidapi.com/burgers", options)
      .then((response) => response.json())
      .then((response) => setBurgers(response))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  const getBurgers = (limit: number): IBurger[] => {
    if (burgers?.length) {
      return burgers.slice(0, limit);
    }
    return [];
  };

  return { loading, getBurgers, burgers };
}
