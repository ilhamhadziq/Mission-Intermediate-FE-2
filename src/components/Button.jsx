// src/components/Button.jsx
export default function Button({ text, className, type="button", onClick, disabled }) {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

