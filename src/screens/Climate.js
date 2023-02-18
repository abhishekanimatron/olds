import { useEffect, useRef } from "react";
import FooterTab from "../components/FooterTab/FooterTab";
import Navbar from "../components/Navbar/Navbar";
import Weather from "../components/Weather/Weather";
// Weather Details
export default function Climate() {
  const mountedRef = useRef(true);

  useEffect(() => {
    // title update
    document.title = "Weather Conditions";
    return () => {
      mountedRef.current = false;
    };
  }, []);
  return (
    <div>
      <Navbar />
      <Weather />
      <FooterTab />
    </div>
  );
}
