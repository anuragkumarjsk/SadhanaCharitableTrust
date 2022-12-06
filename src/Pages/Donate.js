import React from "react";
const donatebooks = require("../Assets/Images/BookDonation.jpeg");
const bankdetails = require('../Assets/Images/BankDetails.jpeg')
function Donate() {
  return <div style={{width:'100vw',minHeight:'100vh', height:'auto',padding:'20px'}}>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly',alignItems:'flex-start'}}>
        <div style={{width:'40%'}} >
           <img src={bankdetails} width="100%" alt='donate to' style={{border:'10px solid black'}} />
           <h2 style={{marginTop:'20px'}}>Please feel free to donate to the above mentioned account details</h2>
           <h2 style={{marginTop:'20px'}}>We also accept books for our library, new or old, notebooks, story books, any useful stationery,furniture etc.</h2>
           <h2 style={{marginTop:'20px'}}>We conduct science exhibitions, literary contests, health awareness programs and medical camps in our school premises. We consider it our personal responsibility to make sure that the donation recieved is wisely used in the welfare of the common people.</h2>
        </div>  
           <img src={donatebooks} width="35%" alt='donate books' style={{border:'5px solid black'}} />
        </div>
  </div>;
}

export default Donate;
