import { Navbar } from "@/components/layout/Navbar";
import { BeginningSection } from "@/components/sections/BeginningSection";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { DocumentarySection } from "@/components/sections/DocumentarySection";
import { DirectorySearchSection } from "@/components/sections/DirectorySearchSection";
import { FinalSection } from "@/components/sections/FinalSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MessageWallSection } from "@/components/sections/MessageWallSection";
import { MissSection } from "@/components/sections/MissSection";
import { PeopleSection } from "@/components/sections/PeopleSection";
import { StatisticsSection } from "@/components/sections/StatisticsSection";
import { TravelSection } from "@/components/sections/TravelSection";
import { ROOT_SCROLL_ID } from "@/lib/constants";

export default function Page() {
  return (
    <div id={ROOT_SCROLL_ID} className="h-screen overflow-x-hidden overflow-y-auto bg-base text-white">
      <HeroSection />
      <Navbar />
      <BeginningSection />
      <PeopleSection />
      <DirectorySearchSection />
      <TravelSection />
      <MissSection />
      <StatisticsSection />
      <MessageWallSection />
      <AwardsSection />
      <DocumentarySection />
      <FinalSection />
    </div>
  );
}
