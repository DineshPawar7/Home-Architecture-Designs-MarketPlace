import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import SpecialSection from "./components/SpecialSection";
import TrendingSlideshow from "./components/TrendingSlideshow";
import Pricing from "./components/Pricing";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* Define the Homepage route */}
          <Route
            path="/"
            element={
              <>
                <Homepage />
                <Services />
                <WhyChoose />
                <SpecialSection />
                <TrendingSlideshow />
              </>
            }
          />

          {/* Define the Pricing route */}
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
