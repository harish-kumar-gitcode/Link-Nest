import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-blue-900 h-[300px] flex gap-10 text-white pt-3 pl-2">
        <div>
          <h1 className="text-white text-3xl ">Link Nest</h1>
          <p className=" text-sm">Share property links. Close faster.</p>
        </div>
        <div>
          <h1 className="text-2xl">About</h1>
          <h2>About Us</h2>
          <h2>Social Media</h2>
        </div>
        <div>
          <h1 className="text-2xl">Policies</h1>
          <h2>Terms & Condition's</h2>
          <h2>Privacy Policy</h2>
        </div>
      </div>
      <p className="text-center bg-blue-100">
        &copy; All rights reserved to{" "}
        <span className="text-blue-900">Link Nest Pvt Ltd.</span>
      </p>
    </>
  );
};

export default Footer;
