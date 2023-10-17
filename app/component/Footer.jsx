import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border footer z-10 border-t-[#33353F] bottom-0 left-0 right-0">
      <div>
        <Image
          src="/images/bottom.png"
          className="w-full bottom-0"
          width={320}
          height={320}
        />
      </div>
    </footer>
  );
};

export default Footer;
