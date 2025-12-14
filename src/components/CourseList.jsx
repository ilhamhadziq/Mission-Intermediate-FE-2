import "../assets/css/course.css";
export default function CourseList({ children }) {
  return (
    <section className="course">
      
      {/* TITLE */}
      <div className="tittle">
        <h2>Koleksi Video Pembelajaran Unggulan</h2>
        <p>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami</p>
      </div>

      {/* NAV TABS */}
      <nav>
        <ul>
          <li>Semua Kelas</li>
          <li>Pemasaran</li>
          <li>Desain</li>
          <li>Pengembangan Diri</li>
          <li>Bisnis</li>
        </ul>
      </nav>

      {/* GRID */}
      <div className="grid-cards">
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
      </div>

    </section>
  );
}
