import Header from "./layouts/Header";
import Banner from "./pages/Banner";
import Stacks from "./pages/Stacks";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./layouts/Footer";

export default function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Stacks></Stacks>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
