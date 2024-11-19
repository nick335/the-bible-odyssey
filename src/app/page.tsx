// import Image from "next/image";
import Aboutus from "../components/aboutus/Aboutus";
import Newsletter from "../components/newsletter/Newsletter";
import Footer from "../components/layout/footer/Footer";

export default function Home() {
  return (
    <div className="lg:bg-desktopLowerBodyBg lg:bg-cover lg:bg-bottom lg:bg-no-repeat">
      <Aboutus />
      <Newsletter />
      <Footer />
    </div>
  );
}
