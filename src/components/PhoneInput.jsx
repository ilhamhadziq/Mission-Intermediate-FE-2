// src/components/PhoneInput.jsx
export default function PhoneInput({ value, onChange }) {
  return (
    <div className="login-hp">
      <p>
        No. Hp <span className="required">*</span>
      </p>

      <div className="phone-input">
        <img src="src/assets/images/indonesia-flag.png" className="flag" />

        <select className="country-code">
          <option value="+62">+62</option>
          <option value="+1">+1</option>
          <option value="+91">+91</option>
          <option value="+81">+81</option>
        </select>

        <input
          type="text"
          className="phone-number"
          value={value}
          onChange={onChange}
          inputMode="numeric"
          pattern="[0-9]*"
          required
        />
      </div>
    </div>
  );
}
