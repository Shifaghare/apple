import './Cart.css';
import React from 'react';

const Cart = () => {
    return (
        <div id='cart-screen'>
            <div className='cart-header'>
                <p>
                Get $40–$650 credit toward your new iPhone.
                </p>
                <a>Learn more</a>
            </div>
            <div className='cart-topdiv'>
                <h1>Your bag total is $899 or $37.45 /mo.^</h1>
                <button>Check Out</button>
            </div>
            <div className='cart-body'>
                <div className='cart-left'>
              
        
                    <div className='cart-product-img'>
                        <img src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15hero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290559' />
                        <div style={{height:'190px',border:'2px solid red',marginTop:'360px'}}>
                            <img src/>
                        </div>
                    </div>
                </div>
                <div className='cart-right'>
                    <div className='cart-product-detials'>
                        <div className='cart-product-details-left'>
                            <h1>iPhone 15 Plus 128GB (Pink) </h1>
                            <p>Pay 15% pa for 6 month:</p>
                            
                        </div>
                        
                        <div className='cart-product-details-right'>

                            <div className='cart-pdr-div1'>
                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </select>
                                <h2>$899 or $37.45 /mo</h2>
                            </div>
                            <div className='cart-pdr-div2'>
                                
                                <p>Get up to $137.91 off with eligible card^</p>
                                <span>$258.59/mo^</span><br />
                                <button>Remove</button><br />
                                <button>Save for later</button>
                            </div>
                        </div>
                    </div>
                    <div className='cart-addapplecare'>
                        <div className='care-applecare-div1'>
                            <div>
                                <i class="fa-brands fa-apple"></i>
                                <h3>Add AppleCare+ for iPhone 15 Plus for $251.57</h3>
                            </div>
                            <button>Add</button>
                        </div>
                        <ul className='cart-applecare-ul'>
                            <li>Unlimited repairs for accidental damage protection</li>
                            <li>Apple-certified repairs using genuine Apple parts</li>
                            <li>Priority access to Apple experts</li>
                        </ul>
                        <a className='cart-applecare-learnmore'>Learn more</a>
                    </div>
                    <div className='cart-delivery-details'>
                        <h3>Find out how soon you can get this item. <span>Enter pin code</span></h3>
                        <span>Pick up at an Apple Store near you</span>
                    </div>
                </div>
            </div>



</div>
          
    )
}

export default Cart;