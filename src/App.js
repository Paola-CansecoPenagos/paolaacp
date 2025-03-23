import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "./components";
import {
  About,
  Footer,
  Header,
  Skills,
  Testimonials,
  Work,
} from "./containers";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;
