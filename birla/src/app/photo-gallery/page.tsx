import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alumni Registration — Birla Vidya Niketan",
};

export default function Page() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-12">
              Alumni Registration
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
