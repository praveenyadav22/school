import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import SidebarLinks from "@/utils/SidebarLinks";
import { BEYOND_SIDEBAR } from "@/utils/sidebarData";

export const metadata: Metadata = { title: "Phad se Padh Initiative" };

export default function PhadSePadhPage() {
  return (
    <InnerPage
      title="Phad se Padh Initiative"
      sidebar={<SidebarLinks heading="Beyond Classroom" links={BEYOND_SIDEBAR} />}
    >
      <div className="normalContent">
        <h2>About the Initiative</h2>
        <p>The Phad se Padh Initiative is Modern Public School&apos;s unique community reading program that connects students with the rich tradition of Indian storytelling while cultivating a deep love for reading.</p>
        <p>Inspired by the Phad painting tradition of Rajasthan — an ancient form of narrative scroll art used to tell epic stories — this initiative harnesses the power of visual storytelling to make reading more engaging, accessible, and culturally rooted.</p>
        <h2>Key Activities</h2>
        <p>Story-reading sessions using Phad-inspired illustrated scrolls that bring Indian folk tales, epics, and modern stories to life. Student-created story scrolls displayed in school corridors, classrooms, and community spaces. Community reading drives in partnership with local libraries and community centres. Inter-class storytelling competitions that celebrate creativity and expression.</p>
        <h2>Impact</h2>
        <p>The initiative has significantly improved reading habits among students and sparked a deeper interest in Indian art forms, cultural heritage, and diverse literary traditions. Students have gained confidence in public speaking, storytelling, and creative writing through their participation in this program.</p>
        <p>Most importantly, Phad se Padh has reminded our students that stories — however they are told — have the power to inspire, educate, and connect us all.</p>
      </div>
    </InnerPage>
  );
}
