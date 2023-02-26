import HomeView from "./views/homeView";
import PerLogin from "@/components/layout/perlogin";
import AboutUsView from "@/components/aboutUs/aboutUsView";
import FloorPlanView from "@/components/floorPlan/floorPlanView";
import AmenitiesView from "@/components/amenities/amenitiesView";
import GalleryView from "@/components/gallery/gallery";
import ContactView from "@/components/contact/contactView";
import FooterView from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <PerLogin>
        <HomeView />
        <AboutUsView />
        <FloorPlanView />
        <AmenitiesView />
        <GalleryView />
        <ContactView />
        <FooterView />
      </PerLogin>
    </>
  );
}
