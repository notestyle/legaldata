import React from "react";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children, sticky }) {
  return (
    <>
      <Header />
      {sticky}
      <div className="w-full h-full min-h-[calc(100vh-23rem)] bg-white1 px-2 md:px-20 lg:px-32">
        {children}
      </div>
      <Footer />
    </>
  );
}
