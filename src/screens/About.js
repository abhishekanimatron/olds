import { useEffect, useRef } from "react";
import FooterTab from "../components/FooterTab/FooterTab";
import Navbar from "../components/Navbar/Navbar";
// import Article from "../components/Article/Article";
import AboutUs from "../components/AboutUs/AboutUs";

export default function About() {
  const mountedRef = useRef(true);

  useEffect(() => {
    // title update
    document.title = "About Us";
    return () => {
      mountedRef.current = false;
    };
  }, []);
  return (
    <div>
      <Navbar />
      {/* <Article /> */}

      <AboutUs />

      <FooterTab />
    </div>
  );
}
