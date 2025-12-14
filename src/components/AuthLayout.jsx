// src/components/AuthLayout.jsx
export default function AuthLayout({ children }) {
  return (
    <>
      <header>
        <img src="src/assets/images/logo.png" className="logo" />
      </header>

      <main>
        <section className="login-card">{children}</section>
      </main>
    </>
  );
}
