import { useEffect, useRef } from "react";
import FooterTab from "../components/FooterTab/FooterTab";
import Navbar from "../components/Navbar/Navbar";
import CategoryCard from "../components/CategoryCard/CategoryCard";
export default function Category() {
  const mountedRef = useRef(true);

  useEffect(() => {
    // title update
    document.title = "Categories";
    return () => {
      mountedRef.current = false;
    };
  }, []);
  return (
    <div>
      <Navbar />
      <h1 style={{ marginTop: "5rem", fontWeight: "100" }}>Categories</h1>
      <CategoryCard />
      <FooterTab />
    </div>
  );
}
