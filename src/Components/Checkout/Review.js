import React, { useState } from 'react';
import '../Checkout/Checkout.css';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FiEdit2 } from "react-icons/fi";

function Review(props) {

    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const [qty, setQty] = useState(1);

    function onChange(e) {
        const v = e.target.value;
        if (v <= 0) setQty(0);
        else if (v >= 10) setQty(6);
        else setQty(v);
    }
    function decreaseQty() {
        if (qty <= 1) {
            setQty(1);
        } else {
            setQty(qty - 1);
        }
    }

    function increaseQty() {
        if (qty >= 10) {
            setQty(10);
        } else {
            setQty(qty + 1);
        }
    }
    const totalPrice = qty * itemsPrice + taxPrice + shippingPrice;

    return (
        <div className='revieworder'>
            <div className='container'>
                <center><h1>Checkout</h1></center>
                <h3>Guest Checkout</h3>
                <div class="aem-Grid aem-Grid--12">
                    <div class="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                        <div className='shipmethods__info'>
                            <div class="aem-Grid aem-Grid--12">
                                <div className='shipmethods__info-details'>
                                    <h6>Shipping Information</h6><Link to='#'><span className='edit-desktop'><FiEdit2 /> Edit</span><span className='edit-mbl'><FiEdit2 /></span></Link>
                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                    <p>
                                        q_farhan@gmail.com
                                    </p>
                                    <p className='mbl-number'>
                                        +1 (555) 229-3367
                                    </p>
                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
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
                        </div>
                        <div className='shipmethods__info'>
                            <div class="aem-Grid aem-Grid--12">
                                <div className='shipmethods__info-details'>
                                    <h6>Shipping Method</h6><Link to='#'><span className='edit-desktop'><FiEdit2 /> Edit</span><span className='edit-mbl'><FiEdit2 /></span></Link>
                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                    <p>
                                        Standard Shipping Est. delivery in 4 - 8 business days FREE
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='shipmethods__info'>
                            <div class="aem-Grid aem-Grid--12">
                                <div className='shipmethods__info-details'>
                                    <h6>Payment Information</h6><Link to='#'><span className='edit-desktop'><FiEdit2 /> Edit</span><span className='edit-mbl'><FiEdit2 /></span></Link>
                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                    <p>
                                        Credit Card
                                    </p>
                                    <p>
                                        Visa ending in 4567
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='shipmethods__info'>
                            <div class="aem-Grid aem-Grid--12">
                                <div className='shipmethods__info-details totalitems'>
                                    <h6>3 items in your order</h6>
                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                    <div className='items-inorder'>
                                        <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" />
                                        <div>
                                            <h6>Electric Leggings</h6>
                                            <p>Size: Medium</p>
                                            <p>Color: Storm</p>
                                            <p>Quantity: 2</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                    <div className='items-inorder'>
                                        <img src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg" />
                                        <div>
                                            <h6>Signature Sports Bra</h6>
                                            <p>Size: Medium</p>
                                            <p>Color: Red</p>
                                            <p>Quantity: 1</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='checkout-buttons'>
                                    <Link className='button-primary' to="/orderconfirmation">PLACE ORDER</Link>

                                    <p>By clicking confirm order you agree to our <Link to='#'>Terms and Conditions</Link></p>
                                </div>
                    </div>
                    <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                        <div className='checkout__right'>
                            
                            <div className='checkout__right-summary'>
                                <h4>Price Summary</h4>
                                <div>
                                    <p>Price</p>
                                    <p> ${qty * itemsPrice.toFixed(2)}</p>
                                </div>
                                <div>
                                    <p>Coupon</p>
                                    <p>-$0</p>
                                </div>
                                <div>
                                    <p>Giftcard</p>
                                    <p>-$0</p>
                                </div>
                                <div>
                                    <p>Estimated tax</p>
                                    <p>${taxPrice.toFixed(2)}</p>
                                </div>
                                <div>
                                    <p>Estimated shipping</p>
                                    <p>${shippingPrice.toFixed(2)}</p>
                                </div>
                                <div>
                                    <b><p>Estimated Total</p></b>
                                    <b> <p>${totalPrice.toFixed(2)}</p></b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review