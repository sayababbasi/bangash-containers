import React from "react";

const GoogleMapEmbed = () => {
  return (
    <section className="w-full h-[400px]">
      <iframe
        title="Bangash Containers Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.464951020142!2d72.9202486!3d33.64511259999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60f5fed18f9450ef%3A0x2ce4ee07aa352407!2sBangash%20Container%20Home!5e0!3m2!1sen!2s!4v1761292913585!5m2!1sen!2s"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-none"
      ></iframe>
    </section>
  );
};

export default GoogleMapEmbed;
