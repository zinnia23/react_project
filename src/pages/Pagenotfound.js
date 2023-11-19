import React, {useEffect} from "react";
import Layout from "./../components/Layout/Layout";

const Pagenotfound = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <Layout>
      <h1>Page Not Found</h1>
    </Layout>
  );
};

export default Pagenotfound;
