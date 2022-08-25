import React, { Fragment, ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
export default function Layout(props: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}
