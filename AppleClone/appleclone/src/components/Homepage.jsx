import React from 'react'
import './Homepage.css'
import {FaApple,FaSearch, FaShoppingBag} from 'react-icons/fa'
import hp1 from './hp1.png'
import hp2 from './hp2.png'
import hp3 from './hp3.png'
import hp4 from './hp4.png'
import hp5 from './hp5.png'
import image4 from './image4.png'


const Homepage = () => {
    return (
      <div id='Apple-Screen'>
        
       
        <navbar id='navbar'> 
        <FaApple style={{FaApple,fontSize:'19px',cursor:'pointer',marginLeft:'90px'}} className= 'icon apple'/>
        <a style={{textDecoration: 'none'}} href="Store"><div style={{marginTop:'8px',color:'white',border:'none'}}>store</div></a>
        <div style={{marginTop:'8px'}}>mac</div>
        <div style={{marginTop:'8px'}}>ipad</div>
        <div style={{marginTop:'8px'}}>iphone</div>
        <div style={{marginTop:'8px'}}>watch</div>
        <div style={{marginTop:'8px'}}>vision</div>
        <div style={{marginTop:'8px'}}>Air Pods</div>
        <div style={{marginTop:'8px'}}>TV & Home</div>
        <div style={{marginTop:'8px'}}>Entertainment</div>
        <div style={{marginTop:'8px'}}>Accesories</div>
        <div style={{marginTop:'8px'}}>Support</div>
        <FaSearch style={{FaSearch,fontSize:'14px',marginTop:'8px'}} className= 'icon search'/>
        <a href="Signin"><FaShoppingBag style={{FaShoppingBag,fontSize:'14px',color:'white',marginTop:'8px',marginRight:'90px'}} className= 'icon shoppingbag'/></a>
        </navbar>
     
       <img  style ={{width:'100%'}}src={hp1} alt=''/>

       <div style={{height:'540px'}}>
       <img style={{width:'100%'}} src={hp2} alt=''/>
       </div>

       <div style={{height:'540px'}}>
       <img style={{width:'100%'}} src={hp3} alt=''/>
       </div>

       <div style={{height:'575px'}}>
       <img style={{width:'100%'}} src={hp4} alt=''/>
       </div>

       <div style={{height:'600px'}}>
       <img style={{width:'100%'}} src={hp5} alt=''/>
       </div>
       <div style={{height:'400px',marginLeft:'10%',marginRight:'8%',fontSize:'12px'}}>
      
      <div> 1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.</div><br/>
      <div>Apple Vision Pro has not been authorized as required by the rules of the Federal Communications Commission. This device is not, and may not be, offered for sale or lease, or sold or leased, until authorization is obtained.<br/></div>

<p>Apple Vision Pro will be available early next year on apple.com and at Apple retail stores in the U.S.</p><br/>
<p>To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.</p><br/>
<p>If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.</p><br/>
<p style={{marginLeft:'-30px'}}>Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.</p><br/>
<span>A subscription is required for Apple TV+.</span><br/>
      
</div>
<hr/>

<img  style ={{width:'90%',marginTop:'10px',backgroundColor:'rgb(245,245,247)'}}src={image4} alt=''/>

          </div>
  )
}

export default Homepage
