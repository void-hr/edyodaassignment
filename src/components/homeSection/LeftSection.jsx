import "../../App.css";
import group19 from "../../assets/Group19.svg";
import group17 from "../../assets/Group17.svg";
import group20 from "../../assets/Group20.svg";
import circleads from "../../assets/circleads.png"
import ads from "../../assets/ADS.png"
import rectangle from "../../assets/Rectangle.png"
import vector from "../../assets/Vector.svg";
import live from "../../assets/live.png"

export default function LeftSection() {
  return (
    <div className="home_left">
    <div className="heading">
    Access curated courses worth 
    <div className="cut"></div>
    <div className="heading_style">
         <span className="amount"> ₹ 18,500 </span> 
         at just <p className="custom_text_heading"> ₹ 99 </p>
         per year! </div>
    </div>
      
    <div className="pointer">
         <span>    
            <img src={group20} alt="" /> 
            <p className="points" > 
            <p className="custom_text">100+</p> 
            Job relevant courses </p> 
            </span>
         <span>  
             <img src={group19} alt="" /> 
               <p className="points" >
                <p className="custom_text"> 20,000+ </p>
                 Hours of content </p> 
                  </span>
                  <span>   
                     <img src={vector} className="vector" /> <img src={live} className="live" /> 
                     <p className="points" > 
                     <p className="custom_text">Exclusive</p> webinar access</p> </span>
                  <span>   
                    <img src={group17} alt="" /> <p className="points" >  Scholarship worth    
                    <p className="custom_text">  ₹94,500 </p> </p></span>
                  <span>   
                    <img src={circleads} className="circleads"/> 
                    <img src={ads} className="ads" /><img src={rectangle} className="rectangleads" />
                     <p className="points" ><p className="custom_text">      Ad Free </p> learning experience </p>
                      </span>
    </div>
    </div>
  )
}
