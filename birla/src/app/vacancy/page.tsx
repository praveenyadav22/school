import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vacancy — Birla Vidya Niketan",
  description: "Current job openings at Birla Vidya Niketan, New Delhi.",
};

const JOBS = [
  {
    sno: 1,
    title: "SUPERVISOR-ADMINISTRATOR",
    status: "Active",
    code: "BVNJOB-1",
    applyUrl:
      "https://erp.quickcampus.online/form/7542d565-32d3-4170-9e99-26eac66c7da8/09eb9977-0c36-4cc7-8ecf-7e4b9790de4c?step=0",
  },
  {
    sno: 2,
    title: "Swimming(F)",
    status: "Active",
    code: "BVNJOB-2",
    applyUrl:
      "https://erp.quickcampus.online/form/7542d565-32d3-4170-9e99-26eac66c7da8/fac4f430-6a25-464c-91ac-5183f9125546?step=0",
  },
  {
    sno: 3,
    title: "Life Guards",
    status: "Active",
    code: "BVNJOB-3",
    applyUrl:
      "https://erp.quickcampus.online/form/7542d565-32d3-4170-9e99-26eac66c7da8/1c16270e-9ff8-42a1-804a-178e85489264?step=0",
  },
  {
    sno: 4,
    title: "Skating (F)",
    status: "Active",
    code: "BVNJOB-4",
    applyUrl:
      "https://erp.quickcampus.online/form/7542d565-32d3-4170-9e99-26eac66c7da8/a020a116-defe-4e1c-80ee-3bace1ef5297?step=0",
  },
  {
    sno: 5,
    title: "Gymnasium (F)",
    status: "Active",
    code: "BVNJOB-5",
    applyUrl:
      "https://erp.quickcampus.online/form/7542d565-32d3-4170-9e99-26eac66c7da8/acef7d59-a170-46f7-901c-286708574b91?step=0",
  },
  {
    sno: 6,
    title: "Badminton",
    status: "Active",
    code: "BVNJOB-6",
    applyUrl:
      "https://erp.quickcampus.online/form/7542d565-32d3-4170-9e99-26eac66c7da8/f154b3e5-9462-4cd4-8a0c-acda4dea15ae?step=0",
  },
  {
    sno: 7,
    title: "Football",
    status: "Active",
    code: "BVNJOB-7",
    applyUrl:
      "https://erp.quickcampus.online/form/7542d565-32d3-4170-9e99-26eac66c7da8/1aa28722-f0f7-43bc-86bf-b00b998147f4?step=0",
  },
  {
    sno: 8,
    title: "Basketball",
    status: "Active",
    code: "BVNJOB-8",
    applyUrl:
      "https://erp.quickcampus.online/form/7542d565-32d3-4170-9e99-26eac66c7da8/147635e4-63cd-45ad-9397-dca6d70c18a7?step=0",
  },
];

export default function VacancyPage() {
  return (
    <div className="body-conent ptb-50 vacancy">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-12">
            <div className="inner-content">
              <div className="theme__table theme__table--colored-head theme__table--alternate-row theme__table--hover">
                <div className="theme__table__wrapper">
                  <div className="table-responsive">
                    <table className="table table-bordered vacancy__table">
                      <thead className="theme__table__head">
                        <tr>
                          <th>S.No.</th>
                          <th>Job Title</th>
                          <th>Status</th>
                          <th>Job Code</th>
                          <th>Option</th>
                        </tr>
                      </thead>

                      <tbody className="theme__table__body">
                        {JOBS.map((job, index) => (
                          <tr key={job.sno} className="theme__table__row">
                            <td>{job.sno}</td>
                            <td>{job.title}</td>
                            <td>
                              <span className="vacancy__status vacancy__status--active">
                                {job.status}
                              </span>
                            </td>
                            <td>{job.code}</td>
                            <td>
                              <a
                                href={job.applyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn--success btn-sm"
                              >
                                Apply Now
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
