import React, { useEffect } from "react";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";
import Courses from "./pages/public/Courses";
import Home from "./pages/public/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/public-section/Header";
import Footer from "./components/public-section/Footer";
import { Helmet } from "react-helmet";

const PublicLayout = ({ children }) => {
  useEffect(() => {
    const scripts = [
      "/assets/public/js/jquery-3.3.1.min.js",
      "/assets/public/js/jquery.waypoints.min.js",
      "/assets/public/js/jquery.countup.js",
      "/assets/public/js/owl.carousel.js",
      "/assets/public/js/countup.js",
      "/assets/public/js/banner-slider.js",
      "/assets/public/js/testimonial-carousel.js",
      "/assets/public/js/navbar-scroll.js",
      "/assets/public/js/scroll-top.js",
      "/assets/public/js/bootstrap.min.js",
      "/assets/public/js/theme-change.js",
    ];

    const loadScripts = () => {
      scripts.forEach((src) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = false; // S'assurer qu'il se charge de manière synchrone
        document.body.appendChild(script);
      });
    };

    loadScripts();

    return () => {
      // Nettoyage des scripts si nécessaire
      scripts.forEach((src) => {
        const script = document.querySelector(`script[src='${src}']`);
        if (script) script.remove();
      });
    };
  }, []);

  return (
    <div>
      <Helmet>
        <link href="//fonts.googleapis.com/css?family=Nunito:400,700&display=swap" rel="stylesheet" />
        <link href="//fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/assets/public/css/style-starter.css" />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes avec Header et Footer */}
        <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
        <Route path="/courses" element={<PublicLayout><Courses /></PublicLayout>} />
        <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
        <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />

        {/* Si vous avez des routes sans Header et Footer */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
