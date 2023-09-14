"use client";
import "./globals.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Login from "@/pages/Login";
import axios from "axios";
import { useState, useEffect } from "react";
import AddBalance from "@/pages/AddBalance";

export default function Main() {
  const [token, setToken] = useState("");
  const [userList, setUserList] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // users data
  useEffect(() => {
    if (token) {
      axios
        .get("https://mobil-bank-production.up.railway.app/users/all", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUserList(response.data);
          setIsLoggedIn(true);
        })
        .catch((error) => {
          console.error("Veri çekme hatası:", error);
          setIsLoggedIn(false);
        });
    } else {
      setIsLoggedIn(false);
    }
  }, [token]);
console.log(userList)
  return (
    <>
      {isLoggedIn ? (
        <AddBalance userList={userList} isLoggedIn={isLoggedIn} />
      ) : (
        <Login setToken={setToken} />
      )}
    </>
  );
}
