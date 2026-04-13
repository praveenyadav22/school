import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Junior Section Council — Birla Vidya Niketan",
};

export default function Page() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-12">
              Junior Section Council
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
