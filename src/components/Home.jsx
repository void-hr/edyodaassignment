import "../App.css";
import LeftSection from "./homeSection/LeftSection";
import RightSection from "./homeSection/RightSection";

export default function Home() {
  return (
    <div className="home">

        <div className="home_content">
    <LeftSection />
    <RightSection />

   </div>
   </div>
  )
}


 