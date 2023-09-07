import './App.css';
import Header from './components/Header';
import React from 'react';
import Footer from './components/Footer';
import ContactList from './components/ContactList';
import { ContactUs } from './components/ContactUs';
import { AboutUs } from './components/AboutUs';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import AddContact from './components/AddContact';


function App() {


  return (
    <Router>
     
     
   
        {/* Your content goes here */}
        <Header />
        <Routes>
   <Route path="/" element = {<AboutUs/>} />
   <Route path="/contact" element = {<ContactList/>} />
   <Route path="/contactus" element = {<ContactUs/>} />
   <Route path="*" element = {<PageNotFound/>} />
   <Route path="/addcontact" element = {<AddContact/>} />

        </Routes>
        <Footer />

  
    </Router>
  );
}

export default App;
