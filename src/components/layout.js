import React from "react";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children, sticky }) {
  return (
    <>
      <Header />
      {sticky}
      <div className="w-full h-full bg-white1 px-52">{children}</div>
      <Footer />
    </>
  );
}
