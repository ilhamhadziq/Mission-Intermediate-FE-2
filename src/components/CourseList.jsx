import CourseCard from "./CourseCard";
import "../assets/css/course.css";

export default function CourseList({ courses, role, onDelete, onEdit }) {
  return (
    <section className="course">

      <div className="tittle">
        <h2>Koleksi Video Pembelajaran Unggulan</h2>
        <p>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami</p>
      </div>

      <nav>
        <ul>
          <li>Semua Kelas</li>
          <li>Pemasaran</li>
          <li>Desain</li>
          <li>Pengembangan Diri</li>
          <li>Bisnis</li>
        </ul>
      </nav>

      <div className="grid-cards">
        {courses.map(course => (
          <CourseCard
            key={course.id}
            course={course}
            role={role}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>

    </section>
  );
}
