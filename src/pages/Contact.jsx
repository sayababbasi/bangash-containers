// src/pages/About.jsx
import React from "react";
import ContactHero from "../components/contact/ContactHero"
import ContactInfo from "../components/contact/ContactInfo"
import ContactForm from "../components/contact/ContactForm"
import GoogleMapEmbed from "../components/contact/GoogleMapEmbed"


const Contact = () => {
  return (
    <>
    <ContactHero />
    <ContactInfo />
    <ContactForm />
    <GoogleMapEmbed />
    
    
    </>

  );

}

export default Contact