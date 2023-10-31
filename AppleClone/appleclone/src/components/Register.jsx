import React from 'react'
import './Homepage.css'
import {FaApple,FaSearch, FaShoppingBag} from 'react-icons/fa'
import register1 from './register1.png'

const Register = () => {
  return (
 
<div style={{height:'2000px'}}>
        
       
<div style={{height: '45px',
    display: 'flex',
    justifyContent:'space-around',
    color: 'white',
    fontFamily:' SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    fontSize: '14px',
    lineHeight: '1.1428571429',
    letterSpacing: '.007em',
    top: '0',
    left: '0',
    backgroundColor:'rgb(69,69,69)',
    width: '100%',
    padding:'1%'}}>
        <FaApple style={{FaApple,fontSize:'19px',cursor:'pointer',marginTop:'8px',marginLeft:'90px'}} className= 'icon apple'/>
        <div style={{marginTop:'8px'}}>Store</div>
        <div style={{marginTop:'8px'}}>Mac</div>
        <div style={{marginTop:'8px'}}>iPad</div>
        <div style={{marginTop:'8px'}}>iPhone</div>
        <div style={{marginTop:'8px'}}>Watch</div>
        <div style={{marginTop:'8px'}}>Vision</div>
        <div style={{marginTop:'8px'}}>Air Pods</div>
        <div style={{marginTop:'8px'}}>TV & Home</div>
        <div style={{marginTop:'8px'}}>Entertainment</div>
        <div style={{marginTop:'8px'}}>Accesories</div>
        <div style={{marginTop:'8px'}}>Support</div>
        <FaSearch style={{FaSearch,fontSize:'14px',marginTop:'8px'}} className= 'icon search'/>
        <FaShoppingBag style={{FaShoppingBag,fontSize:'14px',marginTop:'8px',marginRight:'90px'}} className= 'icon shoppingbag'/>
        </div>
         
    <div style={{height:'60px'}}>
        <div style={{marginLeft:'-73%',fontSize:'25px',marginTop:'8px',fontWeight:'600'}}>Apple ID</div>
        <div style={{marginTop:'-25px',gap:'20px',marginRight:'-800px',fontSize:'13px'}}>
        <span  style={{marginRight:'13px'}}>Sign in </span>
        <span style={{marginRight:'13px'}}> Create Your Apple ID</span>
        <span style={{}}> FAQ</span><br/>
       
        <hr style={{marginTop:'20px'}}/>
        </div>
    </div>
    

    <div style={{height:'50px',fontSize:'34px',fontWeight:'500'}}>
        Create Your Apple ID
    </div>
    <div style={{height:'30px',fontSize:'17px',fontWeight:'400'}}>
    One Apple ID is all you need to access all Apple services.
    </div>
    <div style={{height:'60px',fontSize:'17px',fontWeight:'400',}}>
 <input style={{marginRight:'20px',height:'45px',border:'1px solid black',borderRadius:'5px',fontSize:'17px',opacity:'0.5',width:'190px'}} placeholder='First Name'></input>
 <input style={{height:'45px',border:'1px solid black',borderRadius:'5px',width:'190px',fontSize:'17px',opacity:'0.5'}} placeholder='Last Name'></input>
    </div>

<div style={{marginTop:'20px',marginLeft:'-270px',fontWeight:'600'}}>
COUNTRY / REGION
</div>

<select style={{width:'420px',height:'45px',border:'1px solid black',opacity:'0.5',borderRadius:'5px',marginTop:'10px',fontSize:'17px'}}>
  <option >Afghanistan</option>
  <option >Albania</option>
  <option >Algeria</option>
  <option >Australia</option>
  <option >India </option>
  <option >Pakistan</option>
  <option >Dubai</option>
  <option >United States Of America</option>
  </select>

  <div>
    <input style={{width:'415px',height:'45px',border:'1px solid black',opacity:'0.5',borderRadius:'5px',marginTop:'10px',fontSize:'17px'}}placeholder='Birthday'></input>
  </div>
   <hr style={{width:'60%',opacity:'0.5'}}/>
   <div>
    <input style={{width:'415px',height:'45px',border:'1px solid black',opacity:'0.7',borderRadius:'5px',marginTop:'10px',fontSize:'17px'}}placeholder='name@example.com'></input>
  </div>
  <div style={{marginLeft:'-240px',color:'grey',fontSize:'14px'}}>This will be your new apple id</div>
  <div>
    <input style={{width:'415px',height:'45px',border:'1px solid black',opacity:'0.5',borderRadius:'5px',marginTop:'10px',fontSize:'17px'}} type='password' placeholder='Password'></input>
  </div>
  <div>
    <input style={{width:'415px',height:'45px',border:'1px solid black',opacity:'0.5',borderRadius:'5px',marginTop:'10px',fontSize:'17px'}} type='password' placeholder='Confirm Password'></input>
  </div>

  <hr style={{width:'60%',opacity:'0.5'}}/>

  <select style={{width:'420px',height:'45px',border:'1px solid black',opacity:'0.8',borderRadius:'5px',marginTop:'10px',fontSize:'17px'}}>
  <option >+91 (India)</option>
  <option >+1 (Usa)</option>
  <option >+41 (Switzerland)</option>
  <option >+971 (UAE)</option>
  <option >+61 (Australia) </option>
  <option >+967 (Yemen)</option>
  </select>
<br/>

<br/>


  <input style={{height:'45px',border:'1px solid black',borderRadius:'5px',fontSize:'17px',opacity:'0.5',width:'420px'}} placeholder='Phone Number'></input>

 <div style={{fontSize:'15px'}}>
 Be sure to enter a phone number you can always access. It will<br/> be used to verify your identity any time you sign in on a new <br/> device or web browser. Messaging or data rates may apply.
 </div>
 <br/>
 

<div>
    <div style={{display:'flex',marginLeft:'37%',fontSize:'16px',fontWeight:'400'}}>Verify with  :
        <input type='radio'></input>
        <div>Text message</div>
        <input type='radio'></input>
        <div>Phone Call</div>
    </div>
</div>
<br/>


<hr style={{width:'60%',opacity:'0.5'}}/>

<div style={{height:'80px'}}>
    
<span style={{marginLeft:'-300px',fontSize:'19px'}}><input type='checkbox'></input><b>Announcements</b><br/></span>
<span style={{marginLeft:'6px',fontSize:'14px'}}>Receive Apple emails and communications including announcements,<br/>
</span>
 <span style={{marginLeft:'32px',fontSize:'14px'}}>marketing, recommendations, and updates about Apple products, services<br/> </span>
 <span style={{marginLeft:'-345px',fontSize:'14px'}}>and software.</span>
</div>

<div style={{height:'100px',marginTop:'25px'}}>
    
<span style={{marginLeft:'-215px',fontSize:'19px'}}><input type='checkbox'></input><b>Apps,Music,TV and More..</b><br/></span>
<span style={{marginLeft:'40px',fontSize:'14px'}}>Receive Apple emails and communications including new releases, exclusive<br/>
</span>
 <span style={{marginLeft:'49px',fontSize:'14px'}}>content, special offers, and marketing and recommendations for apps, music,<br/> </span>
 <span style={{marginLeft:'-43px',fontSize:'14px'}}>movies, TV, books, podcasts, Apple Pay, Apple Card and more.</span>
</div>

<hr style={{width:'60%',opacity:'0.5'}}/>


<img style={{width:'60%'}} src={register1} alt=''/><br/>
<button style={{backgroundColor:'rgb(40,142,223)',border:'none',borderRadius:'6px',height:'40px',width:'99px',color:'white',fontSize:'17px' }}> Continue</button>













    </div>
  )
}

export default Register
