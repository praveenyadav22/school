import type { Metadata } from "next";
import SidebarLinks, { SidebarLinksProps } from "@/utils/SidebarLinks";

export const metadata: Metadata = {
  title: "Rules & Regulations — Birla Vidya Niketan",
};

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
          isExternal: true,
        },
        {
          label: "Syllabus",
          href: "https://erp.quickcampus.online/auth",
          isExternal: true,
        },
      ],
    },
    {
      label: "Admission",
      href: "/admission",
    },
  ],
};

export default function RulesRegulationsPage() {
  return (
    <div className="body-conent ptb-50">
      <div className="container">
        <div className="row">

          {/* ── Main Content ── */}
          <div className="col-12 col-lg-8">
            <div className="inner-content">
              <div className="contentArea">

                <h4 className="contentArea__title mb-3">
                  The code of Conduct, as envisaged below is the summary of what every student Birla Vidya Niketan is expected to follow:-
                </h4>

                <ul className="checklist">
                  <li className="checklist__item">
                    Punctuality and regularity in attendance is essential.
                  </li>

                  <li className="checklist__item">
                    Students who come to school late or have been absent the previous day must bring a letter of explanation without fail. In case of illness a Medical Certificate should be sent.
                  </li>

                  <li className="checklist__item">
                    Students are strictly forbidden to leave the school premises during regular school hours.
                  </li>

                  <li className="checklist__item">
                    Students may be required to take part in various school activities and when required to do so, participation will be deemed compulsory.
                  </li>

                  <li className="checklist__item">
                    Students must come to school in neatly laundered uniform and polished shoes. Hair should be trimmed and nails must be cut regularly. Trinkets, jewellery should not be worn to school.
                  </li>

                  <li className="checklist__item">
                    Pupils are forbidden to carry objectionable literature or expensive items to school. The school does not take responsibility of lost articles, money etc.
                  </li>

                  <li className="checklist__item">
                    Respect for school property and school belongings is an absolute must. Any intentional damage to any school property is a severe violation of the code of conduct and makes the student liable for replacement of the damaged piece.
                  </li>

                  <li className="checklist__item">
                    Students are not allowed to leave the class without the permissions of the teacher. While moving in between the classes in the corridors, students should move in such a way that no class is disturbed. Student should be orderly and quiet and not hurt while ascending or descending the staircase.
                  </li>

                  <li className="checklist__item">
                    A vigilant outlook should be maintained towards keeping the surroundings clean. Any waste paper should be picked up and thrown into the dustbin. All safety norms must be followed while travelling in the school bus.
                  </li>

                  <li className="checklist__item">
                    Students are not allowed to receive private tuition from the teachers of the school.
                  </li>

                  <li className="checklist__item">
                    Students are required to attend the assembly and are expected to join in singing of devotional and patriotic songs.
                  </li>

                  <li className="checklist__item">
                    Carrying cell phones, i-pod, walkman, calculators or any other gadget to the school is strictly prohibited. If a student is found to posses any electronic gadget it will be confiscated.
                  </li>

                  <li className="checklist__item">
                    Bursting of crackers and playing with colors will lead to expulsion from the school.
                  </li>

                  <li className="checklist__item">
                    It is compulsory for all the students to converse in English as the CBSE syllabus stresses on student's competence to speak confidently and naturally in English. He must ensure that his speech is courteous and polite. No student should participate in any kind of rumour spreading and should refrain from speaking ill about others.
                  </li>

                  <li className="checklist__item">
                    Buying eatables from street vendors is strictly forbidden.
                  </li>

                  <li className="checklist__item">
                    No child is allowed to bring gifts of any kind for distribution in school.
                  </li>

                  <li className="checklist__item">
                    Irregular attendance, habitual idleness, neglect of homework, disobedience and disrespect towards members of staff or bad moral influence justify dismissal of a student.
                  </li>
                </ul>

              </div>
            </div>
          </div>

          {/* ── Sidebar ── */}
          <div className="col-12 col-lg-4">
            <SidebarLinks {...sidebarData} />
          </div>

        </div>
      </div>
    </div>
  );
}