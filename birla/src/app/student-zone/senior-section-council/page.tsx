import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Senior Section Council — Birla Vidya Niketan",
};

export default function SeniorSectionCouncilPage() {
  return (
    <div className="body-conent ptb-50">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="inner-content">
              <div className="contentArea">

                {/* Intro paragraph */}
                <p className="mb-4">
                  The student&apos;s Council has the responsibility of maintaining school discipline. An office bearer needs to show academic brilliance, sense of responsibility, leadership qualities, initiative, personal sense of discipline, exemplary code of conduct and high moral character.
                </p>

                <div className="contentsection with_table">

                  {/* ── Table 1: Student Council 2025-26 ── */}
                  <div className="table-responsive">
                    <table className="table headerBg">
                      <thead>
                        <tr>
                          <th colSpan={4}>Student Council : 2025-26</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><strong>President</strong>:<br /> Rohan Rathee-XII C</td>
                          <td><strong>Head Girl</strong>:<br /> Prajna Singh-XII F</td>
                          <td><strong>Head Boy</strong>:<br /> Ashar Khan-XII C</td>
                          <td><strong>Secretary</strong>:<br /> Tisya Bindal-XII A</td>
                        </tr>
                        <tr>
                          <td><strong>Vice President</strong>:<br /> Anika Chaturvedi-XI G</td>
                          <td><strong>Deputy Head Girl</strong>:<br /> Devina Kukreja-XI E</td>
                          <td><strong>Deputy Head Boy</strong>:<br /> Ayush Goyal-XI B</td>
                          <td><strong>Deputy Secretary</strong>:<br /> Sangamithran Senthil Rajan-XI E</td>
                        </tr>
                        <tr>
                          <td><strong>Sports Captain (G)</strong>:<br /> Bhuvi-XI D</td>
                          <td><strong>Sports Captain (B)</strong>:<br /> -</td>
                          <td><strong>Cultural President</strong>:<br /> Hassaan Javed Mir-XI G</td>
                          <td>&nbsp;</td>
                        </tr>
                        <tr>
                          <td><strong>Secretary General MUN</strong>:<br /> Aditya Sivam Pillai-XI E</td>
                          <td><strong>Secretary General Climate Action</strong>:<br /> Karma Thinly Singh-XI B</td>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* ── Table 2: House Leaders ── */}
                  {/* Browser inline styles moved to house-header--* CSS classes in _seniorsectioncouncil.scss */}
                  <div className="table-responsive">
                    <table className="table headerBg">
                      <thead>
                        <tr>
                          <th colSpan={7}>House Leaders</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>&nbsp;</td>
                          {/* Browser: style="background-color:#ff0000; color:#000" */}
                          <td className="house-header house-header--annapurna text-center">Annapurna</td>
                          {/* Browser: style="background-color:#92d050; color:#000" */}
                          <td className="house-header house-header--aravali text-center">Aravali</td>
                          {/* Browser: style="background-color:#8db3e2; color:#000" */}
                          <td className="house-header house-header--dhaulagiri text-center">Dhaulagiri</td>
                          {/* Browser: style="background-color:#ffff00; color:#000" */}
                          <td className="house-header house-header--kailash text-center">Kailash</td>
                          {/* Browser: style="background-color:#7030a0; color:#fff" */}
                          <td className="house-header house-header--nilgiri text-center">Nilgiri</td>
                          {/* Browser: style="background-color:#ff3300; color:#000" */}
                          <td className="house-header house-header--vindhya text-center">Vindhya</td>
                        </tr>
                        <tr>
                          <td><strong>Captain</strong></td>
                          <td>Aadya Sharma<br /> XI A</td>
                          <td>Utkarsh Singh<br /> XI B</td>
                          <td>Reyansh Singh<br /> XI A</td>
                          <td>Adya Kapoor<br /> XI D</td>
                          <td>Taria Goel<br /> XI C</td>
                          <td>Sashwati Mohanty<br /> XI C</td>
                        </tr>
                        <tr>
                          <td><strong>Vice Captain</strong></td>
                          <td>Zikra Kamal<br /> XI C</td>
                          <td>Vaidehi Kalia<br /> XI B</td>
                          <td>Manan Chhabra<br /> XI C</td>
                          <td>Raghav Aswani<br /> XI C</td>
                          <td>Tanaksha Hazarika<br /> XI B</td>
                          <td>Pritika Gandhi<br /> XI C</td>
                        </tr>
                        <tr>
                          <td><strong>Sports Captain</strong></td>
                          <td>Ankit Pal<br /> XI B</td>
                          <td>Akshath Bhandari<br /> XI A</td>
                          <td>Paavani Sehda<br /> XI B</td>
                          <td>Hritvi Arora<br /> XI D</td>
                          <td>Anushka Sethi<br /> XI C</td>
                          <td>Shruti Kumari<br /> XI D</td>
                        </tr>
                        <tr>
                          <td><strong>Prefect 1</strong></td>
                          <td>Reyaansh Singh Rawat<br /> VIII B</td>
                          <td>Aarohi Kapil Arya<br /> VIII B</td>
                          <td>Dhwani Bhakri<br /> VIII F</td>
                          <td>Anvee Malhotra<br /> VIII B</td>
                          <td>Advaita Sharma<br /> VIII G</td>
                          <td>Ritisha Sharma<br /> VIII A</td>
                        </tr>
                        <tr>
                          <td><strong>Prefect 2</strong></td>
                          <td>Arunima Mishra<br /> VIII E</td>
                          <td>Divisha Kumar<br /> VIII C</td>
                          <td>Prabhjas S.Chowdhury-VIII B</td>
                          <td>Kairavi Verma<br /> VIII A</td>
                          <td>Daneen Gulzar<br /> VIII E</td>
                          <td>Pragyan Mishra<br /> VIII E</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* ── Table 3: Committees ── */}
                  <div className="table-responsive">
                    <table className="table headerBg">
                      <thead>
                        <tr>
                          <th colSpan={4}>Committees</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><strong>Road Safety and Self Defence :</strong></td>
                          <td><strong>Art &amp; Craft:</strong></td>
                          <td><strong>Dance</strong>:</td>
                          <td><strong>Indian Music</strong>:</td>
                        </tr>
                        <tr>
                          <td><strong>President</strong>: Amogh Shrivastava-XII A</td>
                          <td><strong>President</strong>: Tulip Gupta-XII F</td>
                          <td><strong>President</strong>: Dakshta Sood-XII F</td>
                          <td><strong>President:</strong> Srijon Mazumdar-XII C</td>
                        </tr>
                        <tr>
                          <td><strong>Western Music</strong>:</td>
                          <td><strong>Environment &amp; Herbal Heritage</strong>:</td>
                          <td><strong>Home Science</strong>:</td>
                          <td><strong>Mental Health:</strong></td>
                        </tr>
                        <tr>
                          <td><strong>President</strong>: Atulya-XII D</td>
                          <td><strong>President</strong>: Ritvika Ranjan-XII B</td>
                          <td><strong>President</strong>: Kriti Gaba-XII F</td>
                          <td><strong>President:</strong> Saina Basist</td>
                        </tr>
                        <tr>
                          <td><strong>Debating &amp; Public Speaking (English):</strong></td>
                          <td><strong>Debating &amp; Public Speaking (Hindi)</strong>:</td>
                          <td><strong>Theatre</strong>:</td>
                          <td><strong>Quizzing:</strong></td>
                        </tr>
                        <tr>
                          <td><strong>President</strong>: Vaishnavi Magotra-XII C</td>
                          <td><strong>President</strong>: Anvesha Arora-XII C</td>
                          <td><strong>President</strong>: Prithisha Mohapatra-XII E</td>
                          <td><strong>President</strong>: Muskaan Sharma-XII F</td>
                        </tr>
                        <tr>
                          <td><strong>Science &amp; Innovation:</strong></td>
                          <td><strong>Code Tech</strong>:</td>
                          <td><strong>ATAL Lab</strong>:</td>
                          <td><strong>Health &amp; Wellness:</strong></td>
                        </tr>
                        <tr>
                          <td><strong>President</strong>: Vihaan Jain-XII B</td>
                          <td><strong>President</strong>: Lakshya Aplash-XII C</td>
                          <td><strong>President</strong>: Harshil Jindal-X B</td>
                          <td><strong>President</strong>: Tanmay Sharma-XII B</td>
                        </tr>
                        <tr>
                          <td><strong>Literature :</strong></td>
                          <td><strong>Maths</strong>:</td>
                          <td><strong>Social Science</strong>:</td>
                          <td><strong>Social Outreach</strong></td>
                        </tr>
                        <tr>
                          <td><strong>President</strong>: Aaratrika Bhowmik-XII C</td>
                          <td><strong>President</strong>: Darsh Sood-XII D</td>
                          <td><strong>President</strong>: Ananya Bhattatiripad-XII F</td>
                          <td>Namya Kasturi-XII E</td>
                        </tr>
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
