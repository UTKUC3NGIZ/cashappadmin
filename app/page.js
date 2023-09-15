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
  const [token, setToken] = useState("");
  const [userList, setUserList] = useState([]);
  const [transfers, setTransfers] = useState([]);
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
   <div className="hidden">
   <Transactions
            isLoggedIn={isLoggedIn}
            transfers={transfers}
            token={token}
          />
   </div>
        </div>
      ) : (
        <Login setToken={setToken} />
      )}
    </>
  );
}
