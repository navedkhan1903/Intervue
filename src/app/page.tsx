import FAQs from "@/sections/FAQs";
import Guides from "@/sections/Guides";
import Header from "@/sections/Header";
import NavBar from "@/sections/NavBar";
import Footer from "@/sections/Footer";
import Products from "@/sections/Products";
import Security from "@/sections/Security";
import Testimonial from "@/sections/Testimonial";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <Guides />
      <Security />
      <Testimonial />
      <Products />
      <FAQs />
      <Footer />
    </>
  );
}
