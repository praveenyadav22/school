"use client";

import { useState } from "react";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

const sidebarData: SidebarLinksProps = {
  heading: "Student Zone",
  links: [
    {
      label: "Rules & Regulations",
      href: "/student-zone/rules-regulations",
    },
    {
      label: "Awards & Scholarships",
      href: "/student-zone/awards-scholarships",
    },
    {
      label: "Student's Council",
      subLinks: [
        {
          label: "Senior Section",
          href: "/student-zone/senior-section-council",
        },
        {
          label: "Junior Section",
          href: "/student-zone/junior-section-council",
        },
      ],
    },
    {
      label: "Examination Schedule",
      subLinks: [
        {
          label: "Schedule",
          href: "https://erp.quickcampus.online/auth",
          target: "_blank",
        },
        {
          label: "Syllabus",
          href: "https://erp.quickcampus.online/auth",
          target: "_blank",
        },
      ],
    },
    {
      label: "Admission",
      href: "/admission",
    },
  ],
};

function BatchTable({ heading, colSpan, headers, rows }: any) {
  return (
    <div className="contentsection with_table">
      <div className="table-responsive">
        <table className="table headerBg">
          <thead>
            <tr>
              <th colSpan={colSpan}>{heading}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {headers.map((h: string) => (
                <td key={h}>
                  <strong>{h}</strong>
                </td>
              ))}
            </tr>

            {rows.map((row: any[], i: number) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j}>{cell || "\u00a0"}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PdfEmbed({ src }: { src: string }) {
  return (
    <p>
      <iframe className="frame" src={src} width="100%" height="600" />
    </p>
  );
}

function AccordionItem({ id, label, openId, setOpenId, children }: any) {
  const isOpen = openId === id;

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className={`accordion-button border-bottom fw-semibold${isOpen ? "" : " collapsed"}`}
          onClick={() => setOpenId(isOpen ? null : id)}
        >
          {label}
        </button>
      </h2>

      <div className={`accordion-collapse collapse${isOpen ? " show" : ""}`}>
        <div className="accordion-body">{children}</div>
      </div>
    </div>
  );
}

export default function AwardsScholarshipsPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  const headers = ["S.No.", "Name of Student", "Class/Sec", "Sch.No", "House"];

  return (
    <div className="body-conent ptb-50">
      <div className="container">
        <div className="row">

          {/* MAIN */}
          <div className="col-12 col-lg-8">
            <div className="inner-content">
              <div className="contentsection noborder">
                <div className="accordion accordion-flush">

                  {/* SUPW */}
                  <AccordionItem id="supw" label="Annual SUPW Award List" openId={openId} setOpenId={setOpenId}>

                    <BatchTable heading="Dance" colSpan={5} headers={headers} rows={[
                      ["1","Vridhi Chawla","VI-E","11047","Annapurna"],
                      ["2","Aradhya Sahdev","VI-A","11203","Nilgiri"],
                      ["3","Vipanshi Chaturvedi","VII-A","10440","Kailash"],
                      ["4","Aahana Sareen","VII-E","10440","Aravali"],
                      ["5","Gaurie Lachiramka","VIII-E","9541","Dhaulagiri"],
                      ["6","Tanvi Sharma","VIII-A","9563","Kailash"],
                      ["7","Nehna Khemani","IX-I","10026","Annapurna"],
                      ["8","Nishtha Singh","IX-A","10016","Dhaulagiri"],
                      ["9","Anisha Gupta","X-D","8844","Nilgiri"],
                      ["10","Arshiya Bidani","X-F","9001","Kailash"],
                    ]} />

                    <BatchTable heading="Tabla" colSpan={5} headers={headers} rows={[
                      ["1","Aditi Sharma","VI-A","11084","Kailash"],
                      ["2","Aakansha Ramteke","VI-D","11050","Nilgiri"],
                      ["3","Anshul Trivedi","VII-E","10334","Vindhya"],
                      ["4","Kamakshi Joshi","VII-F","10376","Aravali"],
                      ["5","Siddhant Pandu","VIII-F","9633","Aravali"],
                      ["6","Sarthak Pandu","VIII-C","9558","Nilgiri"],
                      ["7","Nitin Pahwa","IX-B","10003","Aravali"],
                      ["8","Abhik Chatterjee","IX-F","11561","Annapurna"],
                      ["9","Satvik","X-B","8897","Aravali"],
                      ["10","Eshan Gupta","X-G","9790","Annapurna"],
                    ]} />

                    <BatchTable heading="Computer" colSpan={5} headers={headers} rows={[
                      ["1","Aarrushi Taparia","VI-D","11137","Nilgiri"],
                      ["2","Mudit Bhatia","VI-A","11044","Nilgiri"],
                      ["3","Soohab Kaur","VII-A","10302","Vindhya"],
                      ["4","Krish Jain","VII-C","10220","Vondhya"],
                      ["5","Harshit Dawra","VIII-C","9738","Dhaulagiri"],
                      ["6","Vani Beswal","VIII-H","9992","Kailash"],
                      ["7","Ihina","IX-C","9314","Nilgiri"],
                      ["8","Pancham Aggarwal","IX-G","9289","Vindhya"],
                      ["9","Navan Chauhan","X-E","9053","Aravali"],
                      ["10","Yash","X-D","9084","Nilgiri"],
                    ]} />

                    <BatchTable heading="Vocal Music" colSpan={5} headers={headers} rows={[
                      ["1","Souvik Dey","VI-A","1087","Kailash"],
                      ["2","Antorik Roy","VI-B","1085","Aravali"],
                      ["3","Indrani Mukherjee","VII-A","10371","Dhaulagiri"],
                      ["4","Oindree Basar","VII-D","10243","Nilgiri"],
                      ["5","Mathangi Saji","VIII-B","9742","Dhaulagiri"],
                      ["6","Anushka Sarkar","VIII-H","9645","Kailash"],
                      ["7","Debraj Ghosh","IX-A","10723","Aravali"],
                      ["8","Bhavika Mancharelu","IX-A","10050","Dhaulagiri"],
                      ["9","Eeshani Manmohan","X-B","8851","Dhaulagiri"],
                      ["10","Gaurika Singh","X-G","9046","Aravali"],
                    ]} />

                    <BatchTable heading="Art" colSpan={5} headers={headers} rows={[
                      ["1","Srishti Kanjilal","VI-C","12745","Nilgiri"],
                      ["2","Pragya Gupta","VI-B","13115","Annapurna"],
                      ["3","Poornima","VII-A","10479","Kailash"],
                      ["4","Shwaas Tika","VII-E","12313","Aravali"],
                      ["5","Swastik Sajwan","VIII-G","9665","Arvali"],
                      ["6","Vani Beswa;","VIII-H","9992","Kailash"],
                      ["7","Supriya Baital","IX-C","9419","Dhaulagiri"],
                      ["8","Bhavya Wagnoo","IX-G","10051","Annapurna"],
                      ["9","Himali Sood","X-A","9009","Kailash"],
                      ["10","Aadi Pathania","X-C","8903","Annapurna"],
                    ]} />

                    <BatchTable heading="Collage & Paper Craft" colSpan={5} headers={headers} rows={[
                      ["1","Jagrav Rampal","VI-B","11059","Nilgiri"],
                      ["2","Shivika Mewati","VI-D","11153","Nilgiri"],
                      ["3","Kaavya Behl","VII-B","10329","Nilgiri"],
                      ["4","Abhiyansh Singh","VII-A","10370","Vindhaya"],
                      ["5","Sanah Kochar","VIII-B","9941","Kailash"],
                      ["6","Manan Sethi","VIII-E","9691","Dhaulagiri"],
                      ["7","Aditya Paldas","IX-A","9199","Nilgiri"],
                      ["8","Prashi Jain","IX-B","10033","Annapurna"],
                      ["9","Parvasika","X-C","9099","Vindhya"],
                      ["10","Bisma","X-A","8942","Aravali"],
                    ]} />

                    <BatchTable heading="Photography" colSpan={5} headers={headers} rows={[
                      ["1","Tushar Mahajan","XI-D","8632","Aravali"],
                      ["2","Devv Khemani","VII-F","10283","Vindhya"],
                    ]} />

                    <BatchTable heading="Western Movie" colSpan={5} headers={headers} rows={[
                      ["1","Rajveer Arora","VI-B","12299","Nilgiri"],
                      ["2","Rishank Sirpaul","VI-B","11069","Kailash"],
                      ["3","Dharya","VII-A","10490","Vindhya"],
                      ["4","MD. Arjit","VII-C","11704","Aravali"],
                      ["5","Kartikeya Sinha","VIII=B","9830","Vindhya"],
                      ["6","Deepansh Saha","VIII-I","97353","Dhaulagiri"],
                      ["7","Tanmay Agarwal","IX-E","9383","Vindhya"],
                      ["8","Arvshi Singh","IX-H","10701","Kailash"],
                      ["9","Shaina Bhdwal","X-G","8617","Dhaulagiri"],
                      ["10","Aditi","X-D","10903","Aravali"],
                    ]} />

                  </AccordionItem>

                  {/* ATTENDANCE */}
                  <AccordionItem id="attendance" label="100% Attendance : 2018-2019" openId={openId} setOpenId={setOpenId}>
                    <BatchTable
                      heading="100% Attendance : 2018-2019"
                      colSpan={5}
                      headers={["S.NO","CLASS","NAME","SCH. NO","HOUSE"]}
                      rows={[
                        ["","6A","-","",""],
                        ["1","6B","ASHNOOR WADHERA","11712","VINDHYA"],
                        ["2","6B","KUNAL MISRA","12709","KAILASH"],
                        ["3","6B","SONAKSHI KUMAR","11099","VINDHYA"],
                        ["4","6C","HRIDAY SINGH","11187","ANNAPURNA"],
                        ["","6D","-","",""],
                        ["5","6E","ABHINAV BALHARA","11168","KAILASH"],
                        ["6","6F","SANSKRITI","11205","DHAULAGIRI"],
                      ]}
                    />
                  </AccordionItem>

                  {/* IDEAL STUDENTS */}
                  <AccordionItem id="ideal" label="Ideal Students : 2018-2019" openId={openId} setOpenId={setOpenId}>
                    <BatchTable
                      heading="Ideal Students (VI-X) 2018-2019"
                      colSpan={5}
                      headers={["S.NO.","CLASS/SECTION","NAME","SCH. NO","HOUSE"]}
                      rows={[
                        ["1","6A","DIYA SAMRIDHI","12103","NILGIRI"],
                        ["2","6B","SWAYAM D.M","11502","ARAVALLI"],
                        ["3","6C","SRISHTI KANJILAL","12745","NILGIRI"],
                      ]}
                    />
                  </AccordionItem>

                  {/* PDF */}
                  <AccordionItem id="pdf" label="Scholars 2018-2019 Class VI (90% And Above)" openId={openId} setOpenId={setOpenId}>
                    <PdfEmbed src="/documents/scholars-2018-2019.pdf" />
                  </AccordionItem>

                </div>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="col-12 col-lg-4">
            <SidebarLinks {...sidebarData} />
          </div>

        </div>
      </div>
    </div>
  );
}