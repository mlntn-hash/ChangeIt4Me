"use client";
import { useSearchParams } from "next/navigation";
import Header from "../header/header";
import Footer from "../footer/footer";
import Category from "../homePage/category";
import SidebarMenu from "./SidebarMenu";
import ProfileForm from "./ProfileForm";

export default function PreviewPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  return (
    <div>
      <Header />
      <Category />

      <div className="flex w-[1300px] mx-auto py-[50px] gap-10">
        <SidebarMenu active="Personal Information" />
        <ProfileForm />
      </div>

      <Footer />
    </div>
  );
}