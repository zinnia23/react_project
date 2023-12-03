import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { DataProvider } from "../../DataContext";

const Layout = ({ children }) => {
  return (
    <>
      <DataProvider>
        <Header />
        <div>{children}</div>
        <Footer />
      </DataProvider>
    </>
  );
};

export default Layout;
