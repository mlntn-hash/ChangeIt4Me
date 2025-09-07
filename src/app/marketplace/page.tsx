import Header from "../header/header";
import Footer from "../footer/footer";
import Category from "../homePage/category";
import Newsletter from "../homePage/email";


export default function category() {
  return (
     <div className="relative  flex flex-col  ">
           <Header />
           <Category />
           
           <Newsletter/>


            <Footer />

    </div>

  )}
