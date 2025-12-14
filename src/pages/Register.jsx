// src/pages/Register.jsx
import { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import TextInput from "../components/TextInput";
import PasswordInput from "../components/PasswordInput";
import PhoneInput from "../components/PhoneInput";
import Button from "../components/Button";

import "../assets/css/register.css";
import "../assets/css/general.css";

export default function Register() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      nama,
      email,
      hp,
      password,
      confirm
    });
  };

  return (
    <AuthLayout>
      <h3 className="login-tittle">Pendaftaran Akun</h3>
      <p className="login-tagline">Yuk, lanjutin belajarmu di videobelajar</p>

      <form onSubmit={handleSubmit}>        
        <TextInput label="Nama Lengkap" required value={nama} onChange={e => setNama(e.target.value)} />
        <TextInput label="E-mail" type="email" required value={email} onChange={e => setEmail(e.target.value)} />
        
        <PhoneInput value={hp} onChange={e => setHp(e.target.value)} />

        <PasswordInput label="Kata Sandi" required value={password} onChange={e => setPassword(e.target.value)} />
        <PasswordInput label="Konfirmasi Kata Sandi" required value={confirm} onChange={e => setConfirm(e.target.value)} />

        <div className="forget">
          <a href="#">lupa password?</a>
        </div>

        <Button className="login" type="submit" text="Daftar" />
      </form>

      <Button className="register" text="Masuk" onClick={() => (window.location.href = "/login")} />

      <div className="atau">
        <hr />
        <span>atau</span>
        <hr />
      </div>

      <button className="google">
        <div className="google-btn">
          <img src="src/assets//images/google.png" />
          <p>Masuk dengan Google</p>
        </div>
      </button>
    </AuthLayout>
  );
}
