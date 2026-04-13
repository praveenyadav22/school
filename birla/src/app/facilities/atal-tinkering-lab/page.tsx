import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atal Tinkering Lab — Birla Vidya Niketan",
};

export default function Page() {
  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-12">
              Atal Tinkering Lab
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
