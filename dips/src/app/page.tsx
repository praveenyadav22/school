import type { Metadata } from "next";
import Banner from "@/components/Banner";
import AboutSchool from "@/utils/AboutSchool";
import LatestUpdates from "@/utils/LatestUpdates";
import FacilitiesAccordion from "@/utils/FacilitiesAccordion";
import ImportantLinks from "@/utils/ImportantLinks";
import SchoolInfoSlider from "@/utils/SchoolInfoSlider";
import AboutSchoolLinks from "@/utils/AboutSchoolLinks";
import BulletinBoard from "@/utils/BulletinBoard";
import AdmissionEnquiry from "@/utils/AdmissionEnquiry";

export const metadata: Metadata = {
  title: "De Indian Public School, Rohini Sector-24 | Top CBSE School in Delhi",
};

export default function Home() {
  return (
    <>
      <Banner />
      <div>
        <div className="clearfix" />
        <div className="bodyContent homebody">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <AboutSchool />
                <div className="eventsWrap">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <LatestUpdates />
                      </div>
                      <div className="col-md-6">
                        <FacilitiesAccordion />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clearfix" />
                <ImportantLinks />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="clearfix" />
        <div className="bodyContent homebody">
          <div className="facilitiesContainer">
            <div className="facilitieswrapbgwrap" />
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="facilitiesSliderwrap">
                    <div className="sectionHead">
                      <h2 className="colorwhite">School Information</h2>
                    </div>
                    <SchoolInfoSlider />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix" />
          <AboutSchoolLinks />
          <BulletinBoard />
        </div>
      </div>

      <section style={{ backgroundColor: "#e8e6e6" }}>
        <div className="container">
          <AdmissionEnquiry />
        </div>
      </section>
    </>
  );
}
