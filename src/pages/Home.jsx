import { useState } from "react";
import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import CategoryTabs from "../components/CategoryTabs";
import VideoGrid from "../components/Grid";
import Footer from "../components/Footer";
import "../assets/css/home.css";


import img1 from "../assets/images/content-1.jpg";
import img2 from "../assets/images/content-2.jpg";
import img3 from "../assets/images/content-3.jpg";
import img4 from "../assets/images/content-4.jpg";
import img5 from "../assets/images/content-5.jpg";
import img6 from "../assets/images/content-6.jpg";
import img7 from "../assets/images/content-7.jpg";
import img8 from "../assets/images/content-8.jpg";
import img9 from "../assets/images/content-9.jpg";


function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const data = [
  {
    thumbnail: img1,
    title: "Dasar HTML untuk Pemula",
    category: "Gratis",
    price: "Gratis",
    rating: 4.8,
  },
  {
    thumbnail: img2,
    title: "CSS Styling Modern",
    category: "Gratis",
    price: "Gratis",
    rating: 4.7,
  },
  {
    thumbnail: img3,
    title: "JavaScript Pemula",
    category: "Premium",
    price: "Rp 39.000",
    rating: 4.9,
  },
  {
    thumbnail: img4,
    title: "React JS Dasar",
    category: "Premium",
    price: "Rp 89.000",
    rating: 4.9,
  },
  {
    thumbnail: img5,
    title: "JavaScript Lanjutan",
    category: "Premium",
    price: "Rp 120.000",
    rating: 4.95,
  },
  {
    thumbnail: img6,
    title: "Belajar Tailwind CSS",
    category: "Gratis",
    price: "Gratis",
    rating: 4.7,
  },
  {
    thumbnail: img7,
    title: "Git & GitHub Dasar",
    category: "Gratis",
    price: "Gratis",
    rating: 4.8,
  },
  {
    thumbnail: img8,
    title: "Node JS Dasar",
    category: "Premium",
    price: "Rp 75.000",
    rating: 4.9,
  },
  {
    thumbnail: img9,
    title: "Belajar UI/UX Figma",
    category: "Premium",
    price: "Rp 50.000",
    rating: 4.86,
  }
];


  // filter berdasarkan kategori
  const filteredData =
    selectedCategory === "Semua"
      ? data
      : data.filter((item) => item.category === selectedCategory);

  return (
    <>
      <Navbar />
      <HeroBanner />
      <CategoryTabs
        active={selectedCategory}
        onChange={setSelectedCategory}
      />
      <VideoGrid data={filteredData} />
      <Footer />
    </>
  );
}

export default Home;
