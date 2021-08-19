import { useEffect, useRef } from "react";
import FooterTab from "../components/FooterTab/FooterTab";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import NewsCards from "../components/NewsCard/NewsCards";
export default function Home() {
  const mountedRef = useRef(true);

  useEffect(() => {
    // title update
    document.title = "News - Top Headlines";
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      <NewsCards />
      <FooterTab />
    </div>
  );
}
