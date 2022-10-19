import React from "react";
const donatebooks = require("../Assets/Images/BookDonation.jpeg");
function Donate() {
  return <div style={{display:'grid',placeItems:'center',width:'100vw',height:'auto',padding:'20px'}}>
        <img src={donatebooks} width="35%" alt='donate books'/>
  </div>;
}

export default Donate;
