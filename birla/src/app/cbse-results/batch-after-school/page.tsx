"use client";

import { useState } from "react";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";
import { AccordionItem, BatchTable, PdfEmbed } from "@/utils/Accordion";

const sidebarData: SidebarLinksProps = {
  heading: "CBSE Results",
  links: [
    { label: "Class XII",         href: "/cbse-results/class-xii" },
    { label: "Class X",           href: "/cbse-results/class-x" },
    { label: "Batch After School", href: "/cbse-results/batch-after-school" },
  ],
};

export default function BatchAfterSchoolPage() {
  // Browser: flush-collapseSeven is open by default (aria-expanded="true")
  const [openId, setOpenId] = useState<string | null>("batch-2016");

  return (
    <>
      <div className="body-conent ptb-50">
        <div className="container">
          <div className="row">

            {/* ── Main content — 8 columns ── */}
            <div className="col-12 col-lg-8">
              <div className="inner-content">
                <div className="contentsection noborder">
                  <div className="accordion accordion-flush" id="accordionFlushExample">

                    {/* ── 2024-25 Batch ── */}
                    <AccordionItem id="batch-2024-25" label="Students of 2024-25 Batch" openId={openId} setOpenId={setOpenId}>
                      <BatchTable heading="ENGINEERING COLLEGES" colSpan={5}
                        headers={["S.NO.", "NAME", "CLASS", "COLLEGE/UNIVERSITY", "COURSE"]}
                        rows={[
                          ["1","Ujjwal Kesari","XII A","Indian Institute of Technology Bombay (IITB)","Engineering"],
                          ["2","Avilash Dakour","XII B","Indian Institute of Technology Delhi (IITD)","Engineering"],
                          ["3","Kushagra Nath","XII A","Indian Institute of Technology Delhi (IITD)","Engineering"],
                          [null,"Tejasveer Singh",null,null,null],
                          ["4","Matharu","XII A","Indian Institute of Technology (Banaras Hindu University)","Engineering"],
                          ["5","Astitav Gupta","XII C","Delhi Technological University (DTU)","Engineering"],
                          ["6","Harshit Singh","XII C","BITS Pilani","Engineering"],
                          ["7","Shaurya Dhingra","XII A","Netaji Subhas University of Technology (NSUT)","Engineering"],
                          ["8","Yosha Singh","XII A","Indira Gandhi Delhi Technical University for Women (IGDTUW)","Engineering"],
                          ["9","Aarshi Lohia","XII C","Indira Gandhi Delhi Technical University for Women (IGDTUW)","Engineering"],
                          ["10","Anika Gupta","XII A","Indira Gandhi Delhi Technical University for Women (IGDTUW)","Engineering"],
                          ["11","Vaibhav Khurana","XII C","Thapar Institute of Engineering and Technology","Engineering"],
                          ["12","Divyam Aggarwal","XII C","Thapar Institute of Engineering and Technology","Engineering"],
                          ["13","Eshan Kabra","XII C","VIT Vellore","Engineering"],
                          ["14","Souvik Dey","XII C","VIT Vellore","Engineering"],
                          ["15","Garvita Sharma","XII C","South Asian University","Engineering"],
                          ["16","Mudit Bhatia","XII C","GGSIPU","Engineering"],
                          ["17","Aryan Bhanjana","XII A","GGSIPU","Engineering"],
                          ["18","Aurosmriti Mohapatra","XII A","GGSIPU","Engineering"],
                          ["19","Sarthak Dewan","XII A","GGSIPU","Engineering"],
                          ["20","Tejjas Kapoor","XII A","GGSIPU","Engineering"],
                          ["21","Swasti Mohanta","XII C","GGSIPU","Engineering"],
                          ["22","Arushi Taparia","XII C","GGSIPU","Engineering"],
                          ["23","Pratyush Pattanaik","XII C","GGSIPU","Engineering"],
                          ["24","Aryan Bisht","XII C","GGSIPU","Engineering"],
                          ["25","Swayam Dayanand","XII C","R. V. College of Engineering","Engineering"],
                          ["26","Kumar Shreyansh","XII C","D. Y. Patil College of Engineering","Engineering"],
                          ["27","Anoushka Saini","XII C","University of Petroleum and Energy Studies","Engineering"],
                          ["28","Reyansh Taneja","XII A","Manipal Institute of Technology (MIT)","Engineering"],
                          ["29","Soham Banerjee","XII A","National Institute of Engineering and Technology","Engineering"],
                          ["30","Bidipta Biswas","XII C","JIIT, Noida","Engineering"],
                          ["31","Anushka Chatterjee","XII C","KIIT University","Engineering"],
                          ["32","Shaurya Vaid","XII A","KIIT University","Engineering"],
                          ["33","Shristi Kanjilal","XII C","Amity School of Engineering and Technology, Noida","Engineering"],
                          ["34","Sonakshi Kumar","XII C","Amity School of Engineering and Technology, Noida","Engineering"],
                          ["35","Aryan Chaudhary","XII A","Amity School of Engineering and Technology, Noida","Engineering"],
                          ["36","Krish Singh","XII A","G. L. Bajaj Institute of Technology and Management","Engineering"],
                          ["37","Aanya Bhandari","XII A","Bharati Vidyapeeth Deemed To Be University (BVDU)","Engineering"],
                          ["38","G. Prerna","XII A","JSS Academy of Technical Education, Noida","Engineering"],
                        ]}
                      />
                      <BatchTable heading="FOREIGN UNIVERSITIES" colSpan={6}
                        headers={["S.NO.", "NAME", "CLASS", "UNIVERSITY", "COURSE", "COUNTRY"]}
                        rows={[
                          ["1","Rishaank Sirpaul","XII F","University of Toronto","Faculty of Arts and Science with Major in Economics","Canada"],
                          ["2","Yug Sejwal","XII A","University of London","Computer science with Cyber Security Msci (Hons)",null],
                          ["3","Aarohi Dutta","XII E","Tokyo International University","BA in Business Economics","Japan"],
                          ["4","Abhinav Bhowmik","XII D","University of Amsterdam","Economics and business economics","Netherlands"],
                        ]}
                      />
                      <BatchTable heading="MEDICAL COLLEGE" colSpan={5}
                        headers={["S.NO.", "NAME", "CLASS", "COLLEGE/UNIVERSITY", "COURSE"]}
                        rows={[
                          ["1","Aryan Sangma","XII B","Shillong Medical College (SMC)","MBBS"],
                          ["2","Vivaan Pareek","XII B","Heritage Institute of Medical Sciences","MBBS"],
                          ["3","Shreya Rana","XII B","Lloyd College of Pharmacy","B. Pharm"],
                          ["4","Aaryan Bhardwaj","XII B","Lloyd College of Pharmacy","B. Pharm"],
                          ["5","Anvesha Patil","XII F","Jamia Hamdard University","General nursing"],
                        ]}
                      />
                      <BatchTable heading="ARCHITECTURE AND DESIGN COLLEGES" colSpan={5}
                        headers={["S.NO.", "NAME", "CLASS", "COLLEGE/UNIVERSITY", "COURSE"]}
                        rows={[
                          ["1","Prisha","XII F","National Institute of Fashion Technology (NIFT) Bangalore","Bachelors of Design (Fashion Design)"],
                          ["2","Aahana Bhattacharya","XII F","IIAD - Indian Institute of Art and Design","Bachelors of Design (Fashion Design)"],
                          ["3","Vaanya Kothari","XII E","IIAD - Indian Institute of Art and Design","B.A. Fashion and Business Management"],
                          ["4","Ishika Mishra","XII A","GGSIPU","Bachelor of Architecture"],
                          ["5","Benu Gulati","XII E","KR Mangalam University","B. Des Hons. with Research in UI/UX and Interaction Design"],
                        ]}
                      />
                      <BatchTable heading="MANAGEMENT COLLEGES" colSpan={5}
                        headers={["S.NO.", "NAME", "CLASS", "COLLEGE/UNIVERSITY", "COURSE"]}
                        rows={[
                          ["1","Vedansh Gupta","XII D","Indian Institute of Management (IIM) Jammu","IPM(BBA+MBA)"],
                          ["2","Atharva Suyal","XII A","College of Vocational Studies, DU","Bachelor of Management Studies"],
                          ["3","Piyush Chauhan","XII D","GGSIPU","Bachelor in Business Administration"],
                          ["4","Shubham Masiwal","XII D","GGSIPU","Bachelor in Business Administration"],
                          ["5","Suhani Sachdeva","XII E","GGSIPU","Bachelor in Business Administration"],
                          ["6","Prajwal Jha","XII E","GGSIPU","Bachelor in Business Administration"],
                          ["7","Samiya Aggarwal","XII D","Symbiosis International University","Bachelors in Business Administration (Honours/Honours with Research)"],
                          ["8","Krishna Sidarth Pothal","XII E","Jagannath International Management School (JIMS)","Bachelor in Business Administration"],
                          ["9","Suvan Marwah","XII E","Jagannath International Management School (JIMS)","Bachelor in Business Administration"],
                          ["10","Suchir Brahmachari","XII D","Christ University","Bachelor in Business Administration"],
                          ["11","Nachiket Mehta","XII E","Amity International Business School","Bachelor in Business Administration"],
                          ["12","Tanushree Paul","XII E","Amity International Business School","BBA (Business Intelligence and Data Analytics)"],
                          ["13","Khushi Dagar","XII D","O.P. Jindal Global University","Integrated BBA+MBA"],
                          ["14","Rasleen Kaur Dhir","XII C","O.P. Jindal Global University","BBA in Financial Markets"],
                          ["15","Anjani Chandra","XII D","Nirma University","Integrated BBA+MBA"],
                          ["16","Keshav Shukla","XII E","ITM University","Bachelor in Business Administration"],
                          ["17","Yatharth Kanojia","XII E","IGNOU","Bachelor in Business Administration"],
                        ]}
                      />
                      <BatchTable heading="B.A, B.Sc, B. Com" colSpan={5}
                        headers={["S.NO.", "NAME", "CLASS", "COLLEGE/UNIVERSITY", "COURSE"]}
                        rows={[
                          ["1","Sayan Mukherjee","XII A","Indian Institute of Technology Bombay (IITB)","B.Sc Economics"],
                          ["2","Maahi Malhotra","XII D","Shri Ram College of Commerce (SRCC), DU","B. Com (Hons.)"],
                          ["3","Kesar Mathur","XII F","Lady Shri Ram College for Women, DU","B.A. (Hons.) Sociology"],
                          ["4","Aravind Unnikrishnan","XII E","Hansraj College, DU","B. Com (Hons.)"],
                          ["5","Chhavi Gupta","XII D","St. Stephen's College, DU","B.A. (Hons.) Economics"],
                          ["6","Aakanksha Ramteke","XII F","Jesus and Mary College, DU","B.A. (Hons.) Psychology"],
                          ["7","Heer Anand","XII E","Jesus and Mary College, DU","B. Com (Hons.)"],
                          ["8","Daksh Maratha","XII D","Kirori Mal College, DU","B. Com (Hons.)"],
                          ["9","Tanvi Krishna","XII F","Gargi College, DU","B.A. (Hons.) Applied Psychology"],
                          ["10","Nandini","XII F","Gargi College, DU","BA (Political Science + History)"],
                          ["11","Aakriti Mishra","XII F","Gargi College, DU","B.A. (Hons.) Political Science"],
                          ["12","Manoshi Saha","XII A","Gargi College, DU","B.Sc Mathematics"],
                          ["13","Suhani Gehra","XII F","Kamala Nehru College, DU","B.A. (Hons.) Political Science"],
                          ["14","Gautam Jain","XII E","Atma Ram Sanatan Dharma College, DU","B.A. (Hons.) Economics"],
                          ["15","Aantorik Roy","XII D","Atma Ram Sanatan Dharma College, DU","B.A. (Hons.) Economics"],
                          ["16","Saumyaa Pandey","XII A","Sri Aurobindo College, DU","B.Sc (Chemistry+ Maths)"],
                          ["17","Aryan Rajput","XII D","Maharaja Agrasen College, DU","B. Com (Hons.)"],
                          ["18","Aarushi Goel","XII D","Acharya Narendra Dev College, DU","B.A. (Hons.) Economics"],
                          ["19","Kartik Bhardwaj","XII D","Acharya Narendra Dev College, DU","B. Com (Hons.)"],
                          ["20","Waniya Suri","XII E","Ramanujan College, DU","B. Com (Hons.)"],
                          ["21","Laksh Kumar","XII E","Ramanujan College, DU","B. Com (Hons.)"],
                          ["22","Dev Verma","XII E","Ramanujan College, DU","B.A. (Hons.) Economics"],
                          ["23","Agamjot Singh","XII E","Sri Guru Gobind Singh College Of Commerce, DU","B.A. (Hons.) Economics"],
                          ["24","Naman Khurana","XII F","Keshav Mahavidyalaya, DU","B.Sc Mathematical Sciences"],
                          ["25","Basundhara Jana","XII F","Kalindi College, DU","B.A. (Hons.) Political Science"],
                          ["26","Manvi","XII F","Kalindi College, DU","B.A. (Hons.) Journalism"],
                          ["27","Avneta Malhotra","XII C","Maitreyi College, DU","B.Sc Physics"],
                          ["28","Anisha Singh Chauhan","XII F","Mata Sundri College for Women, DU","B.A. (Hons.) Political Science"],
                          ["29","Laranya Vashisht","XII D","Janki Devi Memorial College, DU","B.A. (Hons.) Economics"],
                          ["30","Sudiksha Chopra","XII E","Shyama Prasad Mukherji College for Women, DU","B.A. (Hons.) Economics"],
                          ["31","Maryam","XII E","Bharati College, DU","B. Com Programme"],
                          ["32","Kanishka Singh","XII D","Zakir Husain Delhi College, DU","B.A. (Hons.) Economics"],
                          ["33","Mahima Kanojia","XII B","Zakir Husain Delhi College, DU","B.Sc Life Sciences"],
                          ["34","Saanvi Wadhawan","XII B","Zakir Husain Delhi College, DU","B.Sc Life Sciences"],
                          ["35","Suhani Bafna","XII E","Shaheed Bhagat Singh College, DU","B.A. (Hons.) Economics"],
                          ["36","Rajveer Arora","XII D","PGDAV, DU","B.Sc Computer Science"],
                          ["37","Anushka Narayan","XII F","Institute of Home Economics, DU","B.Sc Home Science (Pass)"],
                          ["38","Sahil Kumar Singh","XII E","Satyawati College, DU","BA (Economics + History)"],
                          ["39","Saksham Juyal","XII F","Shivaji College, DU","BA (Economics + History)"],
                          ["40","Mohua Chawdhary","XII F","Delhi College of Art","B.A. (Hons.) Fine Arts"],
                          ["41","Idhita Shekhar","XII A","Delhi Technological University (DTU)","B.A. (Hons.) Economics"],
                          ["42","Shreya Mishra","XII A","Dr. B.R. Ambedkar University Delhi","B.A. (Hons.) Economics"],
                          ["43","Jai Sikka","XII D","NMIMS Mumbai","B. Com (Hons.)"],
                          ["44","Ronit Komal","XII F","Masters' Union School of Business","B.A. (Hons.) Psychology and Marketing"],
                          ["45","Aparna Gopakumar","XII B","Ashoka University","Undergraduate BA/BSc Programme"],
                          ["46","Saima Dattagupta","XII F","GGSIPU","B.A. (Hons.) English"],
                          ["47","Vridhi Chawla","XII A","GGSIPU","BSc. Environmental Science"],
                          ["48","Prithu Narula","XII E","GGSIPU","Bachelor of computer application (BCA)"],
                          ["49","Aarav Sinha","XII D","Jagannath International Management School (JIMS)","B. Com (Hons.)"],
                          ["50","Kavya Datta","XII E","Jagannath International Management School (JIMS)","Bachelor of computer application (BCA)"],
                          ["51","Mishti Makhni","XII F","IGNOU","B.A. (Hons.) Political Science"],
                          ["52","Nandini Silelaan","XII F","IGNOU","B.A. (Hons.) Political Science"],
                          ["53","Aananya Tyagi","XII E","Christ University","B.A. (Hons.) Psychology and Economics"],
                          ["54","Soumya Aggarwal","XII E","Amity University","B.A. (Hons.) Psychology and Research"],
                          ["55","Saanvi Chawla","XII F","Amity University","B.A. (Hons.) Applied Psychology"],
                          ["56","Tanishka Mohan","XII F","Amity University","Integrated BA MA Clinical Psychology"],
                          ["57","Shubh","XII D","Amity University","B. Com (Hons.)"],
                          ["58","Aaradya Sahdev","XII E","Amity University","B. Com (Hons.)"],
                          ["59","Yash Kotnala","XII A","Sharda University","B.Sc Data Science and Analytics"],
                          ["60","Raghav Gupta","XII B","K. R. Mangalam University","Bachelor of computer application (BCA)"],
                          ["61","Kaustabh Singh","XII D","Manav Rachna University","BCA"],
                          ["62","Vivaan Gogia","XII F","O.P. Jindal Global University","B.A. (Hons.) Legal studies"],
                          ["63","Mukul Dev Bainsla","XII A","IFA-Institution For Aviators","Aviation"],
                          ["64","Aarya Kumar","XII D","SOL, DU","CMA"],
                          ["65","Love Yadav","XII D","SOL, DU","B. Com (Hons.)"],
                        ]}
                      />
                      <BatchTable heading="Law Colleges" colSpan={5}
                        headers={["S.NO.", "NAME", "CLASS", "COLLEGE/UNIVERSITY", "COURSE"]}
                        rows={[
                          ["1","Niharika Dodani","XII F","Rajiv Gandhi National University of Law (NLU)","B.A. LLB (Hons.)"],
                          ["2","Pratibha Dev","XII D","HPNLU Shimla","B.A. LLB (Hons.)"],
                          ["3","Akshat Wadwa","XII D","National Law University Odisha","BBA LLB (H)"],
                          ["4","Bakul Hanspal","XII F","ILC, Faculty of Law, DU","B.A. LLB (Hons.)"],
                          ["5","Aaliyah Kanojia","XII F","Symbiosis Law School","B.A. LLB (Hons.)"],
                          ["6","Katayani Sharma","XII F","Symbiosis Law School","BBA LLB (H)"],
                          ["7","Aadya Puri","XII E","Symbiosis Law School","BBA LLB (H)"],
                          ["8","Tanush Taneja","XII F","GGSIPU","B.A. LLB (Hons.)"],
                          ["9","Saloni Chawla","XII F","GGSIPU","B.A. LLB (Hons.)"],
                          ["10","Amay Varma","XII B","GGSIPU","B.A. LLB (Hons.)"],
                          ["11","Abhinav Balhara","XII E","GGSIPU","BBA LLB (H)"],
                          ["12","Ridhima Mishra","XII F","Maharaja Agrasen College","B.A. LLB (Hons.)"],
                          ["13","Tanvika sharma","XII D","OP Jindal Global University","B. Com LLB"],
                          ["14","Daksh Gujral","XII D","Mewar Institute of Management and Law","B.A. LLB (Hons.)"],
                          ["15","Aman","XII D","Agra University","B.A. LLB (Hons.)"],
                        ]}
                      />
                    </AccordionItem>

                    {/* ── 2022-23 Batch ── */}
                    <AccordionItem id="batch-2022-23" label="Students of 2022-23 Batch" openId={openId} setOpenId={setOpenId}>
                      <BatchTable heading="ENGINEERING COLLEGES" colSpan={5}
                        headers={["S.NO.", "NAME", "CLASS", "COLLEGE", "COURSE"]}
                        rows={[
                          ["1","Daksh Dadeech","XII A","IIT Kharagpur","Engineering"],
                          ["2","Aalekh Jorwal","XII A","IIT KANPUR","Engineering"],
                          ["3","Aditya Raj Singh","XII A","IIT Jammu","Engineering"],
                          ["4","Vinayak Zutshi","XII A","IIT Delhi","Engineering"],
                          ["5","Aaditya Biswas","XII C","IIT Jodhpur","Engineering"],
                          ["6","Aditya Srivastav","XII A","BITS PILANI","Engineering"],
                          ["7","Deepansh Saha","XII B","BITS PILANI","Engineering"],
                          ["8","Devansh Butan","XII C","BITS PILANI","Engineering"],
                          ["9","Samrat Chaturvedi","XII A","BITS PILANI","Engineering"],
                          ["10","Aryan Sharma","XII A","BITS PILANI","Engineering"],
                          ["11","Nakul Verma","XII C","IIIT-D","Engineering"],
                          ["12","Praveer Singh Chauhan","XII C","IIIT-D","Engineering"],
                          ["13","Harshit Dawra","XII C","IIIT-D","Engineering"],
                          ["14","Himaan Agarwal","XII A","Delhi Technological University (DTU)","Engineering"],
                          ["15","Mayank Choudhary","XII C","Delhi Technological University (DTU)","Engineering"],
                          ["16","Aditya Bibhas Sahu","XII C","Delhi Technological University (DTU)","Engineering"],
                          ["17","Md.Afnaan","XII A","Delhi Technological University (DTU)","Engineering"],
                          ["18","Mayank Choudhary","XII C","Delhi Technological University (DTU)","Engineering"],
                          ["19","Pratham Jain","XII C","Delhi Technological University (DTU)","Engineering"],
                          ["20","Ronit Kapoor","XII A","Netaji Subhas University of Technology (NSUT)","Engineering"],
                          ["21","Anushka","XII A","Netaji Subhas University of Technology (NSUT)","Engineering"],
                          ["22","Arul Jain","XII C","Netaji Subhas University of Technology (NSUT)","Engineering"],
                          ["23","Dhruv Rai","XII A","Netaji Subhas University of Technology (NSUT)","Engineering"],
                          ["24","Advay Makhija","XII C","Netaji Subhas University of Technology (NSUT)","Engineering"],
                          ["25","Shreyas Asatakr","XII A","Thapar Institute of Engineering and Technology","Engineering"],
                          ["26","Manan Sethi","XII C","Thapar Institute of Engineering and Technology","Engineering"],
                          ["27","Aryan Sharma","XII A","Thapar Institute of Engineering and Technology","Engineering"],
                          ["28","Karttikeya Sinha","XII C","Thapar Institute of Engineering and Technology","Engineering"],
                          ["29","Tanvi Sharma","XII C","Thapar Institute of Engineering and Technology","Engineering"],
                          ["30","Raghav Tyagi","XII A","VIT","Engineering"],
                          ["31","Tanisha Choudhuri","XII B","VIT","Engineering"],
                          ["32","Aruni Maitra","XII A","VIT","Engineering"],
                          ["33","Tanmay Negi","XII C","VIT","Engineering"],
                          ["34","Ayush Dagar","XII A","VIT","Engineering"],
                          ["35","Advay Anand","XII A","VIT","Engineering"],
                          ["36","Raghav Tyagi","XII A","VIT","Engineering"],
                          ["37","Parv Setia","XII C","GGSIPU","Engineering"],
                          ["38","Manan Sethi","XII C","GGSIPU","Engineering"],
                          ["39","Arnav Garg","XII C","GGSIPU","Engineering"],
                          ["40","Tanmay Negi","XII C","GGSIPU","Engineering"],
                          ["41","Lakshya Sharma","XII C","GGSIPU","Engineering"],
                          ["42","Shashwat Kumar","XII C","GGSIPU","Engineering"],
                          ["43","Pratham Setia","XII C","GGSIPU","Engineering"],
                          ["44","Bhavya Suneja","XII A","GGSIPU","Engineering"],
                          ["45","Ninaad Gambhir","XII A","Manipal University, Jaipur","Engineering"],
                          ["46","Uddipt Choudhary","XII A","Manipal Institute of Technology, Karnataka","Engineering"],
                          ["47","Arnav Garg","XII C","SRM University","Engineering"],
                          ["48","Ayush Pathak","XII C","SRM University","Engineering"],
                          ["49","Ojasw Kant","XII C","Lovely Professional University","Engineering"],
                          ["50","Disha singh","XII A","Graphic Era","Engineering"],
                          ["51","Adit Choudhary","XII A","Manav Rachna University","Engineering"],
                          ["52","Shlok Gupta","XII C","Samudra Institute of Marine Studies","Engineering"],
                          ["53","Vihaan Koul","XII C","Thadomal Shahani Engineering College (TSEC)","Engineering"],
                          ["54","Pranay Nautiyal","XII C","JIIT","Engineering"],
                        ]}
                      />
                      <BatchTable heading="FOREIGN UNIVERSITIES" colSpan={6}
                        headers={["S.NO.", "NAME", "CLASS", "UNIVERSITY", "COURSE", "COUNTRY"]}
                        rows={[
                          ["1","Arsh Gupta","XII C","Pennsylvania State University","B.E. Computer Science","USA"],
                          ["2","Vibhrav Jha","XII A","University of Wisconsin-Madison","Computer science and Economics (dual Major)","USA"],
                          ["3","Sanah Kochhar","XII I","Purdue University","Bachelors of Science in Psychology","USA"],
                          ["4","Badri Vinayak Mishra","XII B","University of California Los Angeles (UCLA)","Biology Major (Premed Track)","USA"],
                          ["5","Jia Wadhwa","XII B","University of Maryland, Baltimore County","Biology","USA"],
                          ["6","Dhairya Kakkar","XII A","Nanyang Technological University","Computer Science","Singapore"],
                          ["7","Manav Singh","XII B","Australian National University","Bachelor of Software Engineering","Australia"],
                          ["8","Soumadeep Mondal","XII A","University of Essex","BSc in Artificial Intelligence","UK"],
                          ["9","Sidharth Bhatt","XII C","Trent university","Bsc. Computer science","Canada"],
                          ["10","Vaibhav Baswala","XII C","University of Alberta, Canada","Bachelors of Science in Engineering","Canada"],
                          ["11","Gauransh Sharma","XII C","Air hawkes bay New Zealand","Commercial Pilot license","New Zealand"],
                        ]}
                      />
                      <BatchTable heading="MANAGEMENT COLLEGES" colSpan={5}
                        headers={["S.NO.", "NAME", "CLASS", "COLLEGE", "COURSE"]}
                        rows={[
                          ["1","Aryan Garg","XII E","Shaheed Sukhdev College of Business Studies, DU","BMS"],
                          ["2","Aarush goel","XII D","College of vocational studies, DU","BMS"],
                          ["3","Sagarika Singh","XII H","College of vocational studies, DU","Office management and secretarial practice"],
                          ["4","Yasar Hamiz Ahmed","XII D","College of vocational studies, DU","Marketing Management and Retail Business"],
                          ["5","Jatin Sanwaria","XII E","College of Vocational Studies, DU","BBA"],
                          ["6","Kritik Kasturi","XII D","NMIMS-Mumbai","BBA"],
                          ["7","Ananya khemani","XII E","NDIM","BBA"],
                          ["8","Khushi Sachdeva","XII D","GGSIPU","BMS"],
                          ["9","Daiwik Pamnani","XII F","GGSIPU","BBA"],
                          ["10","Archit khandelwal","XII D","GGSIPU","Bachelor of Business Studies"],
                          ["11","Shasmit Negi","XII I","GGSIPU","BBA"],
                          ["12","Arko Moitra","XII G","GGSIPU","BBA"],
                          ["13","Swastik","XII D","GGSIPU","BBA"],
                          ["14","Dhruv Dhoot","XII D","Symbiosis Centre For Management Studies, Noida","BBA"],
                          ["15","Vansh Walia","XII E","SICSR- Symbiosis Institute of Computer Studies and Research","BBA IT (Information Technology)"],
                          ["16","Shivangi Sud","XII I","Masters' Union","UG Program In Tech and Management"],
                          ["17","Ishita Srivastava","XII E","Ajeenkya DY Patil University, Pune","BBA"],
                          ["18","Riya Chernalia","XII E","MIT World Peace University","BBA (Dual)"],
                          ["19","Man Saini","XII G","Shardha University","BBA"],
                          ["20","Shreya bhatt","XII H","Noida International University","BBA"],
                          ["21","Charvi Negi","XII I","Amity university","BBA"],
                        ]}
                      />
                      <BatchTable heading="ARCHITECTURE AND DESIGN COLLEGES" colSpan={5}
                        headers={["S.NO.", "NAME", "CLASS", "COLLEGE", "COURSE"]}
                        rows={[
                          ["1","Himaan Agarwal","XII A","Delhi Technological University","Bachelor's in design"],
                          ["2","Aadrit Jaisingh","XII C","Jamia Millia Islamia","B.Arch"],
                          ["3","Kavya Bansal","XII G","Indian Institute of Art and Design","Interior Architecture and Design"],
                          ["4","Rohan Sachdeva","XII F","IILM University Gurugram","Interior Designing"],
                        ]}
                      />
                      <BatchTable heading="MEDICAL COLLEGE" colSpan={5}
                        headers={["S.NO.", "NAME", "CLASS", "COLLEGE", "COURSE"]}
                        rows={[
                          ["1","Soumya Tomar","XII B","National Capital Region Institute of Medical Sciences, Meerut","M.B.B.S."],
                        ]}
                      />
                    </AccordionItem>

                    {/* ── 2021-22 Batch — PDF ── */}
                    <AccordionItem id="batch-2021-22" label="Students of 2021-22 Batch" openId={openId} setOpenId={setOpenId}>
                      <PdfEmbed src="/documents/batch-2021-22.pdf" />
                    </AccordionItem>

                    {/* ── 2019-20 Batch — PDF ── */}
                    <AccordionItem id="batch-2019-20" label="Students of 2019-20 Batch" openId={openId} setOpenId={setOpenId}>
                      <PdfEmbed src="/documents/batch-2019-20.pdf" />
                    </AccordionItem>

                    {/* ── 2018-19 Batch — PDF ── */}
                    <AccordionItem id="batch-2018-19" label="Students of 2018-19 Batch" openId={openId} setOpenId={setOpenId}>
                      <PdfEmbed src="/documents/batch-2018-19.pdf" />
                    </AccordionItem>

                    {/* ── 2017-18 Batch — PDF ── */}
                    <AccordionItem id="batch-2017-18" label="Students of 2017-18 Batch" openId={openId} setOpenId={setOpenId}>
                      <PdfEmbed src="/documents/batch-2017-18.pdf" />
                    </AccordionItem>

                    {/* ── 2016-17 Batch ── */}
                    <AccordionItem id="batch-2016-17" label="Students of 2016-17 Batch" openId={openId} setOpenId={setOpenId}>
                      <BatchTable heading="ENGINEERING" colSpan={4}
                        headers={["S.NO.", "STUDENT'S NAME", "UNIVERSITY", "COUNTRY"]}
                        rows={[
                          ["1.","ANURAG HOLANI","IIT DELHI","INDIA"],
                          ["2.","AAGAM GUPTA","IIT DELHI","INDIA"],
                          ["3.","AAYUSH TOMAR","IIT ROORKEE","INDIA"],
                          ["4.","ABHISHEK AGGARWAL","DTU","INDIA"],
                          ["5.","RAGHAV SHARMA","DTU","INDIA"],
                          ["6.","NAKUL DODEJA","DTU","INDIA"],
                          ["7.","DEVYANI SINHA","DTU","INDIA"],
                          ["8.","PRATEEK PATHAK","DTU","INDIA"],
                          ["9.","SANAN AGGARWAL","NSIT","INDIA"],
                          ["10.","SUGAT KOKILOO","ISER PUNE","INDIA"],
                          ["11.","JAPMAN SINGH DHAM","GURU GOVIND SINGH UNIVERSITY","INDIA"],
                          ["12.","KAUSTUBH BAHAL","THAPAR COLLEGE","INDIA"],
                          ["13.","AAKASH NASKAR","THAPAR COLLEGE","INDIA"],
                          ["14.","SHEREY KAMRA","THAPAR COLLEGE","INDIA"],
                          ["15.","VISHESH VERMA","THAPAR COLLEGE","INDIA"],
                          ["16.","GURV BAJAJ","MANIPAL UNIVERSITY","INDIA"],
                          ["17.","PRAKHAR ROY","MANIPAL UNIVERSITY","INDIA"],
                          ["18.","SRIJAN KHURANA","MANIPAL UNIVERSITY","INDIA"],
                          ["19.","SOUMYO DEY","MAHARAJA AGRASEN COLLEGE","INDIA"],
                          ["20.","NAMAN RAGHUVANSHI","NSIT-DU","INDIA"],
                        ]}
                      />
                      <BatchTable heading="Medicine" colSpan={4}
                        headers={["S.NO.", "STUDENT'S NAME", "UNIVERSITY", "COUNTRY"]}
                        rows={[
                          ["1.","SHREYA CHOPRA","AIMS","INDIA"],
                          ["2.","MEGHNA KAUL","MYSORE MEDICAL COLLEGE","INDIA"],
                          ["3.","SWISHTI SHARMA","BHARTI VIDYA PEETH UNIVERSITY, PUNE","INDIA"],
                          ["4.","SHASHWAT VAISH","VIT (BIO-TECH)","INDIA"],
                        ]}
                      />
                      <BatchTable heading="LAW" colSpan={4}
                        headers={["S.NO.", "STUDENT'S NAME", "UNIVERSITY", "COUNTRY"]}
                        rows={[
                          ["1.","NISHTHA ARORA","NLU, ORISSA","INDIA"],
                          ["2.","ASMITA KAUR","IPU, DELHI","INDIA"],
                          ["3.","NITYA BANSAL","NLU, DELHI","INDIA"],
                          ["4.","SUBHA CHUGH","IPU, DELHI","INDIA"],
                          ["5.","AALIYA REHMAN","AMITY UNIVERSITY","INDIA"],
                          ["6.","ADITI TALANG","AMITY UNIVERSITY","INDIA"],
                          ["7.","MALVICA SATIJA","AMITY UNIVERSITY","INDIA"],
                          ["8.","SHIVANGI MALHOTRA","AMITY UNIVERSITY","INDIA"],
                          ["9.","SHIVAM GUPTA","AMITY UNIVERSITY","INDIA"],
                          ["10.","MADHUR PATHAK","AMITY UNIVERSITY","INDIA"],
                          ["11.","KRITI KATHPALIA","AMITY UNIVERSITY","INDIA"],
                        ]}
                      />
                      <BatchTable heading="ART &amp; DESIGN" colSpan={4}
                        headers={["S.NO.", "STUDENT'S NAME", "UNIVERSITY", "COUNTRY"]}
                        rows={[
                          ["1.","BDEBYANI KRISHNA","NIFT, KOLKATA","INDIA"],
                          ["2.","STUTI MONGA","NIFT, DELHI","INDIA"],
                        ]}
                      />
                      <BatchTable heading="BBA" colSpan={4}
                        headers={["S.NO.", "STUDENT'S NAME", "UNIVERSITY", "COUNTRY"]}
                        rows={[
                          ["1.","K. ARPITA","BHARTI VIDYA PEETH","INDIA"],
                          ["2.","MUKAAN WASON","AMITY UNIVERSITY","INDIA"],
                          ["3.","VEEDANT JAIN","JIMS DELHI","INDIA"],
                          ["4.","DEVANSH MITTAL","IPU","INDIA"],
                          ["5.","ATISHAYA KHANNA","JIMS","INDIA"],
                          ["6.","GURSIMAR SETHI","SYMBIOSYS, NOIDA","INDIA"],
                          ["7.","RADHIKA BAKSHI","SYMBIOSYS, NOIDA","INDIA"],
                          ["8.","ARJUN MALIK","SHIV NADAR UNIVERSITY","INDIA"],
                        ]}
                      />
                      <BatchTable heading="HOTEL MANAGEMENT" colSpan={4}
                        headers={["S.NO.", "STUDENT'S NAME", "UNIVERSITY", "COUNTRY"]}
                        rows={[
                          ["1.","PULKIT BHARTI","IHM, MEERUT","INDIA"],
                          ["2.","RAGHAV ARORA","IHM, AURANGABAD","INDIA"],
                          ["3.","JAYANTI THAKUR","IHM, MUMBAI","INDIA"],
                          ["4.","SHAYON MITRA","IHM, DELHI","INDIA"],
                          ["5.","VANI KUMAR",".","INDIA"],
                          ["6.","UJJWAL KHANNA",".","INDIA"],
                        ]}
                      />
                      <BatchTable heading="BSc. (HONS.)" colSpan={4}
                        headers={["S.NO.", "STUDENT'S NAME", "UNIVERSITY", "COUNTRY"]}
                        rows={[
                          ["1.","ADITTI AGGARWAL","VENKI COLLEGE, DU","INDIA"],
                          ["2.","SREYA DEY","ASHOKA UNIVERSITY, DU","INDIA"],
                          ["3.","TISHA SACHDEVA","LADY IRWIN COLLEGE, DU","INDIA"],
                        ]}
                      />
                      <BatchTable heading="BA (HONS.)" colSpan={4}
                        headers={["S.NO.", "STUDENT'S NAME", "UNIVERSITY", "COUNTRY"]}
                        rows={[
                          ["1.","SARTHAQ RAI ZADA","HANSRAJ, DU (ECO)","INDIA"],
                          ["2.","NANDINI MAHESHWARI","MAITREYI COLLEGE, DU (ECO)","INDIA"],
                          ["3.","URVI SIKR","MIRANDA HOUSE, DU (ECO)","INDIA"],
                          ["4.","ANISHA MAINI","JMC, DU","INDIA"],
                          ["5.","KRITIKA","SHYAMA PRASAD COLLEGE, DU","INDIA"],
                          ["6.","ARSHEYA MALHOTRA","KAMLA NEHRU, DU","INDIA"],
                          ["7.","AVANTIKA MOHAN","GARGI, DU","INDIA"],
                          ["8.","DEEPTI SINGH","KAMLA NEHRU, DU","INDIA"],
                          ["9.","GARAV BANERJEE","HANSRAJ, DU","INDIA"],
                          ["10.","MEHEK NARANG","JMC, DU","INDIA"],
                          ["11.","SANCHITA MAHENDRU","JMC, DU","INDIA"],
                          ["12.","TAMANNA TIWARI","RAMANUJAN COLLEGE, DU","INDIA"],
                          ["13.","VARNIKA MISHRA","GARGI, DU","INDIA"],
                          ["14.","JAHNOBI KHANNA","JMC, DU","INDIA"],
                        ]}
                      />
                    </AccordionItem>

                    {/* ── 2016 Batch — open by default ── */}
                    <AccordionItem id="batch-2016" label="Students of 2016 Batch" openId={openId} setOpenId={setOpenId} defaultOpen>
                      <BatchTable heading="ENGINEERING" colSpan={4}
                        headers={["S.NO.", "STUDENT'S NAME", "CURRENT INSTITUTION", "COURSE BEING PURSUED"]}
                        rows={[
                          ["1.","KIRTI NAGPAL","JGDTUW","B.Tech/IT"],
                          ["2.","KRITI GUPTA","Hongkong University Science & Technology","B.tech"],
                          ["3.","SRIJAN SRIVASTAVA","VIT VELLORE","B.Tech"],
                          ["4.","DHRUV GULIA","Northern India Engg. College","B.Tech (CS)"],
                          ["5.","ABHIMANYU BHARADE","IIT Kharagpur","B.Tech"],
                          ["6.","ABHIMANYU SINGH CHAUDHARY","IIIT Delhi","B.Tech"],
                          ["7.","HANIT BANGA","IIIT Delhi","B.Tech"],
                          ["8.","HARDIK SHARMA","VIT VELLORE","B.Tech"],
                          ["9.","MOHAK RASTOGI","DTU Delhi","B.Tech"],
                          ["10.","PALLAVI PANDU","VIT VELLORE","B.Tech"],
                          ["11.","ROHAN WADHAWAN","Netaji Subhas Institute of Technology","Comp. Sc."],
                          ["12.","SAMARTH BHAMBRI","University of Toronto","Comp. Sc."],
                          ["13.","VAIBHAV GOEL","IIIT Delhi","B.Tech"],
                        ]}
                      />
                      <BatchTable heading="MEDICAL" colSpan={4}
                        headers={["S.NO.", "STUDENT'S NAME", "CURRENT INSTITUTION", "COURSE BEING PURSUED"]}
                        rows={[
                          ["1.","RHEA RATAN","Maulana Azad College","MBBS"],
                        ]}
                      />
                      <BatchTable heading="FOREIGN UNIVERSITIES" colSpan={4}
                        headers={["S.NO.", "STUDENT'S NAME", "CURRENT INSTITUTION", "COURSE BEING PURSUED"]}
                        rows={[
                          ["1.","PALASH GUPTA","Georgia Institute of Technology (USA)","B.Tech"],
                          ["2.","ARHANT BATRA","University of California, Los Angeles, USA","Business Economics"],
                          ["3.","SNIGDHA BAWEJA","Florida Intl. University, Florida, USA","International Rel. Pol. Sc."],
                        ]}
                      />
                      <BatchTable heading="ADMINISTRATION" colSpan={4}
                        headers={["S.NO.", "STUDENT'S NAME", "CURRENT INSTITUTION", "COURSE BEING PURSUED"]}
                        rows={[
                          ["1.","SREYAN CHATTERJEE","IIM Indore","BBA"],
                          ["2.","DIVLEEN KAUR DHAM","Jims, Vasant Kunj","BBA"],
                          ["3.","KRITIKA MENDIRATTA","Symbiosis Noida","BBA"],
                          ["4.","YANNISH KHANNA","Symbiosis International University","BBA"],
                          ["5.","DRISHTI ARORA","Symbiosis International University, Puna","BBA"],
                          ["6.","DHRUBOJYOTI BARUA","J.M.S. Vasant Kunj, I.P. University","BBA"],
                          ["7.","SONAL SHARMA","Symbiosis Noida","BBA"],
                          ["8.","SHIVANSH MAHAJAN","NDIM, I.P. University","BBA"],
                          ["9.","TANUJ BHUTANI","Symbiosis Noida","BBA"],
                          ["10.","YASH ANAND","JIMS, I.P. University","BBA"],
                          ["11.","RIYA JAIN","MAHARAJA AGRASEN, I.P. University","BBA"],
                          ["12.","I.P. UNIVERSITY","BBA","BBA"],
                          ["13.","SHAURYA KHURANA","JIMS, I.P. University","BBA"],
                          ["14.","SHRESTHA AGARWAL","Maharaja Surajmal Institute, I.P. University","BBA"],
                          ["15.","YASHASA SABHARWAL","Symbiosis International University","BBA"],
                        ]}
                      />
                      <BatchTable heading="HOTEL MANAGEMENT" colSpan={4}
                        headers={["S.NO.", "STUDENT'S NAME", "CURRENT INSTITUTION", "COURSE BEING PURSUED"]}
                        rows={[
                          ["1.","YASHIKA SHARMA","Oberoi's","Kitchen OP"],
                          ["1.","DUSHYANT RAKHEJA","IHM Pusa","B.Sc (HMA)"],
                        ]}
                      />
                    </AccordionItem>

                  </div>
                </div>
              </div>
            </div>

            {/* ── Sidebar — 4 columns ── */}
            <div className="col-12 col-lg-4">
              <SidebarLinks {...sidebarData} />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
