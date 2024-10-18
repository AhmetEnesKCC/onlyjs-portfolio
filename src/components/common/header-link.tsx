"use client";

import { HeaderLinkProps } from "@/types/header";
import clsx from "clsx";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";

const HeaderLink = ({ href, label }: HeaderLinkProps) => {
  const params = useParams();

  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let isActiveLocal;
    if (!window.location.hash && href === "#home") {
      isActiveLocal = true;
    }
    isActiveLocal = window.location.hash === href;
    setIsActive(isActiveLocal);
  }, [params]);

  return (
    <Link href={href}>
      <li className={clsx(isActive ? "text-primary" : "text-white")}>
        {label}
      </li>
    </Link>
  );
};

export default HeaderLink;
