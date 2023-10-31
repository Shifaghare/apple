import React from 'react'
import './Homepage.css'
import {FaApple,FaSearch, FaShoppingBag} from 'react-icons/fa'
const Signin = () => {
  return (
    <div>
      
    <div style={{height: '46px',
    display: 'flex',
    justifyContent:'space-around',
    color: 'black',
    fontFamily:' SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    fontSize: '14px',
    lineHeight: '1.1428571429',
    letterSpacing: '.007em',
    top: '0',
    left: '0',
    width: '100%',
    padding:'1%'}}>
        <FaApple style={{FaApple,fontSize:'19px',cursor:'pointer',marginTop:'8px',marginLeft:'90px'}} className= 'icon apple'/>
        <div style={{marginTop:'8px'}}>store</div>
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
        <a href="Cart"><FaShoppingBag style={{FaShoppingBag,fontSize:'14px',marginTop:'8px',marginRight:'90px',}} className= 'icon shoppingbag'/></a>
        </div>
    
        <div style={{height:'160px'}}> 
      <h2 style={{marginLeft:'-480px',fontSize:'40px'}}>Sign in for faster checkout</h2>
</div>
<div style={{height:'200px',fontSize:'24px',fontWeight:'600',color:'rgb(73,73,73)'}}> 
<b>Sign in to Apple Store </b><br/>

<div>
{/* <FaSearch style={{FaSearch,fontSize:'14px',marginTop:'8px'}} className= 'icon search'/> */}
<input style={{width:'450px',marginTop:'40px',height:'50px',borderRadius:'10px',border:'1px solid black',fontSize:'17px'}} placeholder = 'Email or Phone Number'></input>
</div>
</div>

<div style={{height:'50px'}}>
<div><input type='checkbox'></input> <span style={{fontSize:'20px'}}>Remember me</span></div>
</div>

<div style={{height:'30px',fontSize:'14px',color:'rgb(20,114,208)'}}>
  Forgot Password? 
</div>
<div style={{height:'120px',fontSize:'14px',color:'rgb(73,73,73)'}}>
  Don't Have an Apple ID? <a href='Register'><span style={{color:'rgb(20,114,208)'}}>Create Yours Now.</span></a>
</div>
<hr/>
<div style={{height:'50px',fontSize:'17px'}}>
  <span style={{marginLeft:'-600px'}}>Need Some Help ? <span style={{color:'rgb(20,114,208)'}}>Chat Now</span> or call 1-800-MY APPLE</span>
</div>

<div style={{height:'150px',backgroundColor:'rgb(230,230,230)'}}>
<span style={{fontSize:'13px',marginLeft:'-99px',marginBottom:'10px'}}> The Apple Online Store uses industry-standard encryption to protect the confidentiality of the information you submit. Learn more about our Security Policy.</span>
<hr style={{width:'80%'}}/><br/>
<span style={{fontSize:'13px',marginLeft:'-99px'}}> More ways to shop: Find an Apple Store or other retailer near you. Or call 1‑800‑MY‑APPLE.</span><br/>
<span style={{fontSize:'13px',marginLeft:'-99px'}}>Copyright © 2023 Apple Inc. All rights reserved.</span>

</div>

    </div>
  )
}

export default Signin
