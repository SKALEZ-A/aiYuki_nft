import React from "react";
import Image from "next/image";
import footerLogo from "../../public/Images/bottom.png";

const Footer = () => {
  return (
    <footer className="border footer z-10 border-t-[#33353F] bottom-0 left-0 right-0">
      <div>
        <Image
          src={footerLogo}
          className="w-full bottom-0"
          width={320}
          height={320}
        />
      </div>
    </footer>
  );
};

export default Footer;
