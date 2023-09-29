import React from "react";
import Header from "./Header";

type LayoutProps = {
  render: () => React.JSX.Element;
};
const Layout = ({ render }: LayoutProps) => {
  return (
    <div>
      <Header />

      <div className="">{render()}</div>

      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
