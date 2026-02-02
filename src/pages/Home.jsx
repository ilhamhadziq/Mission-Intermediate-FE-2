import { useState, useRef } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CourseList from "../components/CourseList";
import AdminCourseForm from "../components/AdminCourseForm";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import ProfilePage from "../components/Profile";

export default function Home() {
  const [role] = useState("admin"); // nanti diganti dari login
  const [courses, setCourses] = useState([]); // AWALNYA KOSONG
  const [editingCourse, setEditingCourse] = useState(null);
  const formRef = useRef(null);
  const [view, setView] = useState("home");




  const handleAddCourse = (newCourse) => {
    setCourses(prev => [...prev, newCourse]);
  };

  const handleDelete = (id) => {
    setCourses(prev => prev.filter(c => c.id !== id));
  };
  const handleEdit = (course) => {
    setEditingCourse(course);

    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  const handleUpdate = (updatedCourse) => {
    setCourses(prev =>
      prev.map(c =>
        c.id === updatedCourse.id ? updatedCourse : c
      )
    );
    setEditingCourse(null);
  };



  return (
  <>
    <Header onProfileClick={() => setView("profile")} />

    <div className="page">

      {view === "home" && (
        <>
          <Hero />

          {role === "admin" && (
            <div ref={formRef}>
              <AdminCourseForm
                onAdd={handleAddCourse}
                onUpdate={handleUpdate}
                editingCourse={editingCourse}
              />
            </div>
          )}

          <CourseList
            courses={courses}
            role={role}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />

          <Banner />
        </>
      )}

      {view === "profile" && (
        <ProfilePage onBack={() => setView("home")} />
      )}

    </div>

    <Footer />
  </>
);

}
