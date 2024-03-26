import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
// import Testimonials from "./components/Testimonials/Testimonials";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Team from "./components/Team/Team";




function App() {
  return (
    <div className="App">
      <div className="bg-image">
        <Navbar />
      </div>
      <div>
        <Home />

      </div>
      <div>
        <Carousel />
      </div>

      <div>
        <Team />
      </div>
      <div>
        <Contact />
      </div>


      <div>
        <Footer />
      </div>



    </div>

  );
}

export default App;
