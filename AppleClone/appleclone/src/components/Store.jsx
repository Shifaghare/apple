import React from 'react'
import './Homepage.css'
import {FaApple,FaSearch, FaShoppingBag} from 'react-icons/fa'
import askhelp from'./askhelp.png'
import image2 from './image2.png'
import image3 from './image3.png'
import image4 from './image4.png'

const Store = () => {
  return (
    <div id='Apple-Screen'>
      
     
      <navbar id='navbar'> 
      <FaApple style={{FaApple,fontSize:'19px',cursor:'pointer'}} className= 'icon apple'/>
      <div>store</div>
      <div>mac</div>
      <div>ipad</div>
      <div>iphone</div>
      <div>watch</div>
      <div>vision</div>
      <div>Air Pods</div>
      <div>TV & Home</div>
      <div>Entertainment</div>
      <div>Accesories</div>
      <div>Support</div>
      <FaSearch style={{FaSearch,fontSize:'14px'}} className= 'icon search'/>
      <FaShoppingBag style={{FaShoppingBag,fontSize:'14px'}} className= 'icon shoppingbag'/>
      </navbar>

      <navbar id='navbar2'>
        <div style={{backgroundColor:'white'}}>
          <div style={{display:'flex',justifyContent:'center'}} >Get $200–$650 in credit toward iPhone 15 or iPhone 15 Pro when you trade in an iPhone 11 or higher!! <div style={{color:'blue'}}>Shop iPhone</div></div>
        </div>
      </navbar>

      <div style={{height:'400px'}}> 
        <h1 style={{fontSize:'46px',marginLeft:'-22%',fontFamily: 'SF Pro Display,SF Pro Icons,AOS Icons,Helvetica Neue,Helvetica,Arial,sans-serif'}}>Store. <b style={{color:'grey'}}>The best way to buy the <br/><p style={{marginLeft:'-17%',marginTop:'-0.4%'}}>products you love.</p> </b></h1>
        <img style={{width:'17.5%',marginLeft:'80%',marginTop:'-11.5%'}} src={askhelp} alt=''/>

        <div style={{marginLeft:'5%',height:'150px',marginBottom:'20px',display:'flex',gap:'1%',marginTop:'5%',letterSpacing: '-0.07em',fontFamily: 'SF Pro Text,SF Pro Icons,AOS Icons,Helvetica Neue,Helvetica,Arial,sans-serif'}}>
         <div> <img style={{height:'75px',marginBottom:'20px'}} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-14-16-mac-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670959891635' alt=''/>
         <span style={{fontWeight:'400'}} >Mac</span>
         </div>
         <div><img style={{height:'75px',marginBottom:'20px'}}  src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202309_GEO_US?wid=400&hei=260&fmt=png-alpha&.v=1692971740190' alt=''/>
         <span >iPhone</span>
         </div>
         
         <div><img style={{height:'75px',marginBottom:'20px'}}  src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664912135437' alt=''/>
         <span >iPad</span>
         </div>
       
         <div><img  style={{height:'75px',marginBottom:'20px'}} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202309?wid=400&hei=260&fmt=png-alpha&.v=1693703822208' alt=''/>
         <span style={{display:'flex',marginLeft:'19px'}} >Apple Watch</span>
         </div>
     
         <div> <img  style={{height:'75px',marginBottom:'20px'}} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=400&hei=260&fmt=png-alpha&.v=1660676485885' alt=''/>
         <span >Airpods</span>
         </div>
   
         <div><img style={{height:'75px',marginBottom:'20px'}}  src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000' alt=''/>
         <span >Airtag</span>
         </div>
       
         <div><img style={{height:'75px',marginBottom:'20px'}}  src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664628458484' alt=''/>
         <span style={{display:'flex',marginLeft:'20px'}}>  Apple TV 4K</span>
         </div>
    
         <div><img style={{height:'75px',marginBottom:'20px'}}  src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670389216654' alt=''/>
         <span >HomePod</span>
         </div>
         </div>

        <div style={{height:'30px',fontSize: '28px', lineHeight: '1.14286',fontWeight: '600',letterSpacing: '.007em',
    fontFamily: 'SF Pro Display,SF Pro Icons,AOS Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    display: 'inline',marginLeft:'-30%'}}>The latest. <span style={{color:'grey'}}>Take a look at what’s new, right now.</span></div>













      </div>


      
      
      
      
      
      
      
      
      
      
      
      
      
    
      
      <img  style ={{width:'80%',marginTop:'60px'}}src={image2} alt=''/>
      <img  style ={{width:'75%',marginTop:'10px'}}src={image3} alt=''/>

       <h1 style={{textAlign:'left',marginLeft:'10%'}}>Quick Links</h1>
       <div style={{display:'flex',marginLeft:'10%',gap:'1%',borderRadius:'100%'}}>
        <button >Order Status</button>
        <button>Shopping Help</button>
        <button>Returns</button>
        <button>Your Saves</button>
       </div>

       <div>
        <p style={{marginLeft:'10%',marginRight:'8%',fontSize:'12px'}}>
        *Pricing for iPhone 15 and iPhone 15 Plus includes a $30 connectivity discount that requires activation with AT&T, T-Mobile, or Verizon. Available to qualified customers and requires 24-month installment loan when you select Citizens One or Apple Card Monthly Installments (ACMI) as payment type at checkout at Apple. You’ll need to select AT&T, T-Mobile, or Verizon as your carrier when you check out. An iPhone purchased with ACMI is always unlocked, so you can switch carriers at any time. Subject to credit approval and credit limit. Taxes and shipping are not included in ACMI and are subject to your card’s variable APR. Additional Apple Card Monthly Installments terms are in the Apple Card Customer Agreement(Opens in a new window). Additional iPhone Payments terms are here(Opens in a new window). ACMI is not available for purchases made online at special storefronts. The last month’s payment for each product will be the product's purchase price, less all other payments at the monthly payment amount. ACMI financing is subject to change at any time for any reason, including but not limited to, installment term lengths and eligible products. See https://support.apple.com/kb/HT211204(Opens in a new window) for information about upcoming changes to ACMI financing.

◊ Apple Card Monthly Installments (ACMI) is a 0% APR payment option that is only available if you select it at checkout in the U.S. for eligible Apple products purchased at Apple Store locations, apple.com(Opens in a new window), the Apple Store app, or by calling 1-800-MY-APPLE, and is subject to credit approval and credit limit. See https://support.apple.com/kb/HT211204(Opens in a new window) for more information about eligible products. APR ranges may vary based on when you accepted an Apple Card. Cardholders who accept an Apple Card on and/or after August 10, 2023: variable APRs for Apple Card, other than ACMI, range from 19.24% to 29.49% based on creditworthiness. Rates as of August 10, 2023. Existing cardholders: see your Customer Agreement for applicable rates and fee. If you buy an ACMI eligible product by choosing to pay in full with Apple Card (instead of using ACMI), that purchase is subject to the Apple Card variable APR, not 0% APR. Taxes and shipping on ACMI purchases are subject to the variable APR, not 0% APR. You’ll need to select AT&T, T-Mobile, or Verizon as your carrier when you check out. An iPhone purchased with ACMI is always unlocked, so you can switch carriers at any time. ACMI is not available for purchases made online at the following special stores: Apple Employee Purchase Plan; participating corporate Employee Purchase Programs; Apple at Work for small businesses; Government, and Veterans and Military Purchase Programs, or on refurbished devices. The last month’s payment for each product will be the product's purchase price, less all other payments at the monthly payment amount. ACMI financing is subject to change at any time for any reason, including but not limited to, installment term lengths and eligible products. See https://support.apple.com/kb/HT211204(Opens in a new window) for information about upcoming changes to ACMI financing. See the Apple Card Customer Agreement(Opens in a new window) for more information about ACMI financing.

To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.

If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.


          † Monthly pricing is available when you select Apple Card Monthly Installments (ACMI) as payment type at checkout at Apple, and is subject to credit approval and credit limit. Financing terms vary by product. Taxes and shipping are not included in ACMI and are subject to your card’s variable APR. See the Apple Card Customer Agreement(Opens in a new window) for more information. ACMI is not available for purchases made online at special storefronts. The last month’s payment for each product will be the product's purchase price, less all other payments at the monthly payment amount. ACMI financing is subject to change at any time for any reason, including but not limited to, installment term lengths and eligible products. See https://support.apple.com/kb/HT211204(Opens in a new window) for information about upcoming changes to ACMI financing.

° New and qualified returning subscribers only. $6.99/month after free trial. Only one offer per Apple ID and only one offer per family if you’re part of a Family Sharing group, regardless of the number of devices you or your family purchases. This offer is not available if you or your Family have previously accepted an Apple TV+ three months free or one year free offer. Offer good for 3 months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other terms apply.

^ Compatible hardware and software required. Not all content available in Spatial Audio with Dolby Atmos.

           1. Special pricing available to qualified customers. To learn more about how to start qualifying toward special pricing, talk to an Apple Specialist in a store or give us a call at 1‑800‑MY‑APPLE.

           2. $9 two-hour delivery on eligible Apple products in most metros. Offer is not available on customized Mac, engraved products, and for certain order types including orders paid for with financing or by bank transfer. Delivery times vary according to your selected delivery address, availability of your items, and the time of day you place your order. Find a store to view local store hours or see checkout for estimated delivery. A signature is required for delivery. Drivers may ask for verbal confirmation of receipt from a safe distance to satisfy the signature requirement. See https://www.apple.com/shop/shipping-pickup/ for more information.

           3. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.

          ⁺ New subscribers only. $10.99/month after trial. Offer available for a limited time to new subscribers who connect an eligible device to an Apple device running iOS 15 or iPadOS 15 or later. Offer good for 3 months after eligible device pairing. No audio product purchase necessary for current owners of eligible devices. Plan automatically renews until cancelled. Restrictions and other terms apply.

We approximate your location from your internet IP address by matching it to a geographic region or from the location entered during your previous visit to Apple.
        </p>
       </div>
       <img  style ={{width:'80%',marginTop:'10px',backgroundColor:'rgb(245,245,247)'}}src={image4} alt=''/>




    </div>
  )
}

export default Store
