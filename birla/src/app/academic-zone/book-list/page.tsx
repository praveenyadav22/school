import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book List 2024-25 — Birla Vidya Niketan",
};

export default function Page() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-12">
              Book List 2024-25
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
