import { useLocation } from "react-router";
import Header from "../components/Header";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


export function meta() {
  return [
    { title: "Ark Handyman" },
    { name: "description", content: "Welcome to Ark Handyman" },
  ];
}

export default function Home() {

  return (
    <div>
      <Header />
      <Services />
      <Gallery />
      <Footer />
    </div>
);
}