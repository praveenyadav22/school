import Link from "next/dist/client/link";

export default function Page() {
  return (
    <main>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contentsection noborder">
                <div className="payBox">
                  {/* ── Section heading ── */}
                  <h3 className="inner-content__head payheding">FEE 2026-27</h3>

                  {/* ── Fee heading ── */}
                  <p className="payBox__feetitle">
                    <u>FEE 2026-27</u>
                  </p>

                  {/* ── Fee schedule ── */}
                  <ol className="payBox__list">
                    <li>
                      First term (Apr-Jun) school fees for the Academic year
                      2026-27 is payable between 01.04.2026 and 10.04.2026
                      through Online as mentioned below. Last date of payment
                      with <strong>late fee</strong> is 30.04.2026.
                    </li>
                  </ol>

                  {/* ── Payment mode ── */}
                  <p className="payBox__subhead">
                    <u>Payment Mode</u>
                  </p>

                  <p className="payBox__subhead payBox__subhead--regular">
                    Online payment
                  </p>

                  <p className="payBox__para">
                    Fee can be paid online during the schedule period{" "}
                    <strong>(01.04.2026 - 30.04.2026)</strong> through student
                    Login school website or Mobile App using Credit Card (CC),
                    Debit Card (DC), Net Banking (NB), UPI with applicable
                    Convenience Charge.
                  </p>

                  {/* ── Notes ── */}
                  <p className="payBox__para">
                    <strong>Note :</strong>
                  </p>

                  <ul className="payBox__notelist">
                    <li>
                      1. Payment Receipt may be download from school website.
                    </li>
                    <li>
                      2. Please don&apos;t send Cheque, Draft for fee payment
                      and deposit online through school website / Mobile App.
                    </li>
                    <li>
                      3. Parents are requested to recheck your Ward particulars,
                      Fees, Fine and convenience charges before depositing fee.
                    </li>
                    <li>
                      <strong>
                        4. The Fee structure of Academic Year 2026-27 is
                        available on the website. However, only for the time
                        being, the School shall be charging the fee at the rates
                        of 2025-26, during the ensuing academic year 2026-27,
                        subject to outcome of the Writ Petition Pending before
                        the Honorable High Court.
                      </strong>
                    </li>
                  </ul>

                  {/* ── CTA button — replaces onclick with Link ── */}
                  <Link
                    href="https://erp.quickcampus.online/auth"
                    className="btn payBox__btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pay Online
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
