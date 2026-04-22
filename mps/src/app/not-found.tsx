import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Page Not Found" };

export default function NotFound() {
  return (
    <div style={{
      minHeight: "60vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "60px 20px",
    }}>
      <h1 style={{ fontSize: "80px", color: "#003255", margin: 0, lineHeight: 1 }}>404</h1>
      <h2 style={{ color: "#4dc3cf", margin: "16px 0 12px" }}>Page Not Found</h2>
      <p style={{ color: "#777", maxWidth: "400px", marginBottom: "32px" }}>
        The page you are looking for could not be found. It may have been moved or deleted.
      </p>
      <Link
        href="/"
        style={{
          background: "#003255",
          color: "#fff",
          padding: "12px 28px",
          borderRadius: "4px",
          textDecoration: "none",
          fontWeight: 600,
          transition: "background 0.3s",
        }}
      >
        Return to Homepage
      </Link>
    </div>
  );
}
