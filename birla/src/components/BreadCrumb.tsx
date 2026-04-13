"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const BreadCrumb = ({
  bannerBg = "/images/banner/breadcrumbs-bg.jpg",
}: {
  bannerBg?: string;
}) => {

  const pathname = usePathname();

if (pathname === "/") return null;

  const pathSegments = pathname.split("/").filter(Boolean);

  const formatLabel = (segment: string) => {
    return segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div
      className="c-innerbanner"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="container h-100">
        <div className="c-innerbanner__content">
          <div className="pageHeadWrap">

            {/* Title = last segment */}
            <h1>
              {pathSegments.length > 0
                ? formatLabel(pathSegments[pathSegments.length - 1])
                : "Home"}
            </h1>

            <ol className="breadcrumb themeBreadcrumb">

              {/* Home — icon instead of text, same behaviour as before */}
              <li>
                <Link href="/" aria-label="Home">
                  <i className="ri-home-4-line" />
                </Link>
              </li>

              {pathSegments.map((segment, index) => {
                const href = "/" + pathSegments.slice(0, index + 1).join("/");
                const isLast = index === pathSegments.length - 1;

                return (
                  <li key={href} className={isLast ? "active" : ""}>
                    {isLast ? (
                      formatLabel(segment)
                    ) : (
                      <Link href={href}>{formatLabel(segment)}</Link>
                    )}
                  </li>
                );
              })}

            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
