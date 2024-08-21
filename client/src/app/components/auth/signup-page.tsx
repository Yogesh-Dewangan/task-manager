"use client";

import { SyntheticEvent, useState } from "react";

import Link from "next/link";

import styles from "../../styles/login.module.scss";
import { SignupForm } from "../../interfaces/auth.interface";
import Header from "../header-footer/header";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = function (e: SyntheticEvent) {
    const currtarget = e.target as HTMLInputElement;
    const { name, value } = currtarget;

    setFormData((prevFormData: SignupForm) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = function (e: SyntheticEvent) {
    e.preventDefault();
    console.log("FormData: ", formData);
    setFormData(() => ({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    }));
  };

  return (
    <section className={`min-h-screen bg-white pb-8`}>
      <Header></Header>
      <div className={`${styles.login_container} m-auto pt-12`}>
        <h3 className="text-2xl font-bold text-blue-500 mb-4">Signup</h3>
        <div className="border-2 rounded-lg border-blue-500 p-4 text-center">
          <form className="flex flex-col mb-4" onSubmit={handleSubmit}>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="FirstName"
              className={`${styles.text_input}`}
            />
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="LastName"
              className={styles.text_input}
            />
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
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="confirm Password"
              className={styles.text_input}
            />
            <button
              type="submit"
              className={`btn login_btn ${
                !formData.firstName ||
                !formData.lastName ||
                !formData.email ||
                !formData.password ||
                !formData.confirmPassword ||
                formData.password !== formData.confirmPassword
                  ? "opacity-50"
                  : ""
              }`}
              disabled={
                !formData.firstName ||
                !formData.lastName ||
                !formData.email ||
                !formData.password ||
                !formData.confirmPassword ||
                formData.password !== formData.confirmPassword
              }
            >
              Signup
            </button>
          </form>
          <p className="text-black mb-4">
            Don't have account?{" "}
            <Link href="/login" className="link text-blue-500">
              Login
            </Link>
          </p>
          <button type="button" className="btn login_btn m-auto">
            Signup with <b>Google</b>
          </button>
        </div>
      </div>
    </section>
  );
}
