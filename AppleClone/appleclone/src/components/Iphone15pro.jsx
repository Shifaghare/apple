import React from 'react'
import './Homepage.css'
import {FaApple,FaSearch, FaShoppingBag} from 'react-icons/fa'
import pro1 from './pro1.png'


export const Iphone15pro = () => {
  return (
    <div id='Apple-Screen'>
      
     
      <navbar id='navbar'> 
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
        <FaShoppingBag style={{FaShoppingBag,fontSize:'14px',marginTop:'8px',marginRight:'90px'}} className= 'icon shoppingbag'/>
        </navbar>
        
        <navbar id='navbar2'>
        <div style={{backgroundColor:'white'}}>
          <div style={{display:'flex',justifyContent:'center'}} >Get $200–$650 in credit toward iPhone 15 or iPhone 15 Pro when you trade in an iPhone 11 or higher!! <div style={{color:'blue'}}>Shop iPhone</div></div>
        </div>
      </navbar>
      <div style={{height:'480px',backgroundColor:'black'}}>
      <img style={{position:'absolute',width:'100%',marginLeft:'-620px'}} src='https://www.apple.com/v/iphone-15-pro/b/images/overview/welcome/hero_startframe__ca87a9qj9rma_large_2x.jpg'/>

        <h1 style={{position:'relative',color:'rgb(190,184,174)',fontFamily:' SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif'}}>iPhone 15 Pro</h1>
        <h1 style={{position:'relative',color:'white',backgroundColor:'blue',width:'5%',borderRadius:'20px',fontSize:'15px',padding:'5px',marginTop:'26%',marginLeft:'48%'}}>Buy</h1>
        <h1 style={{position:'relative',color:'white',fontSize:'24px',fontFamily:' SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif'}}>From $999 or $41.62/mo. for 24 mo.</h1>
      </div> 

<div style={{height:'300px',backgroundColor:'rgb(16,16,16)',marginTop:'-3%',position:'relative'}}>
<h1 style={{color:'rgb(190,184,174)',fontFamily:' SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',marginLeft:'-50%',padding:'200px',fontSize:'49px'}}>Get the highlights.</h1>
</div>

<div style={{backgroundColor:'black',height:'500px',marginTop:'-20px'}}>
<img style={{marginTop:'-2px',position:'absolute',marginLeft:'-480px',width:'80%',height:'500px'}} src='https://www.apple.com/v/iphone-15-pro/b/images/overview/highlights/video/highlights_chip_endframe__3159yn2mzkyi_large.jpg' alt=''/>
<h1 style={{position:'relative',color:'white',marginLeft:'-900px',fontSize:'23px'}}> Enter A17 Pro</h1>
<h1 style={{position:'relative',color:'white',marginLeft:'-820px',fontSize:'23px'}}> Game-Changing Chip</h1>
<h1 style={{position:'relative',color:'white',marginLeft:'-720px',fontSize:'23px'}}> Groundbreaking performance.</h1>

</div>

<div style={{height:'190px',backgroundColor:'rgb(16,16,16)'}}>
<button style={{backgroundColor:'rgb(55,56,53)',width:'170px',height:'40px',border:'none',borderRadius:'40px',marginTop:'70px'}}>
  <h1 style={{color:'white',marginTop:'-1px',letterSpacing:'70px',fontSize:'5px',}}> 
  <button onClick={{height:'20px'}}></button>
  
<button></button>

  <button></button>
  <button></button>

  
  </h1></button>

  <div style={{height:'565px',marginTop:'78px'}}>
  <img  style ={{width:'100%'}}src={pro1} alt=''/>
</div>
<div className="flex-grid-images">
                        <img src="https://www.apple.com/v/iphone-15-pro/b/images/overview/design/titanium_endframe__jkbvub6cqj6u_small_2x.jpg" alt="" className="pro15imgs1" />
                        <img src="https://www.apple.com/v/iphone-15-pro/b/images/overview/design/lightest__boybgwifuehe_small_2x.jpg" alt="" className="pro15imgs2" />
                        <img src="https://www.apple.com/v/iphone-15-pro/b/images/overview/design/durable__omxi3w443rue_large_2x.jpg" alt="" className="pro15imgs3" />
                    </div>
</div>



















</div>
  )
}

export default Iphone15pro