import React from "react";
// import Header from "../Header";

type LayoutProps = {
  render: () => React.JSX.Element;
};
const Layout = ({ render }: LayoutProps) => {
  return (
    <>
      {/* <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-black " />
        </div>
      </div> */}
      <div className="relative flex w-full flex-col">
        {/* <Header /> */}
        <main className="flex-auto w-ful">{render()}</main>
      </div>
    </>
  );
};

export default Layout;
