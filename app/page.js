"use client";
import "./globals.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import axios from "axios";
import { useState, useEffect } from "react";
import AddBalance from "@/pages/addBalance";
import Transactions from "@/pages/transactions";
import Login from "@/pages/login";

export default function Main() {
  const storedToken = localStorage.getItem("token");
  const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
  const [token, setToken] = useState(storedToken || "");
  const [isLoggedIn, setIsLoggedIn] = useState(storedIsLoggedIn === "true");
  const [userList, setUserList] = useState([]);
  const [transfers, setTransfers] = useState([]);

  // local data
  useEffect(() => {
    if (token) {
      // localStorage'a token ve isLoggedIn değerlerini kaydet
      localStorage.setItem("token", token);
      localStorage.setItem("isLoggedIn", "true");
    } else {
      // Kullanıcı çıkış yaptığında localStorage'dan bu değerleri kaldır
      localStorage.removeItem("token");
      localStorage.removeItem("isLoggedIn");
    }
  }, [token]);

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
  // user transactions data
  useEffect(() => {
    if (token) {
      axios
        .get("https://mobil-bank-production.up.railway.app/transfers", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setTransfers(response.data);
        })
        .catch((error) => {
          console.error("Veri çekme hatası:", error);
        });
    }
  }, [token]);

  return (
    <>
      {isLoggedIn ? (
        <div>
          <AddBalance
            userList={userList}
            isLoggedIn={isLoggedIn}
            token={token}
          />

   <Transactions
            isLoggedIn={isLoggedIn}
            transfers={transfers}
            token={token}
          />
        </div>
      ) : (
        <Login setToken={setToken} />
      )}
    </>
  );
}
