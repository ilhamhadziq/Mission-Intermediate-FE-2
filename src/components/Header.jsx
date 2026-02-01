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

        {/* DESKTOP */}
        <div className="header-right desktop">
          <p>Kategori</p>

          <div className="profile-wrapper">
            <img
              src="/src/assets/images/user.png"
              alt="profile"
              className="profile"
              onClick={() => setOpen(!open)}
            />

            {open && (
              <div className="profile-dropdown">
                <p onClick={() => setOpen(false)}>Profil Saya</p>
                <p className="logout" onClick={() => setOpen(false)}>
                  Keluar
                </p>
              </div>
            )}
          </div>
        </div>

        {/* MOBILE */}
        <img
          src="/src/assets/icons/menu.png"
          alt="menu"
          className="menu-icon mobile"
          onClick={() => setOpen(true)}
        />
      </div>

      {/* MOBILE SIDEBAR */}
      {open && (
        <div className="sidebar mobile">
          <div className="sidebar-header">
            <span onClick={() => setOpen(false)}>✕</span>
          </div>

          <div className="sidebar-content">
            <p onClick={() => setOpen(false)}>Profil Saya</p>
            <p className="logout" onClick={() => setOpen(false)}>
              Keluar
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
