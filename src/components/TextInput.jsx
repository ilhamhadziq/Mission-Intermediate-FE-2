// src/components/TextInput.jsx
export default function TextInput({ label, required, value, onChange, type="text" }) {
  return (
    <div className="login-name">
      <p>
        {label} {required && <span className="required">*</span>}
      </p>
      <input
        type={type}
        required={required}
        className="email"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
