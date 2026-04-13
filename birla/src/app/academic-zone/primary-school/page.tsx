import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Primary School — Birla Vidya Niketan",
};

export default function Page() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-12">
              Primary School
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
