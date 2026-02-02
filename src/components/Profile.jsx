import "../assets/css/profile.css";

export default function ProfilePage() {
  return (
    <section className="profile-page">
      <h2>Ubah Profil</h2>
      <p className="subtitle">Ubah data diri Anda</p>

      <div className="profile-layout">

        {/* SIDEBAR */}
        <div className="profile-sidebar">
          <div className="sidebar-item active">
            👤 Profil Saya
          </div>
        </div>

        {/* CONTENT */}
        <div className="profile-content">
          <div className="profile-card">
            <div className="profile-header">
              <img
                src="/src/assets/images/user.png"
                alt="profile"
              />
              <div>
                <h3>Jennie Ruby Jane</h3>
                <p>rubyjane@gmail.com</p>
                <span className="change-photo">
                  Ganti Foto Profil
                </span>
              </div>
            </div>

            <div className="profile-form">
              <div className="form-group">
                <label>Nama Lengkap</label>
                <input value="Jennie Ruby Jane" />
              </div>

              <div className="form-group">
                <label>E-Mail</label>
                <input value="rubyjane@gmail.com" />
              </div>

              <button className="btn-save">Simpan</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
