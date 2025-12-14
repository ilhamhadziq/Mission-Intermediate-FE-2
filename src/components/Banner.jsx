import "../assets/css/banner.css";

export default function Banner() {
  return (
    <section className="banner">
      <p className="banner-info">Newsletter</p>

      <h1>Mau Belajar Lebih Banyak?</h1>

      <p className="banner-desc">
        Daftar sekarang dan mulai jelajahi ratusan video pembelajaran interaktif
      </p>

      <div className="pesan">
        <input type="text" placeholder="Masukkan email kamu" />
        <button className="submit">Subscribe</button>
      </div>
    </section>
  );
}
