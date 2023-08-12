import "../../App.css";
import clockfill from "../../assets/clockfill.svg";
import Radiobuttonchecked from "../../assets/Radiobuttonchecked.svg";
import Radiobutton from "../../assets/Radiobutton.png";
import Razorpay from "../../assets/Razorpay.png";

import { useState } from "react";
const plans = [
    { id: 1, ptype: "annualy",name: '12 Months Subscription', total: 99, pmonth: 8,discount: 18500-99 },
    { id: 2, ptype: "annualy",name: '12 Months Subscription', total: 179, pmonth: 15, discount: 18500-179 },
    { id: 3, ptype: "halfyearly",name: '6 Months Subscription', total: 149, pmonth: 25,discount:18500-149 },
    { id: 4, ptype: "quaterly",name: '3 Months Subscription', total: 99, pmonth: 33, discount:18500-99},

  ];
export default function RightSection() {
    const [subscription, setSubscription] = useState(plans[1]);
    const [ discountAmount,  setDiscountAmount] = useState(plans[1].discount);
    const [total, setTotal] = useState(Math.floor((plans[1].total) + (plans[1].total)*(18/100)));
    
    const handleClick = (id) => {
      setSubscription(plans[id-1]);
      console
      const gstincluded = Math.floor((plans[id-1].total) + (plans[id-1].total)*(18/100)) 
      setDiscountAmount(plans[id-1].discount);
      setTotal(gstincluded);
    }
  return (
    <div className="home_right">

      <div className="subscribe">
        <div className="signup"><span className="circle"> 1</span>
           <p> SignUp   </p> </div>
            <div className="signup"><span className="circle">2</span>
          <p> Subscribe</p>   </div>
        </div>
        <span className="subcription_header">Select your subscription plan</span>
        { plans.map(plan =>

         ( <div className ="text_container"key={plan.id}>
            { plan.id ===1 ? (
              
              <div className="text_field_disabled" >
          <div className="banner_disabled"> Offer Expired</div>
          <span className="left_text">
      <input type="radio" checked readOnly/> 
          <p> {plan.name}</p>
           </span>
        <span className="right_text"> 
        <p>Total ₹{plan.total}</p> <p>₹ {plan.pmonth}/mo</p> 
        </span>
        </div> 

            ): (
              plan.id === 2 ? 
              <div className={`text_field enabled ${ subscription.id === plan.id ?"recommended" : "enabled" }`}  onClick={()=> handleClick(plan.id)}>
              <div className="banner_enabled recommended"> Recommended</div>
              <span className="left_text">
              <img src={`${ subscription.id === plan.id ? Radiobuttonchecked : Radiobutton}`}/>
              <p> {plan.name}</p>
              </span>
              <span className="right_text"> 
              <p>Total  ₹{plan.total}</p> <p>₹ {plan.pmonth}/mo</p>
              </span>
               </div> : 
            
              <div className={`text_field enabled ${ subscription.id === plan.id ?"recommended" : "enabled" }`} onClick={()=> handleClick(plan.id)} >
              <span className="left_text">
              <img src={`${ subscription.id === plan.id ? Radiobuttonchecked : Radiobutton}`}/>
              <p> {plan.name} </p> 
              </span>
            <span className="right_text">
                 <p>Total ₹{plan.total}</p> <p>₹ {plan.pmonth}/mo</p> 
                 </span>
            </div>
            )
            }

        
        </div>) 
        
        )}
    
             

    <div className="subcription_fee">
            <span className="subcription_text">
                <span className="sub_left"> Subcription fee </span>
                <span className="sub_right">₹18,500</span>
                </span>
                <div className="limited_offer">
                    <div className="alert_header"> 
                    <span className="alert_left">Limited time offer</span>
                    <span className="alert_right">- ₹{discountAmount}</span>
                    </div>

                    <div className="offer_validity">
                        <img src={clockfill }/>
                        <p>Offer valid till 25th March 2023 </p>
                    </div>
                </div>
                <div className="total_text">
                    <span className="total_left"><b>Total</b> (Incl. of 18% GST)</span>
                    <span className="total_right">₹{total}</span>

                </div>
                </div> 
                <div className="button_group">
                    <button className="secondary_button">Cancel</button>
                    <button className="primary_button">Proceed to Pay</button>

                </div>
                <div className="logo">      
                <img src={Razorpay} alt="" />
                  </div>                
 </div>
  )
}

 