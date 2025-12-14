import { useState } from "react";
import "../assets/css/header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <img
          src="/src/assets/images/logo.png"
          alt="logo"
          className="logo"
        />

        <div className="header-right desktop">
          <p>Kategori</p>
          <img
            src="/src/assets/images/user.png"
            alt="profile"
            className="profile"
          />
        </div>

        <img
          src="/src/assets/icons/menu.png"
          alt="menu"
          className="menu-icon mobile"
          onClick={() => setOpen(true)}
        />
      </div>

      {/* sidebar tetap di luar container */}
    </header>
  );
}
