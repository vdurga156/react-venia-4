import React from 'react';
import '../Checkout/Checkout.css';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FiEdit2 } from "react-icons/fi";
// import { BsInstagram } from "react-icons/bs";
// import { FiFacebook } from "react-icons/fi";
// import { FiTwitter } from "react-icons/fi";
import instagram from '../Checkout/instagram.png';
import facebook from '../Checkout/facebook.png';
import twitter from '../Checkout/twitter.png';


function OrderSuccess() {
    return (
        <div className='ordersuccessful'>
            <div className='container'>
                <center><h1>Order Successful!</h1></center>

                <div class="aem-Grid aem-Grid--12">
                    
                    <div class="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                    <h4>Order Number #1700834</h4>
                        <div className='ordersuccessful__info'>
                            <div class="aem-Grid aem-Grid--12">

                                <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                    <h6>Shipping Information</h6>
                                    <p>
                                        q_farhan@gmail.com
                                    </p>
                                    <p>
                                        +1 (555) 229-3367
                                    </p>
                                    <div className='ordersuccessful__info-items'>
                                        <p>
                                            Qadim Farhan
                                        </p>
                                        <p>
                                            1098 Wapello Street
                                        </p>
                                        <p>
                                            Altadena, California 91001
                                        </p>
                                        <p>
                                            United States
                                        </p>
                                    </div>
                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                    <h6>Shipping Method</h6>
                                    <p>
                                        Standard Shipping <br />Est. delivery in 4 - 8 business days <br />FREE
                                    </p>
                                    <div className='ordersuccessful__info-items'>
                                        <h6>Payment Information</h6>
                                        <p>
                                            Credit Card
                                        </p>
                                        <p>
                                            Visa ending in 4567
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='ordersuccessful__info'>
                            <div class="aem-Grid aem-Grid--12">
                                <div className='shipmethods__info-details'>
                                    <h6>3 items in your order</h6>
                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                    <div className='items-inorder'>
                                        <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" />
                                        <div>
                                            <h6>Electric Leggings</h6>
                                            <p><b>Size:</b> Medium</p>
                                            <p><b>Color:</b> Storm</p>
                                            <p><b>Quantity:</b> 2</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                    <div className='items-inorder'>
                                        <img src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg" />
                                        <div>
                                            <h6>Signature Sports Bra</h6>
                                            <p><b>Size:</b> Medium</p>
                                            <p><b>Color:</b> Red</p>
                                            <p><b>Quantity:</b> 1</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='ordersuccessful__message'>
                            <p>You will also receive an email with the details and we will let you know when your order has shipped.</p>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. For assistance call Support at 1-800-867-5309, M - F, 9am - 8pm EST.</p>
                        </div>
                    </div>
                    <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                        <div className='checkout__right'>
                            <div className='ordersuccessful-summary'>
                                <h2>Give us a follow <br />to SAVE 20% <br />on your next order.</h2>
                                <div className='ordersuccessful__socialicons'>
                                    <Link to='#'><img src={instagram} alt="instagram"/></Link>
                                    <Link to='#'><img src={facebook} alt="facebook"/></Link>
                                    <Link to='#'><img src={twitter} alt="twitter"/></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSuccess