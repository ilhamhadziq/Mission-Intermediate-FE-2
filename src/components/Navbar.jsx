import logo from "../assets/images/logo.png";
import profile from "../assets/images/user.png";
import "../assets/css/home.css"; // kalau navbar css ada di home.css

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo Video Belajar" className="logo" />
        <h1 className="brand-name">Video Belajar</h1>
      </div>

      <div className="navbar-right">
        <img src={profile} alt="Profile" className="profile-user" />
      </div>
    </nav>
  );
}

export default Navbar;
