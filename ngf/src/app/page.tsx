import type { Metadata } from "next";
import Banner             from "@/components/Banner";
import EduCourses         from "@/utils/EduCourses";
import ProfileSection     from "@/utils/ProfileSection";
import CounterSection     from "@/utils/CounterSection";
import UpcomingEvents     from "@/utils/UpcomingEvents";
import EduTeam            from "@/utils/EduTeam";
import HomeGallerySection from "@/utils/HomeGallerySection";
import HomeMap            from "@/utils/HomeMap";
import HomeModal          from "@/utils/HomeModal";

export const metadata: Metadata = {
  title: "New Green Field School, Alaknanda – Top CBSE School in South Delhi",
};

export default function Home() {
  return (
    <>
      {/* Popup modal on load — image only, closes on backdrop click or × */}
      <HomeModal />

      {/* ── Hero carousel ─────────────────────────────────── */}
      <Banner />

      {/* ── Feature cards (overlaps banner bottom with -100px margin-top) */}
      <EduCourses />

      {/* ── Founder Vision & Mission + Principal's Desk ───── */}
      <ProfileSection />

      {/* ── Stats counter + YouTube tour ──────────────────── */}
      <CounterSection />

      {/* ── News ticker + about card ──────────────────────── */}
      <UpcomingEvents />

      {/* ── Laurels / awards gallery ──────────────────────── */}
      <EduTeam />

      {/* ── Photo gallery grid ────────────────────────────── */}
      <HomeGallerySection />

      {/* ── Google Maps embed ─────────────────────────────── */}
      <HomeMap />
    </>
  );
}
