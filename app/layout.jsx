import "@/assets/styles/globals.css";

import React from "react";

const HomeLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default HomeLayout;
