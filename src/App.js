import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Testimonials from "./components/Testimonials/Testimonials";
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <Testimonials />
      </div>


    </div>

  );
}

export default App;
