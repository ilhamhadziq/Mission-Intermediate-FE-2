export default function CourseCard() {
  return (
    <div className="card">

      {/* Thumbnail */}
      <div className="thumbnail-row">
        <img
          src="/src/assets/images/content-1.jpg"
          alt="course"
          className="thumbnail"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="card-content">

        {/* Title & desc */}
        <div className="info-tittle">
          <h3>Big 4 Auditor Financial Analyst</h3>
          <p>
            Mulai transformasi dengan instruktur profesional, harga yang
            terjangkau, dan kurikulum terbaik
          </p>
        </div>

        {/* Mentor */}
        <div className="info-acc">
          <img src="/src/assets/profiles/1.png" alt="mentor" />
          <div>
            <p className="profil">Jenna Ortega</p>
            <p className="position">
              Senior Accountant <span className="gojek">Gojek</span>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="detail">
          <div className="detail-info">
            <div className="rating"></div>
            <p>4.9 (120)</p>
          </div>
          <div className="cost">Rp 300K</div>
        </div>

      </div>
    </div>
  );
}
