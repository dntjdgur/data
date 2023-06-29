import * as React from 'react';
import { Fragment, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './component/render/Home';
import About from './component/render/About';
import Analysis from './component/render/Analysis';
import ContactUs from './component/render/ContactUs';
import Carbon from './component/render/Carbon';

export default function Index() {
    useEffect(() => {
      document.title = 'Data Science Portfolio by Sunghyuk Woo'; // Document Title Rendering. //
    }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutme" element={<About />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/carbon-neutrality" element={<Carbon />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

