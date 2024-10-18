import { HeaderLinkProps } from "@/types/header";
import React from "react";
import HeaderLink from "../common/header-link";

const links: HeaderLinkProps[] = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About Me",
    href: "#about",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header = () => {
  return (
    <header className="px-[80px] py-[32px] sticky top-0 bg-background z-[100] ">
      <div className="flex w-full justify-between items-center">
        <h3 className="text-primary text-[28px] font-bold">
          Gülşah Şeyma Koçak
        </h3>
        <ul className="flex gap-x-6 font-bold">
          {links.map((link) => (
            <HeaderLink key={link.label} {...link} />
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
