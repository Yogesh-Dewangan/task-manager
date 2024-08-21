"use client";

import { SyntheticEvent, useState } from "react";

import Link from "next/link";

import styles from "../../styles/login.module.scss";
import { LoginForm } from "../../interfaces/auth.interface";
import Header from "../header-footer/header";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = function (e: SyntheticEvent) {
    const currtarget = e.target as HTMLInputElement;
    const { name, value } = currtarget;

    setFormData((prevFormData: LoginForm) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = function (e: SyntheticEvent) {
    e.preventDefault();
    console.log("FormData: ", formData);
    setFormData(() => ({
      email: "",
      password: "",
    }));
  };

  return (
    <section className={`min-h-screen bg-white pb-8`}>
      <Header></Header>
      <div className={`${styles.login_container} m-auto pt-12`}>
        <h3 className="text-2xl font-bold text-blue-500 mb-4">Login</h3>
        <div className="border-2 rounded-lg border-blue-500 p-4 text-center">
          <form className="flex flex-col mb-4" onSubmit={handleSubmit}>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={`${styles.text_input}`}
            />
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className={styles.text_input}
            />
            <button
              type="submit"
              className={`btn login_btn ${
                !formData.email || !formData.password ? "opacity-50" : ""
              }`}
              disabled={!formData.email || !formData.password}
            >
              Login
            </button>
          </form>
          <p className="text-black mb-4">
            Don't have account?{" "}
            <Link href="/signup" className="link text-blue-500">
              Signup
            </Link>
          </p>
          <button type="button" className="btn login_btn m-auto">
            Login with <b>Google</b>
          </button>
        </div>
      </div>
    </section>
  );
}
