import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MainPage from "./pages/MainPage";
import About from "./pages/About";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { OMDPProvider } from "./context/OMDPContext";

const App = () => {
  
  const location = useLocation();
  return (
    <OMDPProvider>
      <div className="flex min-h-screen flex-col justify-between overflow-x-hidden relative">
        <Header />
        <main className="container mx-auto mt-6 mb-10 flex-1 px-4">
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<MainPage />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </OMDPProvider>
  );
};

export default App;
