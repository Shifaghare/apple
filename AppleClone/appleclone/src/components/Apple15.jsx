
import './AppleSingleProduct.css';

const AppleSingleProduct = () => {
    return (
        <div id='sp-screen'>
            <div style={{height:'60px'}}>
                <div style={{height:'40px',backgroundColor:'white',marginTop:'2px',marginLeft:'25%',marginRight:'25%',borderRadius:'20px',display:'flex',justifyContent:'space-evenly',marginTop:'-5px'}}>
                <div style={{height:'40px',borderRadius:'20px',width:'18%',backgroundColor:'black',color:'white'}}><b>iPhone15 Pro</b></div>
                <div style={{height:'40px',borderRadius:'25px',width:'17%'}}>iPhone 15</div>
                <div style={{height:'40px',borderRadius:'25px',width:'17%'}}>iPhone 14</div>
                <div style={{height:'40px',borderRadius:'25px',width:'17%'}}>iPhone 13 </div>
                <div style={{height:'40px',borderRadius:'25px',width:'17%'}}>iPhone SE</div>
                </div>
                
            </div>
            <div className='sp-body'>
                <div className='sp-body-upper'>
                    <div className='sp-body-left'>
                        <button className='sp-product-name'>iPhone 15 Pro</button>


                         <div id="carouselExample" class="carousel slide" style={{height:'400px',backgroundColor:'white',width:'100%'}}>
  <div class="carousel-inner" style={{width:'80%'}}>
    <div class="carousel-item active" >
      <img style={{height:'400px',width:'80%',marginTop:'-40px'}}src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone15pro-digitalmat-gallery-1-202309_GEO_US?wid=728&hei=666&fmt=png-alpha&.v=1693346851451" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item active" >
      <img style={{height:'400px',width:'80%',marginTop:'-40px'}}src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone15pro-digitalmat-gallery-2-202309?wid=728&hei=666&fmt=png-alpha&.v=1693081541434" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item active" >
      <img style={{height:'400px',width:'80%',marginTop:'-40px'}}src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone15pro-digitalmat-gallery-3-202309?wid=728&hei=666&fmt=png-alpha&.v=1693081542150" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img style={{height:'400px',width:'80%',marginTop:'-40px'}}src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone15pro-digitalmat-gallery-4-202309?wid=728&hei=666&fmt=jpeg&qlt=90&.v=1693081542280" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img style={{height:'400px',width:'80%',marginTop:'-40px'}}src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone15pro-digitalmat-gallery-5-202309?wid=728&hei=666&fmt=png-alpha&.v=1693081541860" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img style={{height:'400px',width:'80%',marginTop:'-40px'}}src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone15pro-digitalmat-gallery-6-202309?wid=728&hei=666&fmt=png-alpha&.v=1693081542138" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" style={{backgroundColor:'grey'}} aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" style={{backgroundColor:'grey'}} aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                      
                        <p className='sp-colors-p'>Available in 4 finishes</p>
                        <div className='sp-color-2'>
                            <span style={{backgroundColor:'rgb(186,180,169)'}}></span>
                            <span style={{backgroundColor:'rgb(68,76,92)'}}></span>
                            <span style={{backgroundColor:'rgb(242,242,236)'}}></span>
                            <span style={{backgroundColor:'rgb(73,74,76)'}}></span>
                        </div>
                    </div>
                    <div className='sp-body-right'>
                        <div className='sp-right-div1'>
                            <span className='sp-right-new'>NEW</span>
                            <h1>iPhone 15 Pro</h1>
                            <div className='sp-right-div1-div'>
                                <div>
                                    <span>From ₹21483.00/mo. with instant savings§§</span><br />
                                    <span>and No Cost EMI§ or ₹134900.00‡</span>
                                </div>
                                <button>Buy</button>
                            </div>
                        </div>
                        <div className='sp-right-div2'>
                            <div>
                                <div></div>
                                <div>15.5 cm (6.1-inch) Super Retina XDR display¹
                                    featuring ProMotion, Always-On and
                                    Dynamic Island</div>
                            </div>
                            <div>
                                <div></div>
                                <div>Strong and light titanium design with Action button-a
                                    fast track to your favourite feature</div>
                            </div>
                            <div>
                                <div></div>
                                <div>48MP Main camera for super-high-resolution photos and 3x
                                    Telephoto camera</div>
                            </div>
                            <div>
                                <div></div>
                                <div>A17 Pro chip delivers a massive leap in graphics performance,
                                    transforming mobile gaming</div>
                            </div>
                            <div>
                                <div></div>
                                <div>USB-C connector with USB 3 for up to 20x faster
                                    transfer speeds² and new pro workflows</div>
                            </div>
                            <p className='sp-right-last-a'>Explore iPhone 15 Pro further</p>
                        </div>
                    </div>
                </div>
                <div className='sp-foot'>
                    <div>
                    <i class="fa-solid fa-wallet"></i>
                    <span>Flexible ways to pay</span>
                    <p>No Cost EMI§ and EMI◊◊ available.</p>
                    </div>
                    <div>
                    <i class="fa-solid fa-money-bill-trend-up"></i>
                    <span>Apple Trade In</span>
                    <p>Trade in your eligible device for credit <br/>towards your next purchase.*</p>
                    </div>
                    <div>
                    <i class="fa-solid fa-truck"></i>
                    <span>Free delivery and pickup.</span>
                    <p>Get free delivery or pick up at your Apple <br/>Store.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppleSingleProduct;
