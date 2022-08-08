import React, { useState } from 'react'
import '../Checkout/Checkout.css';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FiEdit2 } from "react-icons/fi";

function Shipmethod(props) {

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

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        trigger,
    } = useForm();

    const onSubmit = (data) => {
        reset();
    };

    return (
        <div className='shipmethods'>
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
                        <div className='shipmethods__ships'>
                            <div>
                                <h4>2. Shipping Methods</h4>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-check">
                                        <label htmlFor="ship">
                                            <input
                                                {...register('standard', { required: true })}
                                                type="radio"
                                                name="ship"
                                                className="form-check-input"
                                                checked
                                            />{' '}
                                            Standard Shipping (4-8 business days via USPS) FREE
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <label htmlFor="ship">
                                            <input
                                                {...register('express', { required: true })}
                                                type="radio"
                                                name="ship"
                                                className="form-check-input"
                                            />{' '}
                                            Express Delivery (2-5 business days via USPS) $17.95
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <label htmlFor="fries">
                                            <input
                                                {...register('nextday', { required: true })}
                                                type="radio"
                                                name="ship"
                                                className="form-check-input"
                                            />
                                            Next Day Delivery (Next business days via FedEx) $53.61
                                        </label>
                                    </div>
                                    <div className="text-danger mt-3">
                                        {errors.food?.type === 'required' &&
                                            'Please select Shipping Method.'}
                                    </div>
                                    <div className='checkout-buttons'>
                                        <Link className='button-secondary desktop-btn' to="/payment">CONTINUE TO PAYMENT</Link>
                                        <Link className='button-secondary mobile-btn' to="/payment">CONTINUE</Link>
                                    </div>
                                </form>
                            </div>

                            <div className='checkout__left-steps'>
                                <h4>3. Payment Information</h4>
                            </div>
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

export default Shipmethod;