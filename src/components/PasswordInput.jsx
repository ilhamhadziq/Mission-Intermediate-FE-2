// src/components/PasswordInput.jsx
import { useState } from "react";

export default function PasswordInput({ label, required, value, onChange }) {
  const [show, setShow] = useState(false);

  const togglePassword = () => {
    setShow(!show);
  };

  return (
    <div className="login-password">
      <p>
        {label} {required && <span className="required">*</span>}
      </p>

      <input
        type={show ? "text" : "password"}
        className="password"
        required={required}
        value={value}
        onChange={onChange}
      />

      <img
        src={show ? "src/assets/images/unhide.png" : "src/assets/images/hide.png"}
        className="eye"
        onClick={togglePassword}
        alt="toggle password"
      />
    </div>
  );
}
