import { Link } from "react-router-dom";

import FooterTab from "../components/FooterTab/FooterTab";
import Navbar from "../components/Navbar/Navbar";
export default function NotFound() {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "22%" }}>
        <h2>404 Page Not Found</h2>
        <h6>
          The page you requested does not exist. Click{" "}
          <Link to="/" style={{ textDecoration: "none", color: "#8f70ff" }}>
            <span>here </span>
          </Link>
          to continue to our site.
        </h6>
      </div>
      <FooterTab />
    </>
  );
}
