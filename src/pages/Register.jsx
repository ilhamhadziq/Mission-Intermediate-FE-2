import { useState } from "react";
import AuthLayout from "../components/Banner";
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

  const [errors, setErrors] = useState({});
  const isFormValid =
  nama.trim() &&
  email.trim() &&
  password.length >= 8 &&
  password === confirm;
  const [touched, setTouched] = useState({});
  

  const validate = () => {
    let newErrors = {};

    if (!nama.trim()) newErrors.nama = "Nama wajib diisi";
    if (!email.trim()) newErrors.email = "Email wajib diisi";
    if (password.length < 8)
      newErrors.password = "Password minimal 8 karakter";
    if (password !== confirm)
      newErrors.confirm = "Konfirmasi password tidak sama";

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const emailUsed = users.some((u) => u.email === email);
    if (emailUsed) newErrors.email = "Email sudah terdaftar";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = (e) => {
  e.preventDefault();

  // paksa semua field dianggap sudah disentuh
  setTouched({
    nama: true,
    email: true,
    password: true,
    confirm: true,
  });
  validate();
  if (!validate()) return;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const newUser = {
    nama,
    email,
    hp,
    password,
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registrasi berhasil!");
  window.location.href = "/login";
  
  };

  return (
    <AuthLayout>
      <h3 className="login-tittle">Pendaftaran Akun</h3>
      <p className="login-tagline">
        Yuk, lanjutin belajarmu di videobelajar
      </p>

      <form onSubmit={handleRegister}>
        <TextInput
          label="Nama Lengkap"
          required
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          onBlur={() => setTouched({ ...touched, nama: true })}
        />

        {touched.nama && errors.nama && <p className="error-text">{errors.nama}</p>}

        <TextInput
          label="E-mail"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched({ ...touched, email: true })}
        />

        {touched.email && errors.email && <p className="error-text">{errors.email}</p>}

        <PhoneInput value={hp} onChange={(e) => setHp(e.target.value)} />

        <PasswordInput
          label="Kata Sandi"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => setTouched({ ...touched, password: true })}
        />

        {touched.password && errors.password && (
          <p className="error-text">{errors.password}</p>
        )}

        <PasswordInput
          label="Konfirmasi Kata Sandi"
          required
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          onBlur={() => setTouched({ ...touched, confirm: true })}
        />

        {touched.confirm && errors.confirm && (
          <p className="error-text">{errors.confirm}</p>
        )}

        <Button className={`login ${!isFormValid ? "disabled" : ""}`} type="submit" text="Daftar" />
      </form>
      <Button
        className="register"
        text="Masuk"
        onClick={() => (window.location.href = "/login")}
      />
      <div className="atau">
        <hr />
        <span>atau</span>
        <hr />
      </div>

      <button className="google" type="button">
        <div className="google-btn">
          <img src="src/assets/images/google.png" alt="google" />
          <p>Masuk dengan Google</p>
        </div>
      </button>


    </AuthLayout>
  );
}
