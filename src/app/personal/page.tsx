"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Header from "../header/header";
import Footer from "../footer/footer";
import Category from "../homePage/category";
import SidebarMenu from "./SidebarMenu";
import ProfileForm from "./ProfileForm";
import ChatApp from "./messages"; 
import Notifications from "./Notifications"; 
import MyListings from "./MyListings";
import AddNewListing from "./AddNewListing";
import SwapOffers from "./SwapOffers";
import ProfileSettings from "./ProfileSettings";
import HelpCenter from "./HelpCenter";

export default function PreviewPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const [activeTab, setActiveTab] = useState("Personal Information");

  return (
    <div>
      <Header />
      <Category />

      <div className="flex w-[1300px] mx-auto py-[50px] gap-10">
        <SidebarMenu active={activeTab} onSelect={setActiveTab} />

        <div className="flex-1">
          {activeTab === "Personal Information" && <ProfileForm />}
          {activeTab === "Messages" && <ChatApp />}
          {activeTab === "Notifications" && <Notifications />}
          {activeTab === "My Listings" && <MyListings />}
          {activeTab === "Add New Listing" && <AddNewListing />}
          {activeTab === "Swap Offers" && <SwapOffers />}
          {activeTab === "Profile Settings" && <ProfileSettings />}
          {activeTab === "Help Center" && <HelpCenter />}
          {activeTab !== "Personal Information" && 
            activeTab !== "Messages" &&
            activeTab !== "Notifications" &&
            activeTab !== "My Listings" &&
            activeTab !== "Add New Listing" &&
            activeTab !== "Swap Offers" &&
            activeTab !== "Profile Settings" &&
            activeTab !== "Help Center" && (
              <div className="p-10 text-[24px] text-gray-500">
                {activeTab} — Coming soon...
              </div>
            )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
