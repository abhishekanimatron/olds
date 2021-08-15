import FooterTab from "../components/FooterTab/FooterTab";
import Navbar from "../components/Navbar/Navbar";
import CategoryCard from "../components/CategoryCard/CategoryCard";
export default function Global() {
  return (
    <div>
      <Navbar />
      <CategoryCard />
      <FooterTab />
    </div>
  );
}
