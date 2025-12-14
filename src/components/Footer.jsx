import "../assets/css/footer.css";

export default function Footer() {
  return (
    <footer>
      {/* TOP */}
      <div className="footer-container">
        {/* INFO */}
        <div className="footer-info">
          <img src="/src/assets/images/logo.png" alt="videobelajar" />
          <h4>
            Gali Potensi Anda Melalui Pembelajaran Video di videobelajar
          </h4>
          <p className="lokasi">Jakarta, Indonesia</p>
          <p className="notelp">+62 812 3456 7890</p>
        </div>

        {/* LINKS */}
        <div className="footer-detail">
          <div className="footer-category">
            <p className="footer-tittle">Kategori</p>
            <p>Digital Marketing</p>
            <p>Product Management</p>
            <p>Data Science</p>
            <p>UI UX Design</p>
            <p>Web Development</p>
          </div>

          <div className="footer-category">
            <p className="footer-tittle">Perusahaan</p>
            <p>Tentang Kami</p>
            <p>FAQ</p>
          </div>

          <div className="footer-category">
            <p className="footer-tittle">Komunitas</p>
            <p>Event</p>
            <p>Blog</p>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="copyright">
        <p>©2023 videobelajar. All Rights Reserved.</p>

        <div className="social-media">
          <div className="coba">
            <img src="/src/assets/icons/facebook.png" alt="facebook" />
          </div>
          <div className="coba">
            <img src="/src/assets/icons/twitter.png" alt="twitter" />
          </div>
          <div className="coba">
            <img src="/src/assets/icons/instagram.png" alt="instagram" />
          </div>
        </div>
      </div>
    </footer>
  );
}
