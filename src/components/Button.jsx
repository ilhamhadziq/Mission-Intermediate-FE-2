// src/components/Button.jsx
export default function Button({ text, className, type="button", onClick }) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {text}
    </button>
  );
}
