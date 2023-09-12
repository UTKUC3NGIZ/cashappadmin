"use client";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

import "./globals.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

export default function Login() {
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
          />

          <label htmlFor="password" className="block text-900 font-medium mb-2">
            Parola
          </label>
          <InputText
            id="password"
            type="password"
            placeholder="******"
            className="w-full mb-3"
          />

          <div className="flex align-items-center justify-content-end mb-6">
            <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">
              Parolamı Unuttum ?
            </a>
          </div>

          <Button label="Giriş Yap" icon="pi pi-user" className="w-full" />
        </div>
      </div>
    </div>
  );
}
