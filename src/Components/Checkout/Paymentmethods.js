import React, { useState } from 'react';
import '../Checkout/Checkout.css';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineQuestionCircle } from "react-icons/ai";

function Paymentmethods(props) {

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
        <div className='paymentmethods'>
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
                        <div className='shipmethods__ships'>
                            <div>
                                <h4>3. Payment Methods</h4>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-check">
                                        <label htmlFor="creditcard" className='xyz'>
                                            <input
                                                {...register('creditcard', { required: true })}
                                                type="radio"
                                                name="creditcard"
                                                className="form-check-input card-radio"
                                            />{' '}
                                            Credit Card
                                        </label>
                                    </div>
                                    <div class="aem-Grid aem-Grid--12">
                                        <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                            <div className="form-group">
                                                <label className="col-form-label">Name on Card</label>
                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.name && "invalid"}`}
                                                    {...register("fname", { required: "There is an error that relates to this field" })}
                                                    onKeyUp={() => {
                                                        trigger("fname");
                                                    }}
                                                />
                                                {errors.fname && (
                                                    <small className="text-danger">{errors.fname.message}</small>
                                                )}
                                            </div>
                                            <div className='form-group'>
                                                <label className="col-form-label">Credit Card Number</label>
                                                <input
                                                    className={`form-control ${errors.phone && "invalid"}`}

                                                    {...register("phone", {
                                                        required: "There is an error that relates to this field",
                                                        maxLength: {
                                                            value: 10,
                                                            message: 'error message' // JS only: <p>error message</p> TS only support string
                                                        }
                                                    })}
                                                    onKeyUp={() => {
                                                        trigger("phone");
                                                    }}
                                                />
                                                {errors.email && (
                                                    <small className="text-danger">{errors.phone.message}</small>
                                                )}
                                            </div>
                                            <div className='state-align'>
                                                <div class="aem-Grid aem-Grid--12">
                                                    <div class="aem-GridColumn aem-GridColumn--default--8">
                                                        <div className="form-group">
                                                            <label className="col-form-label">Expiration Date</label>
                                                            <input
                                                                className={`form-control ${errors.phone && "invalid"}`}
                                                                {...register("phone", {
                                                                    required: "There is an error that relates to this field",
                                                                    maxLength: {
                                                                        value: 10,
                                                                        message: 'error message' // JS only: <p>error message</p> TS only support string
                                                                    }
                                                                })}
                                                                onKeyUp={() => {
                                                                    trigger("phone");
                                                                }}
                                                            />
                                                            {errors.email && (
                                                                <small className="text-danger">{errors.phone.message}</small>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div class="aem-GridColumn aem-GridColumn--default--4">
                                                        <div className="form-group">
                                                            <label className="col-form-label">CVV</label>
                                                            <div className='cvv'>
                                                                <input
                                                                    className={`form-control ${errors.phone && "invalid"}`}

                                                                    {...register("phone", {
                                                                        required: "There is an error that relates to this field",
                                                                        maxLength: {
                                                                            value: 10,
                                                                            message: 'error message' // JS only: <p>error message</p> TS only support string
                                                                        }
                                                                    })}
                                                                    onKeyUp={() => {
                                                                        trigger("phone");
                                                                    }}
                                                                />
                                                                {errors.email && (
                                                                    <small className="text-danger">{errors.phone.message}</small>
                                                                )}
                                                                <span>
                                                                    <AiOutlineQuestionCircle />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='form save-card'>
                                                <input type="checkbox" /> Billing address same as shipping address
                                            </div>
                                        </div>
                                        <div class="aem-GridColumn aem-GridColumn--default--6"></div>
                                    </div>
                                </form>
                            </div>

                            <div className='checkout__left-steps'>

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-check paypal-check">
                                        <label htmlFor="payment" className='paypal-label'>
                                            <input
                                                {...register('standard', { required: true })}
                                                type="radio"
                                                name="payment"
                                                className="form-check-input"
                                            />{' '}
                                            Paypal
                                        </label>
                                    </div>
                                </form>
                                <div className='checkout-buttons'>
                                    <Link className='button-secondary desktop-btn' to="/review">CONTINUE TO REVIEW ORDER</Link>
                                    <Link className='button-secondary mobile-btn' to="/review">CONTINUE</Link>
                                </div>

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

export default Paymentmethods