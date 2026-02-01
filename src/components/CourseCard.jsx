export default function CourseCard({ course, role, onDelete, onEdit }) {
  const safeRating = Math.min(5, Math.max(0, Math.round(course.rating)));
  return (
    <div className="card">

      <div className="thumbnail-row">
        <img src={course.thumbnail} alt="course" className="thumbnail" />
      </div>

      <div className="card-content">

        <div className="info-tittle">
          <h3>{course.title}</h3>
          <p>{course.description}</p>
        </div>

        <div className="info-acc">
          <img src={course.mentorImage} alt="mentor" />
          <div>
            <p className="profil">{course.mentor}</p>
            <p className="position">
              {course.position} <span className="gojek">{course.company}</span>
            </p>
          </div>
        </div>

        <div className="detail">
          <div className="detail-info">
            <div className="rating">
              {"★".repeat(safeRating)}
              {"☆".repeat(5 - safeRating)}
            </div>
          </div>
          <div className="cost">Rp {course.price}</div>
        </div>

        {/* ADMIN ONLY */}
        {role === "admin" && (
          <div className="admin-action">
            <button onClick={() => onEdit(course)}>Edit</button>
            <button onClick={() => onDelete(course.id)}>Hapus</button>
          </div>
        )}

      </div>
    </div>
  );
}
