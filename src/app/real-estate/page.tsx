import Header from "../header/header";
import Footer from "../footer/footer";
import Category from "../homePage/category";
import Newsletter from "../homePage/email";
import FilterSections from "../component/filterRealEstate"

export default function category() {
  return (
     <div className="relative  flex flex-col  ">
           <Header />
           <Category />
           <FilterSections/>
           <Newsletter/>
            <Footer />

    </div>

  )}
