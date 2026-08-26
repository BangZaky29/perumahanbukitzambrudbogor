import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AppRouter } from "./router/AppRouter";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { WhatsAppFloatingButton } from "./components/shared/WhatsAppFloatingButton";
import { LoadingScreen } from "./components/shared/LoadingScreen";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for 5 seconds on initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loading-screen" />}
      </AnimatePresence>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <AppRouter />
        </main>
        <Footer />
        <WhatsAppFloatingButton />
      </div>
    </BrowserRouter>
  );
};

export default App;
