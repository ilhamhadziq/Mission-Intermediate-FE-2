import banner from "../assets/images/background.jpg"; 
import "../assets/css/home.css";

function HeroBanner() {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1>Belajar Tidak Harus Mahal</h1>
        <p>
          Temukan ratusan video pembelajaran gratis dan premium dari berbagai 
          bidang. Belajar kapan saja, di mana saja.
        </p>
        <button className="btn-primary">Mulai Belajar</button>
      </div>

      <div className="hero-right">
        <img src={banner} alt="Hero Banner" className="hero-image" />
      </div>
    </section>
  );
}

export default HeroBanner;
