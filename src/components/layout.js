import React from "react";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="w-full h-full bg-white px-32">{children}</div>
      <Footer />
    </>
  );
}
