
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumb() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

  return (
    <div>
      <Link href="/">Home</Link>

      {paths.map((segment, index) => {
        const href = "/" + paths.slice(0, index + 1).join("/");

        return (
          <span key={index}>
            {" / "}
            <Link href={href}>{segment}</Link>
          </span>
        );
      })}
    </div>
  );
}