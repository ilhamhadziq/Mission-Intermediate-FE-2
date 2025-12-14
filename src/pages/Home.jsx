import Header from "../components/Header";
import Hero from "../components/Hero";
import CourseList from "../components/CourseList";
import CourseCard from "../components/CourseCard";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

// import "../assets/css/home.css";
import "../assets/css/general.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="page">
        <Hero />    
        <CourseList>
          <CourseCard />
        </CourseList>
        <Banner />
      </div>
      <Footer />
    </>
  );
}
