import { StrictMode } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './home.jsx';
import SignIn from './signin.jsx';
import Signup from './signup.jsx';
import Account from './account.jsx';

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  </Router>
)
