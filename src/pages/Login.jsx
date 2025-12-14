import { useState } from "react";
import AuthLayout from "../components/Banner";
import TextInput from "../components/TextInput";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";


import "../assets/css/register.css";
import "../assets/css/general.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      alert("Login berhasil!");

      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("loggedInUser", JSON.stringify(user));

      navigate("/");
    } else {
      alert("Email atau password salah!");
    }
  };

  return (
    <AuthLayout>
      <h3 className="login-tittle">Masuk ke Akun</h3>
      <p className="login-tagline">
        Yuk, lanjutin belajarmu di videobelajar
      </p>

      <form onSubmit={handleLogin}>
        <TextInput
          label="E-mail"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <PasswordInput
          label="Kata Sandi"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="forget">
          <a href="#">Lupa Password?</a>
        </div>

        <Button className="login" type="submit" text="Masuk" />
      </form>

      <Button
        className="register"
        text="Daftar"
        onClick={() => (window.location.href = "/register")}
      />

      <div className="atau">
        <hr />
        <span>atau</span>
        <hr />
      </div>

      <button className="google">
        <div className="google-btn">
          <img src="src/assets/images/google.png" alt="google" />
          <p>Masuk dengan Google</p>
        </div>
      </button>
    </AuthLayout>
  );
}
