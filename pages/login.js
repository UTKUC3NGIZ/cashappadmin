"use client";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import "../app/globals.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userList, setUserList] = useState([]);
  const [token, setToken] = useState("");
  //   login admin
  const handlePress = () => {
    axios
      .post("https://mobil-bank-production.up.railway.app/auth/login", {
        email: email,
        password: password,
      })

      .then(
        (response) => {
          localStorage.setItem("userToken", response.data.token);
          if (response.data.token) {
            setToken(response.data.token);
            navigation.navigate("addBalance");
          }
        },

        (error) => {
          console.log(error);
          if (!username.trim()) {
            Alert.alert("Error", "Please enter email!");
          } else if (!password.trim()) {
            Alert.alert("Error", "Please enter password!");
          } else {
            Alert.alert("Make sure you entered the right parameters!");
          }
        }
      );
  };

  // users data
  useEffect(() => {
    if (token) {
      axios
        .get("https://mobil-bank-production.up.railway.app/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUserList((prevUserList) => [...prevUserList, response.data]);
        })
        .catch((error) => {
          console.error("Veri çekme hatası:", error);
        });
    }
  }, [token]);

  return (
    <div className="flex align-items-center justify-content-center h-screen">
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
          <img
            src="https://uploads-ssl.webflow.com/605c9d764f1ef938a009ac98/61e01bfbdd8632a72962edc2_Pinsoft_Yatay_Logo_mavi-for%20animation.svg"
            alt="hyper"
            className="mb-3 w-1/2 md:w-1/3 m-auto"
          />
          <div className="text-900 text-3xl font-medium mb-3">Giriş Yap</div>
        </div>

        <div>
          <label htmlFor="email" className="block text-900 font-medium mb-2">
            Email
          </label>
          <InputText
            id="email"
            type="text"
            placeholder="utkucengiz00@gmail.com"
            className="w-full mb-3"
            value={email}
            onChange={(text) => {
              setEmail(text.target.value);
            }}
          />

          <label htmlFor="password" className="block text-900 font-medium mb-2">
            Parola
          </label>
          <InputText
            id="password"
            type="password"
            placeholder="******"
            className="w-full mb-3"
            value={password}
            onChange={(text) => {
              setPassword(text.target.value);
            }}
          />

          <div className="flex align-items-center justify-content-end mb-6">
            <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">
              Parolamı Unuttum ?
            </a>
          </div>

          <Button
            label="Giriş Yap"
            icon="pi pi-user"
            className="w-full"
            onClick={handlePress}
          />
        </div>
      </div>
    </div>
  );
}
