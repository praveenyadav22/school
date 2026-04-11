import Banner from "@/components/Banner";
import ImportantLinks from "@/utils/ImportantLinks";
import LatestNews from "@/utils/LatestNews";
import Circulars from "@/utils/Circulars";
import HomeGallery from "@/utils/HomeGallery";


export default function Home() {
  return (
    <>
      <Banner />
      <ImportantLinks />
      <LatestNews />
      <Circulars />
      <HomeGallery />
    </>
  );
}
