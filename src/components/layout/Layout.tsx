import Header from "../common/Header";
import Footer from "../common/Footer";
import React from "react";

interface ILayoutProps {
  children: React.ReactNode
}

const Layout = ({children}: ILayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
