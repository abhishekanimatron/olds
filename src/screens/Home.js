import FooterTab from "../components/FooterTab/FooterTab";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import NewsCards from "../components/NewsCard/NewsCards";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <NewsCards />
      <NewsCards />
      <FooterTab />
    </div>
  );
}
